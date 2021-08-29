import React from "react";
import Services from "./subComponents/Services";
import CarouselSlider from "./subComponents/CarouselSlider";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <Services />
      Main page
    </div>
  );
};

export default Home;
