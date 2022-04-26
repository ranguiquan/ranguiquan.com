import { Nextdotjs, Notion, Vercel } from '@icons-pack/react-simple-icons';
import config from '../../site.config';

export const Footer = ({}) => {
  return (
    <footer className='flex flex-col justify-center items-center text-rich-gray text-sm'>
      {/* TODO: change this border color */}
      <div className='flex justify-center w-full lg:w-[1024px] border-t-2 pt-4'>
        <span className=''>{`©️ ${config.copyrightStartYear} - ${new Date().getFullYear()}`}</span>
        <span className='ml-2'>by {config.writerName}</span>
      </div>
      <div className='flex justify-center items-center space-x-2 my-2'>
        <span>Powered by</span>
        <a href='https://nextjs.org/'>
          <Nextdotjs size={14} />
        </a>
        <a href='https://www.notion.so/'>
          <Notion size={14} />
        </a>
        <a href='https://vercel.com/'>
          <Vercel size={14} />
        </a>
      </div>
    </footer>
  );
};
