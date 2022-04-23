import { retrieve_nested_children } from './block';
import { query_page_list, retrieve_block, retrieve_page } from './wrappedAPI';

// get A single pageMeta
export const getPageMeta = async (pageID) => {
  // console.log(`[getPageMeta]: Start, getting page meta.
  //   pageID: ${pageID}`);
  const pageMeta = await retrieve_page({ page_id: pageID });
  // console.log(`[getPageMeta]: Close.`);
  return handleRawPage(pageMeta);
};

// get pageMeta list in a database
export const getPageList = async (databaseID) => {
  let res = null;
  // console.log(`[getPageList]: Start.
  //   databaseID: ${databaseID}`);
  res = await query_page_list({ database_id: databaseID });
  // console.log(`[getPageList]: Close.`);
  return res.results?.map((rawPage) => handleRawPage(rawPage));
};

// get page's children blocks
export const getPageContent = async (pageID) => {
  const pageBlock = await retrieve_block({ block_id: pageID });
  await retrieve_nested_children(pageBlock);
  return pageBlock?.children;
};

export const handleRawPage = (rawPage) => {
  return {
    id: rawPage.id,
    name: rawPage.properties.Name.title[0].plain_text,
    created_time: rawPage.created_time,
    last_edited_time: rawPage.last_edited_time,
    icon: rawPage?.icon?.emoji || '',
    cover: rawPage?.cover?.external?.url || '',
    tags: rawPage?.properties?.Tags?.multi_select || '',
    description:
      rawPage?.properties?.Description?.rich_text[0]?.plain_text || '',
    author: rawPage?.properties?.Author?.people[0]?.name || '',
  };
};
