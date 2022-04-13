import PostHead from '../components/Post/PostHead';
import { getPage } from '../lib/notion/page';

export async function getStaticProps() {
  const pageID = process.env.PAGE_ID;
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

const post = ({ data }) => {

  return (
    <div>
      <PostHead {...data}/>
      <pre className=' overflow-auto'>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default post;
