"use client";

import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DummyData2 } from "@/app/components/XevenSolutions/Data";

function ComplexImgComp() {
  const [activeBox, setActiveBox] = useState(0);
  const DummyData = [1, 2, 3, 4, 5, 6, 7, 8];
  const AvailableData = DummyData2;

  return (
    <div>
      <Container maxWidth="lg" className="my-20">
        <div className="flex gap-3 items-start ">
          <Image
            src="/xevenhealthpage/compImage.webp"
            alt=""
            width={30}
            height={30}
            className="object-contain object-center pt-2"
          />
          <div>
            <h3 className="font-poppins font-semibold text-4xl tracking-wide ">
              Industries We Transformed with Innovative Software Solutions
            </h3>
            <p className="font-titillium text-gray-400 text-lg mt-5">
              We are committed to innovating across industries with our custom
              AI solutions, empowering businesses to thrive in the digital era.
            </p>
          </div>
        </div>
      </Container>
      {/* Main Image Component Starts here */}
      <div className="flex flex-col md:flex-row justify-center items-center flex-wrap  border-2 border-red-500 relative w-full h-full group">
        {DummyData.map((box, index) => (
          <div
            key={index}
            className={`lg:w-1/4 w-full md:w-1/2 md:h-80 h-60 border border-white relative transition-all duration-300 
              ${
                activeBox === index
                  ? "bg-gradient-to-b from-pink1 to-pink2 hover:from-pink1"
                  : "bg-transparent"
              }`}
            onMouseEnter={() => setActiveBox(index)}
          >
            {/* Content Starts here */}
            <div className="flex items-center justify-center h-full text-center">
              {activeBox === index ? (
                <div className="flex flex-col gap-4 text-white px-10 py-20 w-full h-full">
                  <h3 className="font-poppins text-2xl font-medium">
                    {AvailableData[index].title}
                  </h3>
                  <p className="font-titillium text-sm">
                    {AvailableData[index].desc}
                  </p>
                  <Link href="/" className="text-base">
                    Read More →
                  </Link>
                </div>
              ) : (
                <div className="font-poppins text-4xl text-white">
                  {AvailableData[index].title}
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Background Image */}
        <Image
          src={`/xevenhealthpage/${AvailableData[activeBox].img}.jpg`}
          alt="background image"
          fill
          sizes="100%"
          className="object-cover object-center -z-10 group-hover:transition group-hover:ease-out 
"
        />
      </div>
    </div>
  );
}

export default ComplexImgComp;
