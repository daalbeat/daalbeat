// Styles
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

// NextJS
import type { AppProps } from "next/app";

// React
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";
import LogRocket from "logrocket";

// DaalBeat
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

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

LogRocket.init("fo1lce/daalbeat");

function DaalBeat({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
export default DaalBeat;
