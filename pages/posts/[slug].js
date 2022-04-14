import { PostHead } from '../../components/Post';
import { getPage, getPageList } from '../../lib/notion';
import { notion } from '../../lib/notion/client';
import { getPageChildrenBlocks } from '../../lib/notion/page';

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
  const page = await getPage(pageID);

  const pageBlock = await notion.blocks.retrieve({
    block_id: pageID,
  });

  const childrenBlocks = await getPageChildrenBlocks(pageID);

  return {
    props: { page, pageBlock, childrenBlocks }, // will be passed to the page component as props
  };
}

const Post = ({ page, pageBlock, childrenBlocks }) => {
  return (
    <div>
      <PostHead {...page} />
      <pre>{JSON.stringify(childrenBlocks.length, null, 2)}</pre>
      <pre className=' overflow-auto'>
        {JSON.stringify(childrenBlocks, null, 2)}
      </pre>
    </div>
  );
};

export default Post;
