import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
