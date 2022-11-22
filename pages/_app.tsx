import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
