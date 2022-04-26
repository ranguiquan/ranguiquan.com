import { PostHead } from '../../components/Site';
import { blockMapper } from '../../lib/notion/blockMapper';
import {
  getPageContent,
  getPageList,
  getPageMeta,
  handleBeforePageRender,
} from '../../lib/notion/page';
import config from '../../site.config';


const databaseID = config.blogDatabaseID;

export async function getStaticPaths() {
  const page = await getPageList(databaseID);

  return {
    paths: page?.map((i) => {
      return {
        params: {
          slug: i.id,
        },
      };
    }),
    // paths: [{ params: {} }],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const pageID = slug;
  const pageMeta = await getPageMeta(pageID);
  const pageContent = await getPageContent(pageID);
  await handleBeforePageRender(pageContent);
  return {
    props: { pageMeta, pageContent }, // will be passed to the page component as props
    revalidate: 60,
  };
}

function post({ pageMeta, pageContent }) {
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
}
export default post;
