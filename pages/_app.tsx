import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";

import Layout from "../components/layout/layout";
import { store } from "../store/index";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  );
}
