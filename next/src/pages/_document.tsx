import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en" data-mui-color-scheme="light">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
