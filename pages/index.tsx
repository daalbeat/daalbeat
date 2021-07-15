import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import EarlyAccess from "../components/EarlyAccess";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen m-1">
      <div className="text-center mx-auto">
        <span className="font-work text-4xl font-extrabold">DAALBEAT</span>
        <p className="font-work text-lg text-gray-500 text-center mt-3">
          <span className="mr-2">Healthcare pricing</span>
          <RoughNotationGroup show={true}>
            <RoughNotation
              type="underline"
              color="#f073ba"
              strokeWidth={3}
              order={1}
            >
              transparent
            </RoughNotation>
            <span className="mx-2">and</span>
            <RoughNotation
              type="underline"
              color="#746ef3"
              strokeWidth={3}
              order={2}
            >
              simplified
            </RoughNotation>
          </RoughNotationGroup>
        </p>
      </div>

      <EarlyAccess />
    </div>
  );
}
