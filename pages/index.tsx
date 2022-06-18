// NextJS
import Image from "next/image";

// React
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// DaalBeat
import Team from "../components/Team";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Newsletter />
      <Team />
    </>
  );
}
