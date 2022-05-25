// NextJS
import Head from "next/head";
import Image from "next/image";
// React
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import { ConnectButton } from "@rainbow-me/rainbowkit";

// DaalBeat
import EarlyAccessForm from "../components/EarlyAccessForm";
import DaalBeatLogo from "../public/DaalBeatLogo.png";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen m-1">
      <div className="mx-auto mt-10 text-center md:mt-0">
        <Image src={DaalBeatLogo} alt="DaalBeat Logo" width={300} height={53} />
        <p className="text-lg text-center text-gray-500 font-work">
          <RoughNotation
            type="underline"
            color="#450069"
            strokeWidth={3}
            show={true}
          >
            DAO for healthcare emergency fund.
          </RoughNotation>
        </p>
      </div>
      <Services />
      <div className="mx-auto mt-10 text-center">
        <ConnectButton />
      </div>
      <EarlyAccessForm />
    </div>
  );
}
