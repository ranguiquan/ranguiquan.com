import { notion } from '../lib/notion';

export async function getStaticProps() {
  const databaseID = process.env.DATABASE_ID;
  const pageID = process.env.PAGE_ID;
  const data = await notion.pages.retrieve({ page_id: pageID });

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
