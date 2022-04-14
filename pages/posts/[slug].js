import { PostHead } from '../../components/Post';
import { getPage } from '../../lib/notion/page';
import { notion } from '../../lib/notion/client';

export async function getStaticPaths() {
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
    paths: data.results.map((i) => {
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
  const data = await getPage(pageID);
  console.log(data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const Post = ({ data }) => {
  return (
    <div>
      <PostHead {...data} />
      <pre className=' overflow-auto'>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Post;
