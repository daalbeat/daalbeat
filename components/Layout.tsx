import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>DaalBeat</title>
        <meta
          name="description"
          content="Healthcare Pricing Transparency made easy."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
