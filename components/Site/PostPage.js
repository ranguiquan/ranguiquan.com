import { PostHead } from '../Site';
import { blockMapper } from '../../lib/notion/blockMapper';

export const PostPage = ({ pageMeta, pageContent }) => {
  return (
    <div>
      <PostHead {...pageMeta} />
      <main className=''>
        {pageContent?.map((block, index) => {
          if (block.type === 'numbered_list_item') {
            if (
              index === 0 ||
              pageContent[index - 1].type !== 'numbered_list_item'
            ) {
              block.number = 1;
            } else {
              block.number = pageContent[index - 1].number + 1;
            }
          }

          return blockMapper(block);
        })}
      </main>
    </div>
  );
};
