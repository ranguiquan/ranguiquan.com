import { PostHead } from '../Site';
import { blockMapper } from '../../lib/notion/blockMapper';
import { ContentTable } from './Post';
import { Comment } from './Comment';
import config from '../../site.config';
import { Sinaweibo } from '@icons-pack/react-simple-icons';

export const PostPage = ({ pageMeta, pageContent, commentPageList, slug }) => {
  return (
    <>
      <PostHead {...pageMeta} />
      <div className='w-full md:w-[calc(100%+500px)] flex items-start space-x-4'>
        <main className='w-full md:w-[calc(768px-2rem)] shrink-0 grow-0'>
          {pageContent?.map((block, index) => {
            if (block.type === 'numbered_list_item') {
              if (index === 0 || pageContent[index - 1].type !== 'numbered_list_item') {
                block.number = 1;
              } else {
                block.number = pageContent[index - 1].number + 1;
              }
            }
            return blockMapper(block);
          })}
        </main>
        {!pageMeta?.isContentTableHidden && <ContentTable pageContent={pageContent} />}
      </div>
      <div
        className='hidden lg:flex justify-center items-center w-10 h-10 fixed right-8 bottom-4 rounded-full 
   text-white bg-red-500
      dark:bg-rich-red_background-dark'
      >
        <a
          href={`http://service.weibo.com/share/share.php?appkey=&title=${pageMeta?.name}&url=${[
            'https://',
            config.domain,
            '/',
            slug?.join('/'),
          ].join('')}&style=simple&pic=${pageMeta?.cover}&sharesource=weibo`}
          target='_blank'
          rel='noreferrer'
        >
          <Sinaweibo size={'1.5rem'} />
        </a>
      </div>
      {!pageMeta?.isCommentHidden && config.isCommentEnable && (
        <Comment
          key={pageMeta?.id}
          pageMeta={pageMeta}
          commentPageList={commentPageList}
          slug={slug}
        />
      )}
    </>
  );
};
