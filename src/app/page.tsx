import React from "react";

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
