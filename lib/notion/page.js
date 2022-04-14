import { notion } from './client';

export const getPage = async (pageID) => {
  const res = await notion.pages.retrieve({ page_id: pageID });
  const data = {
    name: res.properties.Name.title[0].plain_text,
    created_time: res.created_time,
    last_edited_time: res.last_edited_time,
    icon: res?.icon?.emoji || '',
    cover: res?.cover?.external?.url || '',
    tags: res?.properties?.Tags?.multi_select || '',
    description: res?.properties?.Description?.rich_text[0]?.plain_text || '',
    author: res?.properties?.Author?.people[0]?.name || '',
  };
  return data;
};
