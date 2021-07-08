import Head from "next/head";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>DaalBeat</title>
        <meta
          name="description"
          content="DaalBeat gives easy access to complicated healthcare pricing."
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
