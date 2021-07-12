import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center p-0 m-0 overflow-visible">
      <h1 className="font-work text-5xl font-extrabold text-center">
        DaalBeat
      </h1>
      <p className="font-work text-lg text-gray-500 text-center">
        <span className="mr-3">Healthcare pricing</span>
        <RoughNotationGroup>
          <RoughNotation
            type="underline"
            show={true}
            color="#1e003d"
            strokeWidth={3}
          >
            transparent
          </RoughNotation>
          <span className="mx-1">and</span>
          <RoughNotation
            type="underline"
            show={true}
            color="#1e003d"
            strokeWidth={3}
          >
            simplified
          </RoughNotation>
        </RoughNotationGroup>
      </p>
    </div>
  );
}
