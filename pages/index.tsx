import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.containerDoor}>
      <main className={styles.main}>
        <h1 className="font-work text-5xl font-extrabold text-center">
          DaalBeat
        </h1>
        <p className="font-work text-lg text-gray-500 text-center">
          Healthcare Pricing Transparency
        </p>
      </main>
    </div>
  );
}
