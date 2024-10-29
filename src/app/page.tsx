import React from "react";

import ComplexImgComp from "./components/XevenSolutions/ComplexImgComp";
import ComplexComp2 from "./components/XevenSolutions/ComplexComp2";
import HealthTech from "./components/XevenSolutions/HealthTech";
import SwiperCarousel from "./components/XevenSolutions/SwiperCarousel";
import AboutUS from "./components/XevenSolutions/AboutUS";
import HeaderComponent from "./components/XevenSolutions/header";

function page() {
  return (
    <div className="overflow-hidden">
      <HeaderComponent />
      <AboutUS />
    </div>
  );
}

export default page;
