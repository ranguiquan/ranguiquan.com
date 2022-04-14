import { PostHead } from '../components/Post';
import { getPage } from '../lib/notion/page';

export async function getStaticProps() {
  const pageID = process.env.PAGE_ID;
  const data = await getPage(pageID);
  console.log(data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const post = ({ data }) => {
  return (
    <div>
      <PostHead {...data} />
      <pre className=' overflow-auto'>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default post;
