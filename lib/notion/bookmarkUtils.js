import  { getMetadata } from 'page-metadata-parser';
import  domino from 'domino';
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

export const appendMetadata = async (block) => {
  if (block.type === 'bookmark' && block.has_children) {
    await Promise.all([
      getBookMarkURLMeta(block.bookmark),
      block.children.map((item) => appendMetadata(item)),
    ]);
    return;
  } else if (block.type === 'bookmark') {
    await getBookMarkURLMeta(block.bookmark);
    return;
  } else if(block.has_children) {
    await Promise.all(
      block.children.map((item) => appendMetadata(item))
    );
    return;
  } else {
    return;
  }
};
