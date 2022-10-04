/* eslint-disable react/jsx-props-no-spreading */
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";

import defaultSEOConfig from "../../next-seo.config";
import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";

import "lib/styles/globals.css";

// @ts-ignore
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Chakra>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />

      <AnimatedCursor
        // @ts-ignore
        innerSize="1rem"
        color="246,211,0"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
};

export default MyApp;
