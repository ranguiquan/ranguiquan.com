import Paragraph from '../../components/Notion/Blocks/Paragraph';
import RichText from '../../components/Notion/Common/RichText';
import { blockMap, blockMapper } from '../../lib/notion/blockMapper';
import { getPageChildrenBlocks, getPageList } from '../../lib/notion/page';
import { mock } from '../../mock/mock';

export const getStaticProps = async (ctx) => {
  const pageID = process.env.PAGE_ID;
  const dataBaseID = process.env.DATABASE_ID;
  // const data = await getPageChildrenBlocks(pageID);
  const data = await getPageList(dataBaseID);

  return {
    props: {
      data,
    },
  };
};

const componentTest = ({ data }) => {
  // const data = mock;

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
