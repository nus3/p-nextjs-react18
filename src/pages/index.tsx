import { NextPage } from 'next';
import Head from 'next/head';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js + React18</title>
        <meta name="description" content="Practice Next.js and React18" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello! My name is nus3!!</h1>
      </main>
    </div>
  );
};

export default IndexPage;
