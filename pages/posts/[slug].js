import { PostHead } from '../../components/Post';
import { blockMapper } from '../../lib/notion/blockMapper';
import {
  getPageContent,
  getPageList,
  getPageMeta,
} from '../../lib/notion/page';

export async function getStaticPaths() {
  const databaseID = process.env.DATABASE_ID;
  const page = await getPageList(databaseID);

  return {
    paths: page.map((i) => {
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

  return {
    props: { pageMeta, pageContent }, // will be passed to the page component as props
    revalidate: 60,
  };
}

function post({ pageMeta, pageContent }) {
  return (
    <div>
      <PostHead {...pageMeta} />
      {pageContent?.map((block) => blockMapper(block))}
    </div>
  );
}
export default post;
