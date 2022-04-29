import { NextSeo } from 'next-seo';
import { PostPage } from '../components/Site';
import { PostCardDisplay } from '../components/Site/PostCardDisplay';
import { getCommentPageList } from '../lib/notion';
import {
  getPageList,
  getPageMeta,
  getPageContent,
  handleBeforePageRender,
} from '../lib/notion/page';
import config from '../site.config';
const { nav } = config;

export async function getStaticPaths() {
  let paths = [];
  // get database paths
  await Promise.all(
    nav
      ?.filter((item) => item.type === 'database')
      ?.map((item) => {
        return getPageList(item.id).then((pageList) => {
          pageList.forEach((page) => {
            paths.push({
              params: {
                slug: [item.name, page.id],
              },
            });
          });
        });
      })
  );
  // get page paths
  paths = [
    ...nav
      ?.slice(1, nav.length)
      ?.filter((item) => item.type === 'page')
      ?.map((item) => {
        return {
          params: {
            slug: [item.name],
          },
        };
      }),
    ...paths,
  ];

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const props = {};
  const navItem = nav.filter((item) => item.name === params.slug[0])[0];
  props.navItem = navItem;
  props.slug = params.slug;
  if (params.slug.length === 1) {
    // if only have one slug
    switch (navItem.type) {
      case 'database':
        props.pageList = await getPageList(navItem.id);
        props.pageMeta = null;
        props.pageContent = null;
        break;
      case 'page':
        props.pageList = null;
        // props.pageMeta = await getPageMeta(navItem.id);
        // props.pageContent = await getPageContent(navItem.id);
        // props.pageList = await getCommentPageList(navItem.id);
        // await handleBeforePageRender(pageContent);
        await Promise.all([
          getPageMeta(navItem.id).then((res) => (props.pageMeta = res)),
          getPageContent(navItem.id)
            .then((res) => (props.pageContent = res))
            .then(() => handleBeforePageRender(props.pageContent)),
          getCommentPageList(navItem.id).then(
            (res) => (props.commentPageList = res)
          ),
        ]);
        break;
      default:
        break;
    }
  } else {
    // params has 2 slugs

    props.pageList = null;
    // props.pageMeta = await getPageMeta(params.slug[1]);
    // props.pageContent = await getPageContent(params.slug[1]);
    // props.pageList = await getCommentPageList(params.slug[1]);
    // await handleBeforePageRender(pageContent);
    await Promise.all([
      getPageMeta(params.slug[1]).then((res) => (props.pageMeta = res)),
      getPageContent(params.slug[1])
        .then((res) => (props.pageContent = res))
        .then(() => handleBeforePageRender(props.pageContent)),
      getCommentPageList(params.slug[1]).then(
        (res) => (props.commentPageList = res)
      ),
    ]);
  }
  return {
    props: props,
    revalidate: 1,
  };
}

const page = ({ pageList, pageMeta, pageContent, navItem, slug, commentPageList }) => {
  return (
    <>
      {pageList && (
        <>
          <NextSeo
            title={`${config.siteName}[${navItem?.name}]`}
            canonical={[config.domain, ...new Array(slug)].join('/')}
          />
          <PostCardDisplay pageList={pageList} basePath={navItem.name} />
        </>
      )}
      {!pageList && (
        <>
          <NextSeo
            title={`${pageMeta?.name} [${navItem?.name}] - ${config.siteName}`}
            canonical={[config.domain, ...new Array(slug)].join('/')}
            description={pageMeta?.description
              .map((item) => item?.plain_text)
              .join(' ')}
          />
          <PostPage
            pageMeta={pageMeta}
            pageContent={pageContent}
            // TODO:
            commentPageList={commentPageList}
          />
        </>
      )}
    </>
  );
};

export default page;
