import { retrieve_nested_children } from '../../lib/notion/block';
import { getPageContent } from '../../lib/notion/page';
import { mock, mock_bullet } from '../../mock/mock';

export const getStaticProps = async (ctx) => {
  const pageID = '4ea94761d97045818849a52bbb030d97';
  const dataBaseID = process.env.DATABASE_ID;
  const data = await getPageContent(pageID);
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
  // 1e2af91c-d91a-4ec7-90d1-895b332f2af4
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default componentTest;
