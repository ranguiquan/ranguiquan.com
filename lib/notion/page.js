import { notion } from './client';

export const getPage = async (pageID) => {
  const response = await notion.pages.retrieve({ page_id: pageID });

  return response
};
