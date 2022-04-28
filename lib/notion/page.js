import { retrieve_nested_children } from './block';
import { query_page_list, retrieve_block, retrieve_page } from './wrappedAPI';
import { appendMetadata } from './bookmarkUtils';

/**
 * Get page metadata and wash it through handleRawPage
 * @param {pageID} pageID
 * @returns {
 * id,
 * name,
 * created_time,
 * last_edited_time,
 * icon,
 * cover,
 * tags,
 * description,
 * author,
 * date }
 */
export const getPageMeta = async (pageID) => {
  const pageMeta = await retrieve_page({ page_id: pageID });
  return handleRawPage(pageMeta);
};

/**
 * get page list in a database
 * @param {databaseID} databaseID 
 * @returns [notion_page]
 */
export const getPageList = async (databaseID) => {
  let res = null;
  res = await query_page_list({ database_id: databaseID });
  return res.results
    ?.map((rawPage) => handleRawPage(rawPage))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * get page's children blocks in a list
 * @param {pageID} pageID 
 * @returns [notion_block]
 */
export const getPageContent = async (pageID) => {
  const pageBlock = await retrieve_block({ block_id: pageID });
  await retrieve_nested_children(pageBlock);
  return pageBlock?.children;
};

/**
 * pull useful information from a page
 * @param {notion_page} rawPage 
 * @returns 
 */
export const handleRawPage = (rawPage) => {
  return {
    id: rawPage.id,
    name: rawPage.properties.Name.title[0].plain_text,
    created_time: rawPage.created_time,
    last_edited_time: rawPage.last_edited_time,
    icon: rawPage?.icon?.emoji || '',
    cover: rawPage?.cover?.external?.url || '',
    tags: rawPage?.properties?.Tags?.multi_select || [],
    description: rawPage?.properties?.Description?.rich_text || [],
    author: rawPage?.properties?.Author?.people || [],
    date: rawPage?.properties?._Date?.date?.start || rawPage.created_time,
    isContentTableHidden: rawPage?.properties?.isContentTableHidden?.checkbox,
    isDateHidden: rawPage?.properties?.isDateHidden?.checkbox,
  };
};
/**
 * support bookmark block, add metadata attribute to it.
 * @param {[notion_block]} pageContent 
 */
export const handleBeforePageRender = async (pageContent) => {
  await Promise.all(pageContent.map((item) => appendMetadata(item)));
};
