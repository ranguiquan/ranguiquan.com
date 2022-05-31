import Image from 'next/image';
import nextConfig from '../../../next.config';
import { useMemo } from 'react';

export const PostCoverImage = ({ cover }) => {
  const domain = useMemo(() => new URL(cover).hostname, [cover]);
  const isSupported = useMemo(() => {
    const supportedDomains = nextConfig.images.domains;
    return !!supportedDomains.find((domainItem) => domainItem === domain);
  }, [domain]);
  if (!isSupported) console.error('[PostCoverImage]: Unsupported cover image domain: ', domain);

  return (
    <>
      {isSupported && (
        <Image src={cover} alt='cover' layout='fill' className='object-cover ' priority />
      )}
      {!isSupported && (
        <div className='p-4 text-rich-red'>Unsupported cover image, please contact Admin.</div>
      )}
    </>
  );
};
