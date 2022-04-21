import { RichText } from '../../components/Notion/Common/RichText';
import { retrieve_nested_children } from '../../lib/notion/block';
import { blockMapper } from '../../lib/notion/blockMapper';
import { getPageContent } from '../../lib/notion/page';
import { mock, mock_bullet } from '../../mock/mock';
import SyntaxHighlighter from 'react-syntax-highlighter';

// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// Just use 'cjs' rather than 'esm', I don't know why.
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230#issuecomment-568377353
import {
  docco,
  googlecode,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export const getStaticProps = async (ctx) => {
  const pageID = '4ea94761d97045818849a52bbb030d97';
  const dataBaseID = process.env.DATABASE_ID;
  // const data = await getPageContent(pageID);
  // const data = await getPageList(dataBaseID);
  const data = mock;

  return {
    props: {
      data,
    },
  };
};

const componentTest = ({ data }) => {
  // const data = mock;
  // const data = mock_bullet

  return (
    <>
      {data.map((item) => {
        return blockMapper(item);
      })}
    </>
  );
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;

  // return data.map(block=>blockMapper(block))
};

export default componentTest;
