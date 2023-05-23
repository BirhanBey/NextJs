import '@/styles/globals.scss';
import Layout from '@/components/Layout';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>This is the standart Title</title>
        <meta name="description" content="This is the standart Title2" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
