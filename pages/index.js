import { PostCard, PostPage } from '../components/Site';
import { PostCardDisplay } from '../components/Site/PostCardDisplay';
import { getPageContent, getPageList, getPageMeta, handleBeforePageRender } from '../lib/notion/page';
import config from '../site.config';

export async function getStaticProps() {
  const { nav } = config;
  const navItem = nav[0];
  const props = {};
  props.navItem = navItem;
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
  return {
    props: props, // will be passed to the page component as props
    revalidate: 60,
  };
}

export default function Home(props) {
  return (
    <>
      {props.pageList && (
        <PostCardDisplay
          pageList={props.pageList}
          basePath={props.navItem.name}
        />
      )}
      {!props.pageList && (
        <PostPage pageMeta={props.pageMeta} pageContent={props.pageContent} />
      )}
    </>
  );
}
