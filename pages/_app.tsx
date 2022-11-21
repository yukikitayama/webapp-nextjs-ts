import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </Fragment>
  );
}
