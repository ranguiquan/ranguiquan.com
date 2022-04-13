import { notion } from '../lib/notion/client';
import { getPage } from '../lib/notion/page';

export async function getStaticProps() {
  const databaseID = process.env.DATABASE_ID;
  const pageID = process.env.PAGE_ID;
  // const data = await getPage(pageID);

  const data = await notion.databases.query({
    database_id: databaseID,
    filter: {
      and: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Created',
        direction: 'descending',
      },
    ],
  });

  // const data = await notion.databases.retrieve({ database_id: databaseID });

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const apitest = ({ data }) => {
  return (
    <div>
      <pre>{data.results.length}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default apitest;
