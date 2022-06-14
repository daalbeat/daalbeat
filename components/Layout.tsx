// NextJS
import Head from "next/head";
import Link from "next/link";

// DaalBeat
import TallyButton from "../components/TallyButton";
import { FiGithub, FiBook } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";

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
    </>
  );
};

export default Layout;
