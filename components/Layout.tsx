import Head from "next/head";
import HelpScout from "./HelpScout";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>DaalBeat</title>
        <meta
          name="description"
          content="Healthcare pricing transparent and simplified."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <HelpScout />
    </>
  );
};

export default Layout;
