import Head from "next/head";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import EarlyAccessForm from "../components/EarlyAccessForm";
import DaalBeatLogo from "../public/DaalBeatLogo.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen m-1">
      <div className="text-center mx-auto">
        <Image src={DaalBeatLogo} alt="DaalBeat Logo" width={300} height={53} />
        <p className="font-work text-lg text-gray-500 text-center">
          <RoughNotation
            type="underline"
            color="#450069"
            strokeWidth={3}
            show={true}
          >
            Healthcare price transparency for patients.
          </RoughNotation>
        </p>
      </div>

      <EarlyAccessForm />
    </div>
  );
}
