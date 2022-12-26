import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material/styles";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";

import Layout from "../components/layout/layout";
import { store } from "../store/index";
import awsconfig from "../src/aws-exports";
import { theme } from "../utils/style";

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
}
