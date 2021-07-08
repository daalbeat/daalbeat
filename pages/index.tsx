import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session] = useSession();

  return (
    <div className={styles.containerDoor}>
      <main className={styles.main}>
        <h1 className="font-work text-5xl font-extrabold text-center">
          DaalBeat
        </h1>
        <p className="font-work text-lg text-gray-500 text-center">
          Healthcare pricing transparent and simplified.
        </p>
        <div className="mt-10 text-center">
          {!session && (
            <>
              <button onClick={() => signIn()}>Sign In</button>
            </>
          )}
          {session && (
            <>
              Signed in as {session.user.email} <br />
              <button onClick={() => signOut()}>Sign Out</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
