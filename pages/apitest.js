import { notion } from '../lib/notion';

export async function getStaticProps() {
  const databaseID = process.env.DATABASE_ID;
  console.log(databaseID);
  const data = await notion.databases.retrieve({ database_id: databaseID });
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
