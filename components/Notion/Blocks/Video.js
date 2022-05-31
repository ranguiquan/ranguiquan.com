import { useMemo } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { RichText } from '../Common/RichText';

export const Video = ({ video }) => {
  const { type, caption } = video;
  const { url } = video[type];
  try {
    const link = useMemo(() => new URL(url), [url]);
    const pathname = link.pathname;
    const domain = link.host;

    if (type === 'file') return <div>{`Don't use notion internal files!`}</div>;

    if (domain === 'www.youtube.com') {
      const videoID = link.searchParams.get('v');
      return (
        <div className='mt-2'>
          <LiteYouTubeEmbed id={videoID} />
          <div className='flex flex-col items-center'>
            <div className=' mt-2 text-sm text-rich-gray whitespace-pre-wrap break-words max-w-full min-w-[1px]'>
              {caption.map((item, index) => (
                <RichText rich_text={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    return <div className='mt-2'>{`${domain} is not supported yet`}</div>;
  } catch (e) {
    console.error(e);
    return <></>;
  }
};
