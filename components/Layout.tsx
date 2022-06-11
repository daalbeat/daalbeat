// NextJS
import Head from "next/head";

// DaalBeat
import TallyButton from "../components/TallyButton";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>DaalBeat Labs</title>
        <meta name="description" content="Healthcare toolkit on blockchain." />
        <meta
          name="keywords"
          content="healthcare blockchain, dao for healthcare, healthcare dao"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      {children}
      <TallyButton />
    </>
  );
};

export default Layout;
