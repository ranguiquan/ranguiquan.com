import { useSession, signIn, signOut, getProviders } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { Github, Google } from '@icons-pack/react-simple-icons';
import { MdLogout } from 'react-icons/md';
import {
  createCommentPage,
  handleRawCommentPage,
  retrieve_nested_children,
} from '../../../lib/notion';
import { CommentCard } from './CommentCard';
import config from '../../../site.config';
const iconMapper = {
  GitHub: <Github />,
  Google: <Google />,
};

export const Comment = ({ pageMeta, commentPageList, slug }) => {
  const url = ['https://', config.domain, '/', slug?.join('/')].join('');
  const { data: session } = useSession();
  const [providers, setProviders] = useState('');

  const [list, setList] = useState(commentPageList);
  const [isCommentSending, setIsCommentSending] = useState(false);
  const handleSubmit = ({ commentInput, pageID, pageTitle, url }) => {
    setIsCommentSending(true);
    createCommentPage({ commentInput, pageID, pageTitle, url })
      .then((res) => {
        setCommentInput('');
        setList((prev) => [res, ...prev]);
        setIsCommentSending(false);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getProviders().then((pro) => setProviders(pro));
  }, [setProviders]);
  const [commentInput, setCommentInput] = useState('');
  return (
    <div
      className='flex flex-col mt-2 pt-2 w-full border-t-2 
      border-rich-gray_background dark:border-rich-gray_background-dark
      '
    >
      {/* Signed in as {session.user.email} <br /> */}
      <div className='flex justify-between items-center pt-8'>
        <div className='font-semibold text-xl'>COMMENT</div>
        {!session && (
          <div className='flex items-center space-x-4'>
            <span className='text-sm font-semibold'>LOG IN: </span>
            {providers &&
              Object.values(providers).map((provider) => (
                <div
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className=' cursor-pointer'
                >
                  {iconMapper[provider.name]}
                </div>
              ))}
          </div>
        )}
        {session && (
          <div className='flex items-center space-x-4'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={session.user.image} alt='avatar' className='h-8 w-8 rounded-full' />
            <button
              onClick={() => signOut()}
              className='px-4 py-1 rounded-lg font-semibold text-sm
            text-rich-gray dark:text-rich-default-dark
            hover:text-rich-red hover:dark:text-rich-red-dark
            bg-rich-red_background dark:bg-rich-red_background-dark
            transition duration-100
            '
            >
              <div className='flex items-center space-x-2'>
                <MdLogout size='1.5em' />
                <span>LOG OUT</span>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* input area  */}
      <form className='flex flex-col w-full mt-2'>
        <textarea
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          name='commentInput'
          rows={5}
          spellCheck
          wrap='soft'
          className='bg-rich-gray_background dark:bg-rich-gray_background-dark
          outline-none py-2 px-3  resize-none
          rounded'
        ></textarea>
        <div className='flex justify-end mt-2'>
          <button
            disabled={isCommentSending}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit({
                commentInput: commentInput,
                pageID: pageMeta.id,
                pageTitle: pageMeta.name,
                url: url,
              });
            }}
            className='px-4 -y-1 rounded-lg font-semibold 
        bg-rich-blue_background dark:bg-rich-blue_background-dark
        text-rich-blue dark:text-rich-default-dark
        hover:text-rich-default hover:dark:text-rich-blue-dark'
          >
            SEND
          </button>
        </div>
      </form>

      {/* comment list  */}
      {list?.length > 0 && (
        <div className='flex flex-col w-full space-y-8 mt-8'>
          {list.map((comment) => {
            return <CommentCard comment={comment} key={comment.id} />;
          })}
        </div>
      )}

      {/* <div className='flex flex-col w-full'>
        <pre>{JSON.stringify(commentPageList, null, 2)}</pre>
      </div> */}
    </div>
  );
};
