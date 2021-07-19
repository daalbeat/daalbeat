import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import EarlyAccessForm from "../components/EarlyAccessForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen m-1">
      <div className="text-center mx-auto">
        <span className="font-work text-4xl font-extrabold">DAALBEAT</span>
        <p className="font-work text-lg text-gray-500 text-center mt-3">
          <RoughNotation
            type="underline"
            color="#f073ba"
            strokeWidth={3}
            show={true}
          >
            Price transparency healthcare marketplace.
          </RoughNotation>
        </p>
      </div>

      <EarlyAccessForm />
    </div>
  );
}
