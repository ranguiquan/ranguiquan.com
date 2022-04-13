import PostHead from '../../components/Post/PostHead';
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
  const res = await getPage(pageID);
  const data = {
    name: res.properties.Name.title[0].plain_text,
    created_time: res.created_time,
    last_edited_time: res.last_edited_time,
    icon: res.icon.emoji,
    cover: res.cover.external.url,
    tags: res.properties.Tags.multi_select,
    description: res.properties.Description.rich_text[0].plain_text,
    author: res.properties.Author.people[0].name,
  };
  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}

const Post = ({data}) => {
  return (
    <div>
      <PostHead {...data} />
      <pre className=' overflow-auto'>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Post;
