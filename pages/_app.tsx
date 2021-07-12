import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "next-auth/client";
import type { AppProps } from "next/app";

function DaalBeat({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Provider>
  );
}
export default DaalBeat;
