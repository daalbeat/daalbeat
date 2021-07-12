import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  const [session] = useSession();

  return (
    <div className={styles.containerDoor}>
      <main className={styles.main}>
        <h1 className="font-work text-5xl font-extrabold text-center">
          DaalBeat
        </h1>
        <p className="font-work text-lg text-gray-500 text-center mb-10 mt-5">
          <span className="mr-3">Healthcare pricing</span>
          <RoughNotationGroup>
            <RoughNotation
              type="underline"
              show={true}
              color="#1e003d"
              strokeWidth="3"
            >
              transparent
            </RoughNotation>
            <span className="mx-1">and</span>
            <RoughNotation
              type="underline"
              show={true}
              color="#1e003d"
              strokeWidth="3"
            >
              simplified
            </RoughNotation>
          </RoughNotationGroup>
        </p>
      </main>
    </div>
  );
}
