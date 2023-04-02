import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Wearablock</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
