import React from "react";

import HeaderComponent from "./components/XevenSolutions/header";

import ComplexImgComp from "./components/XevenSolutions/ComplexImgComp";
import ComplexComp2 from "./components/XevenSolutions/ComplexComp2";
import HealthTech from "./components/XevenSolutions/HealthTech";
import SwiperCarousel from "./components/XevenSolutions/SwiperCarousel";

function page() {
  return (
    <div>
      <HealthTech />
      <ComplexComp2 />
      <ComplexImgComp />
      <SwiperCarousel />
    </div>
  );
}

export default page;
