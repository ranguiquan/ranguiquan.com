import { useMemo } from 'react';
import { RichText } from '../Common/RichText';

export const Embed = ({ embed }) => {
  const { caption, url } = embed;
  try {
    const link = useMemo(() => new URL(url), [url]);
    const domain = link.host;

    switch (domain) {
      // TODO: not very nice implementation.
      // Only support bilibili now.
      case 'www.bilibili.com':
        const paths = link.pathname.split('/').filter((item) => item !== '');
        if (paths[0] === 'video') {
          const bv = paths[1];
          const share = new URL('https://player.bilibili.com/player.html');
          share.searchParams.set('bvid', bv);
          share.searchParams.set('page', 1);
          return (
            <div className='mt-2'>
              <iframe
                className='w-full h-[250px] md:h-[500px] '
                src={share}
                scrolling='no'
                border='0'
                frameBorder='no'
                framespacing='0'
                allowFullScreen={true}
              ></iframe>{' '}
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
        return <div>{JSON.stringify(paths, null, 2)}</div>;
    }
    return <div className='mt-2'>{domain}</div>;
  } catch (e) {
    console.log(e);
    return <></>;
  }
};
