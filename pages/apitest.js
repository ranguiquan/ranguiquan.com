import { notion } from '../lib/notion/client';
import { getPage, getPageChildrenBlocks, getPageList } from '../lib/notion/page';

export async function getStaticProps() {
  const databaseID = process.env.DATABASE_ID;
  const pageID = process.env.PAGE_ID;
  const data = await getPageChildrenBlocks(pageID);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const apitest = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default apitest;
