import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daal Beat</title>
        <meta
          name="description"
          content="Bringing healthcare billing power back to patience"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Daal Beat</h1>
        <p className="text-xl text-gray-500">
          Bringing healthcare billing power back to patience.
        </p>
      </main>
    </div>
  );
}
