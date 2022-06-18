// NextJS
import Image from "next/image";

// React
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// DaalBeat
import Banner from "../components/Banner";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";
import Team from "../components/Team";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Newsletter />
      <Team />
    </>
  );
}
