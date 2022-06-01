// Styles
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

// NextJS
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

// React
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { configureChains, chain, createClient, WagmiConfig } from "wagmi";

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
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default DaalBeat;
