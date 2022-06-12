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
      <div className="flex justify-center mt-8 -mb-20">
        <Link href="https://github.com/daalbeat">
          <a className="flex text-gray-500 hover:text-gray-700">
            <FiGithub className="mt-1 mr-2" />
            <div>Github</div>
          </a>
        </Link>
        <Link href="https://docs.daalbeat.com">
          <a className="flex ml-6 text-gray-500 hover:text-gray-700">
            <FiBook className="mt-1 mr-2" />
            <div>Docs</div>
          </a>
        </Link>
        <Link href="https://discord.gg/wgv22BAQDu">
          <a className="flex ml-6 text-gray-500 hover:text-gray-700">
            <TbBrandDiscord className="mt-1 mr-2" />
            <div>Discord</div>
          </a>
        </Link>
      </div>
      {children}
      <TallyButton />
    </>
  );
};

export default Layout;
