import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DaalBeat</title>
        <meta
          name="description"
          content="Bringing healthcare billing power back to patience"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-work text-5xl font-extrabold">DaalBeat</h1>
        <p className="font-work text-lg text-gray-500">
          Bringing healthcare billing power back to patience.
        </p>
      </main>
    </div>
  );
}
