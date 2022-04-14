import { notion } from './client';

export const getPage = async (pageID) => {
  const res = await notion.pages.retrieve({ page_id: pageID });
  return handleRawPage(res);
};

export const getPageList = async (databaseID) => {
  const res = await notion.databases.query({
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
