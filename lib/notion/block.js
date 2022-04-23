import { retrieve_block_children } from './wrappedAPI';
import config from '../../site.config';
const limit = config.contentRequestLimit;

export const retrieve_nested_children = async (block) => {
  let currentBlock = block;
  let childrenList = [];
  let cursor = undefined;
  for (let i = 0; i < limit; i++) {
    const response = await retrieve_block_children({
      block_id: currentBlock.id,
      page_size: 100,
      start_cursor: cursor,
    });
    childrenList = [...childrenList, ...response.results];
    if (!response.has_more) break;
    cursor = response.next_cursor;
  }

  currentBlock.children = childrenList;
  await Promise.all(
    childrenList
      .filter((child) => child.has_children)
      .map((child) => {
        return retrieve_nested_children(child);
      })
  );
  return;
};
