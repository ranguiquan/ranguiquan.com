import { PostHead } from '../Site';
import { blockMapper } from '../../lib/notion/blockMapper';
import { ContentTable } from './Post';

export const PostPage = ({ pageMeta, pageContent }) => {
  return (
    <>
      <PostHead {...pageMeta} />
      <div className='w-full md:w-[calc(100%+500px)] flex items-start space-x-4'>
        <main className='w-full md:w-[calc(768px-2rem)] shrink-0 grow-0'>
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
        <ContentTable pageContent={pageContent} />
      </div>
    </>
  );
};
