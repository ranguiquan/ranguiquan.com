import RichText from '../../components/Notion/Common/RichText';
import { getPageChildrenBlocks } from '../../lib/notion/page';

const mock = [];

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
  const texts = data[0].heading_1.rich_text;
  return (
    <div>
      {texts.map((i, index) => {
        return <RichText rich_text={i} key={index} />;
      })}
    </div>
  );
};

export default componentTest;
