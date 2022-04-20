import { RichText } from '../../components/Notion/Common/RichText';
import { retrieve_nested_children } from '../../lib/notion/block';
import { blockMapper } from '../../lib/notion/blockMapper';
import { getPageContent } from '../../lib/notion/page';
import { mock, mock_bullet } from '../../mock/mock';
// import hljs from 'highlight.js';
import hljs from 'highlight.js/lib/common';

export const getStaticProps = async (ctx) => {
  const pageID = '4ea94761d97045818849a52bbb030d97';
  const dataBaseID = process.env.DATABASE_ID;
  const data = await getPageContent(pageID);
  // const data = await getPageList(dataBaseID);
  // const data = mock;

  return {
    props: {
      data,
    },
  };
};

const componentTest = ({ data }) => {
  // const data = mock;
  // const data = mock_bullet

  // return (
  //   <>
  //     {data.map((item) => {
  //       return blockMapper(item);
  //     })}
  //   </>
  // );
  console.log(data[0].code.rich_text[0].plain_text);
  return (
    <pre
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(data[0].code.rich_text[0].plain_text, {
          language: 'javascript',
        }).value,
      }}></pre>
  );
};

export default componentTest;
