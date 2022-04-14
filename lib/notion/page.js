import { notion } from './client';

export const getPage = async (pageID) => {
  let res = null;
  try {
    console.log(`[getPage]: Start, getting page info.
    pageID:  ${pageID}`);
    res = await notion.pages.retrieve({ page_id: pageID });
  } catch (e) {
    console.log(e);
  }
  console.log(`[getPage]: Close.`);
  return handleRawPage(res);
};

export const getPageList = async (databaseID) => {
  let res = null
  try {
    console.log(`[getPageList]: Start.
    databaseID: ${databaseID}`);
    res = await notion.databases.query({
      database_id: databaseID,
      filter: {
        and: [
          {
            property: 'Published',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'Created',
          direction: 'descending',
        },
      ],
    });
  } catch (e) {
    console.log(e);
  }
  console.log(`[getPageList]: Close.`);
  return res.results.map((rawPage) => handleRawPage(rawPage));
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

export const getPageChildrenBlocks = async (pageID) => {
  let res = [];
  const requestLimit = parseInt(process.env.LIMIT) || 100;
  console.log(
    `[getPageChildrenBlocks]: Start, getting page's children blocks.
    pageID: ${pageID}
    request limit: ${requestLimit}`
  );
  let cursor = undefined;
  try {
    for (let i = 0; i < requestLimit; i++) {
      console.log(
        `[getPageChildrenBlocks]: Getting page children blocks, ${i} piece.`
      );
      const childrenBlocks = await notion.blocks.children.list({
        block_id: pageID,
        page_size: 100,
        start_cursor: cursor,
      });
      res = res.concat(childrenBlocks.results);
      cursor = childrenBlocks.next_cursor;
      if (!childrenBlocks.has_more) {
        break;
      }
    }
  } catch (e) {
    console.log(e);
  }
  console.log(`[getPageChildrenBlocks]: Close.`);
  return res;
};
