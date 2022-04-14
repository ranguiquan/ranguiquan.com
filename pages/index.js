import { PostCard } from '../components/PostCard/PostCard';
import { notion } from '../lib/notion/client';
import { getPageList } from '../lib/notion/page';
export async function getStaticProps() {
  const databaseID = process.env.DATABASE_ID;
  const data = await getPageList(databaseID);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  return (
    <div className='grid gap-2 grid-cols-1 md:grid-cols-2 grid-flow-row-dense'>
      {data.map((post) => (
        <PostCard key={post.id} post={post}></PostCard>
      ))}
    </div>
  );
}
