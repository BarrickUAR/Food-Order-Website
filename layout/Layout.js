import Footer from "@/pages/components/layout/Footer";
import Header from "@/pages/components/layout/Header";
import React from "react";


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
