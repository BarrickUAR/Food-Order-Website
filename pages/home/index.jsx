import React from "react";
import MenuWrapper from "../components/product/MenuWrapper";
import Campaings from "../components/Campaings";
import Carousel from "../components/Carousel";
import About from "../components/About";

const Index = () => {
  return (
    <div className="">
      <Carousel />
      <Campaings />
      <MenuWrapper />
      <About />
    </div>
  );
};

export default Index;
