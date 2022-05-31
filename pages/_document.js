import { Html, Head, Main, NextScript } from 'next/document';
import React, { useState } from 'react';

export default function Document() {
  return (
    <Html lang='zh-cn'>
      <Head>
        <link rel='icon' type='image/x-icon' href='/construction.ico' />
      </Head>
      <body className='bg-white dark:bg-black transition duration-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
