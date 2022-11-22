import React, { Fragment } from "react";

import Navigation from "./navigation";
import Footer from "./footer";

const Layout: React.FC<{ children: React.ReactNode; }> = (props) => {
  return <Fragment>
    <Navigation />
    <main>{props.children}</main>
    <Footer />
  </Fragment>
};

export default Layout;