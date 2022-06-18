// Styles
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

// NextJS
import type { AppProps } from "next/app";

// React
import "@rainbow-me/rainbowkit/styles.css";
import { useRef } from "react";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";

// DaalBeat
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import handle from "./api/lead";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID })]
);

const { connectors } = getDefaultWallets({
  appName: "DaalBeat",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function DaalBeat({ Component, pageProps }: AppProps) {
  const ref = useRef(null);

  const handleJoinWaitlist = () => {
    console.log("This is from the app");
  };

  return (
    <Layout>
      <Navbar {...handleJoinWaitlist} />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
export default DaalBeat;
