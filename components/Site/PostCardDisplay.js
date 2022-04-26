import { PostCard } from '../Site';

export const PostCardDisplay = ({ pageList, basePath }) => {
  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 grid-flow-row-dense'>
      {pageList.map((post) => (
        <PostCard key={post.id} post={post} basePath={basePath}></PostCard>
      ))}
    </div>
  );
};
