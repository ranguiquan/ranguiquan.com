import { RichText } from '../../components/Notion/Common/RichText';
import { retrieve_nested_children } from '../../lib/notion/block';
import { blockMapper } from '../../lib/notion/blockMapper';
import { getPageContent, getPageMeta } from '../../lib/notion/page';
import { mock, mock_bullet } from '../../mock/mock';
import SyntaxHighlighter from 'react-syntax-highlighter';

// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// Just use 'cjs' rather than 'esm', I don't know why.
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353
import {
  docco,
  googlecode,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { retrieve_page } from '../../lib/notion/wrappedAPI';

export const getStaticProps = async (ctx) => {
  const pageID = process.env.PAGE_ID;
  const dataBaseID = process.env.DATABASE_ID;
  // const data = await getPageContent(pageID);
  // const data = await getPageList(dataBaseID);
  // const data = await retrieve_page({ page_id: pageID });
  const data = await getPageMeta(pageID)
  console.log(data)
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
  
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return <></>
  // return data.map(block=>blockMapper(block))
};

export default componentTest;
