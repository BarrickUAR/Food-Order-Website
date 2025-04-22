import React from "react";
import MenuWrapper from "../components/product/MenuWrapper";
import Campaings from "../components/Campaings";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Reservation from "../components/Reservation";
import Customers from "../components/customers/Customers";
import Footer from "../components/layout/Footer";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaings />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Index;
