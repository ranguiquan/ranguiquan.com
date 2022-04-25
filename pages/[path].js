import { PostHead } from '../components/Post';
import { blockMapper } from '../lib/notion/blockMapper';
import { getPageContent, getPageMeta } from '../lib/notion/page';
import config from '../site.config';
import { handleBeforePageRender } from './../lib/notion/page';
const { nav } = config;

export async function getStaticPaths() {
  return {
    paths: nav
      .filter((item) => item.type === 'page')
      .map((item) => {
        return {
          params: {
            path: item.name,
          },
        };
      }),
    // [
    // { params: { ... } }
    // ],
    fallback: true, // false or 'blocking'
  };
}

export const getStaticProps = async ({ params }) => {
  const { path } = params;
  const pageID = nav.filter((item) => item.name === path)[0].id;
  const pageMeta = await getPageMeta(pageID);
  const pageContent = await getPageContent(pageID);
  await handleBeforePageRender(pageContent);
  return {
    props: {
      pageMeta,
      pageContent,
    },
    revalidate: 60,
  };
};

const ConfiguredPage = ({ pageMeta, pageContent }) => {
  return (
    <div>
      <PostHead {...pageMeta} />
      <main className=''>
        {pageContent?.map((block, index) => {
          if (block.type === 'numbered_list_item') {
            if (
              index === 0 ||
              pageContent[index - 1].type !== 'numbered_list_item'
            ) {
              block.number = 1;
            } else {
              block.number = pageContent[index - 1].number + 1;
            }
          }

          return blockMapper(block);
        })}
      </main>
    </div>
  );
};

export default ConfiguredPage;
