import Head from 'next/head';

const CustomHeader = (props) => {
  return (
    <Head>
      <title>Music Manager</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#2b5797"></meta>
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default CustomHeader;
