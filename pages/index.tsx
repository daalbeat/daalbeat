// NextJS
import Image from "next/image";
import Link from "next/link";

// React
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// DaalBeat
import EarlyAccessForm from "../components/EarlyAccessForm";
import DaalBeatLogo from "../public/DaalBeatLogo.png";
import Services from "../components/Services";

export default function Home() {
  const { data } = useAccount();
  if (data)
    return (
      <div className="flex flex-col justify-center min-h-screen m-1">
        <div className="mx-auto mt-10 text-center md:mt-0">
          <Image
            src={DaalBeatLogo}
            alt="DaalBeat Logo"
            width={300}
            height={53}
          />
          <p className="text-lg text-center text-gray-500 font-work">
            DAO for healthcare emergency fund.
          </p>
        </div>
        <Services />
        <div className="mx-auto mt-10 text-center">
          <ConnectButton />
        </div>
        <EarlyAccessForm />
        <div className="mt-4 text-center text-gray-400">
          <small>
            <span className="mr-1">Built by</span> 🌙
            <span className="ml-3">
              <Link href="https://twitter.com/sicktastic">
                <a className="hover:text-gray-700">Sicktastic</a>
              </Link>
            </span>
          </small>
        </div>
      </div>
    );
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
      <div className="mt-20 text-center text-gray-400">
        <small>
          <span className="mr-1">Built by</span> 🌙
          <span className="ml-3">
            <Link href="https://twitter.com/sicktastic">
              <a className="hover:text-gray-700">Sicktastic</a>
            </Link>
          </span>
        </small>
      </div>
    </div>
  );
}
