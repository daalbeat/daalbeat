import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="text-center mx-auto">
        <span className="font-work text-5xl font-extrabold">DaalBeat</span>
        <p className="font-work text-lg text-gray-500 text-center mt-3">
          <span className="mr-2">Healthcare pricing</span>
          <RoughNotationGroup show={true}>
            <RoughNotation
              type="underline"
              color="#1e003d"
              strokeWidth={3}
              order={1}
            >
              transparent
            </RoughNotation>
            <span className="mx-2">and</span>
            <RoughNotation
              type="underline"
              color="#1e003d"
              strokeWidth={3}
              order={2}
            >
              simplified
            </RoughNotation>
          </RoughNotationGroup>
        </p>
      </div>
    </div>
  );
}
