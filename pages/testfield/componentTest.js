import Paragraph from '../../components/Notion/Blocks/Paragraph';
import RichText from '../../components/Notion/Common/RichText';
import { retrieve_nested_children } from '../../lib/notion/block';
import { blockMap, blockMapper } from '../../lib/notion/blockMapper';
import { getPageChildrenBlocks, getPageList } from '../../lib/notion/page';
import { mock, mock_bullet } from '../../mock/mock';

export const getStaticProps = async (ctx) => {
  const pageID = process.env.PAGE_ID;
  const dataBaseID = process.env.DATABASE_ID;
  const data = await getPageChildrenBlocks(pageID);
  await (async () => {
    for (let i = 0; i < data.length; i++) {
      await retrieve_nested_children(data[i]);
    }
  })();

  // const data = await getPageList(dataBaseID);

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

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default componentTest;
