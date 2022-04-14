import { notion } from '../lib/notion/client';
export async function getStaticProps() {
  const databaseID = process.env.DATABASE_ID;
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

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  const postList = data.results;
  return (
    <div>
      
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
