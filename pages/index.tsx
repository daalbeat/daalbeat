// NextJS
import Image from "next/image";

// React
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// DaalBeat
import EarlyAccessForm from "../components/EarlyAccessForm";
import DaalBeatLogo from "../public/DaalBeatLogo.png";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function Home() {
  const { data } = useAccount();
  const formId = "wLZKZy";
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
        <Footer />
      </div>
    );
  return (
    <div className="flex flex-col justify-center min-h-screen m-1">
      <div className="mx-auto mt-10 text-center md:mt-0">
        <Image src={DaalBeatLogo} alt="DaalBeat Logo" width={300} height={53} />
        <p className="text-lg text-center text-gray-500 font-work">
          DAO for healthcare emergency fund.
        </p>
      </div>
      <Services />
      <div className="mx-auto mt-10 text-center">
        <ConnectButton />
      </div>
      <Footer />
    </div>
  );
}
