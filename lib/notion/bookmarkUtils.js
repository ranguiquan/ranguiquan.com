import { getMetadata } from 'page-metadata-parser';
import domino from 'domino';
/**
 * Get metadata from site linked to  bookmark.url
 * and add that to bookmark.metadata
 *
 * @param {notion_bookmark_block.bookmark} bookmark
 */
export const getBookMarkURLMeta = async (bookmark) => {
  const { url } = bookmark;
  try {
    const response = await fetch(url);
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    const metadata = getMetadata(doc, url);
    for (const key in metadata) {
      metadata[key] = metadata[key] || '';
    }
    bookmark.metadata = metadata;
  } catch (e) {
    console.log(e);
  }
};
/**
 * Search nested layers and add a metadata to the bookmark block if needed.
 * @param {notion_block} block
 * @returns
 */
export const appendMetadata = async (block) => {
  if (block.type === 'link_preview') {
    //  render link_preview to a bookmark
    block.bookmark = block.link_preview;
    block.type = 'bookmark';
  }
  if (block.type === 'bookmark' && block.has_children) {
    await Promise.all([
      getBookMarkURLMeta(block.bookmark),
      block.children.map((item) => appendMetadata(item)),
    ]);
    return;
  } else if (block.type === 'bookmark') {
    await getBookMarkURLMeta(block.bookmark);
    return;
  } else if (block.has_children) {
    await Promise.all(block.children.map((item) => appendMetadata(item)));
    return;
  } else {
    return;
  }
};
