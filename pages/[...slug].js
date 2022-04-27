import { NextSeo } from 'next-seo';
import { PostPage } from '../components/Site';
import { PostCardDisplay } from '../components/Site/PostCardDisplay';
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
  // console.log('[dynamic path]', paths);

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
        break;
      case 'page':
        props.pageMeta = await getPageMeta(navItem.id);
        props.pageContent = await getPageContent(navItem.id);
        await handleBeforePageRender(props.pageContent);
        break;
      default:
        break;
    }
  } else {
    // params has 2 slugs
    props.pageMeta = await getPageMeta(params.slug[1]);
    props.pageContent = await getPageContent(params.slug[1]);
    await handleBeforePageRender(props.pageContent);
  }
  return {
    props: props,
    revalidate: 60,
  };
}

const page = (props) => {
  props.pageMeta &&
    console.log(
      props.pageMeta?.description.map((item) => item?.plain_text).join(' ')
    );
  return (
    <>
      {props.pageList && (
        <>
          <NextSeo
            title={`${config.siteName}[${props.navItem?.name}]`}
            canonical={[config.domain, ...new Array(props.slug)].join('/')}
          />
          <PostCardDisplay
            pageList={props.pageList}
            basePath={props.navItem.name}
          />
        </>
      )}
      {!props.pageList && (
        <>
          <NextSeo
            title={`${props.pageMeta?.name} [${props.navItem?.name}] - ${config.siteName}`}
            canonical={[config.domain, ...new Array(props.slug)].join('/')}
            description={props.pageMeta?.description
              .map((item) => item?.plain_text)
              .join(' ')}
          />
          <PostPage pageMeta={props.pageMeta} pageContent={props.pageContent} />
        </>
      )}
    </>
  );
};

export default page;
