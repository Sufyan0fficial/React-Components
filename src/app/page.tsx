import React from "react";

import AboutUS from "./components/XevenSolutions/AboutUS";
import HeaderComponent from "./components/XevenSolutions/header";
import ComplexImgComp from "./components/XevenSolutions/ComplexImgComp";

function page() {
  return (
    <div className="overflow-hidden">
      <HeaderComponent />
      <ComplexImgComp />
      <AboutUS />
    </div>
  );
}

export default page;
