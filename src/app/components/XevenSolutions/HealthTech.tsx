import React from "react";
import { Poppins, Titillium_Web } from "next/font/google";
import HeaderComponent from "./header";
import MainSection from "./MainSection";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});
const titillium = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-titillium",
  weight: "400",
});

function HealthTech() {
  return (
    <div className={`${poppins.variable} ${titillium.variable} font-sans `}>
      <HeaderComponent />
      <MainSection />
    </div>
  );
}

export default HealthTech;
