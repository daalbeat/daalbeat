// Styles
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

// NextJS
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

// React
import "@rainbow-me/rainbowkit/styles.css";

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiProvider } from "wagmi";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [apiProvider.alchemy(process.env.ALCHEMY_ID), apiProvider.fallback()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function DaalBeat({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
export default DaalBeat;
