import React from "react";

import HeaderComponent from "./components/XevenSolutions/header";

import ComplexImgComp from "./components/XevenSolutions/ComplexImgComp";
import ComplexComp2 from "./components/XevenSolutions/ComplexComp2";
import HealthTech from "./components/XevenSolutions/HealthTech";
import SwiperCarousel from "./components/XevenSolutions/SwiperCarousel";
import AboutUS from "./components/XevenSolutions/AboutUS";

function page() {
  return (
    <div>
      <HeaderComponent />
      <HealthTech />
      <ComplexComp2 />
      <ComplexImgComp />
      <SwiperCarousel />
      <AboutUS />
    </div>
  );
}

export default page;
