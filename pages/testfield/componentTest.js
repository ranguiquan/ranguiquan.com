import Paragraph from '../../components/Notion/Blocks/Paragraph';
import RichText from '../../components/Notion/Common/RichText';
import { getPageChildrenBlocks } from '../../lib/notion/page';

export const getStaticProps = async (ctx) => {
  const pageID = process.env.PAGE_ID;
  const data = await getPageChildrenBlocks(pageID);

  return {
    props: {
      data,
    },
  };
};

const componentTest = ({ data }) => {
  // console.log(data)
  const { paragraph } = data[0];
  return (
    <div>
      <Paragraph paragraph={paragraph} />
    </div>
  );
};

export default componentTest;
