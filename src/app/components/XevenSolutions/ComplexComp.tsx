"use client";

import { Container } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function ComplexComp() {
  const [activeContent, setactiveContent] = useState({});
  // const Content = [
  //   {
  //     heading1: "UI/UX",
  //     desc: "The importance of a first impression cannot be overstated. Whether its your website or mobile app, the initial interaction with users sets the tone for their entire experience. Building a strong digital presence is imperative in todays competitive landscape.",
  //     heading2: "Business Benefits of Choosing Us",
  //     listData: {
  //       "Better User Engagement":
  //         "Our UI/UX Design Services focus on intuitive designs and seamless user experiences to boost user engagement.",
  //       "UI/UX Expertise:":
  //         "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
  //       "Fusion of Creativity and Functionality:":
  //         " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
  //       "Stunning Interfaces: ":
  //         " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
  //     },
  //   },
  // ];
  return (
    <div>
      <Container maxWidth="lg" className="mt-20 ">
        <div className="flex  items-start ">
          <Image
            src="/xevenhealthpage/compImage.webp"
            alt="Image Component"
            width={25}
            height={25}
            className="object-contain object-center pt-2  -ml-8 mr-10"
          />

          <div className="w-full ml-2">
            <h3 className="font-poppins font-semibold tracking-wide text-4xl  -ml-8">
              Services We Offer
            </h3>
            {/* Main COmponent Start from here */}
            <div className="flex flex-col lg:flex-row mb-10 mt-20 lg:items-start relative accordianShadow">
              {/* 1st Part */}
              <div className="w-1/3 bg-[#000037] text-white font-titillium font-semibold text-lg pt-[35px] pl-[30px] pb-[20px]  flex flex-col -mt-12  mb-8 -ml-8 accordianShadow">
                <div
                  className={`hover:underline cursor-pointer pl-5 mb-3 ${
                    activeContent == "active"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px]  -mb-0"
                      : ""
                  }`}
                  onClick={() => setactiveContent("active")}
                >
                  AI ChatBot Development
                </div>
                <div
                  className={`hover:underline cursor-pointer pl-5 my-3 ${
                    activeContent == "active12"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px]  -my-0"
                      : ""
                  }`}
                  onClick={() => setactiveContent("active12")}
                >
                  AI Development
                </div>
                <div
                  className={`hover:underline cursor-pointer  pl-5 my-3 ${
                    activeContent == "active1"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0"
                      : ""
                  }`}
                  onClick={() => setactiveContent("active1")}
                >
                  ChatGPT Integration
                </div>
                <div
                  className={`hover:underline cursor-pointer pl-5 my-3 ${
                    activeContent == "active2"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0"
                      : ""
                  }`}
                  onClick={() => setactiveContent("active2")}
                >
                  Machine & Deep Learning
                </div>
                <div
                  className={`hover:underline cursor-pointer  pl-5 my-3 ${
                    activeContent == "active3"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0"
                      : ""
                  }`}
                  onClick={() => setactiveContent("active3")}
                >
                  Computer Vision
                </div>
                <div
                  className={`hover:underline cursor-pointer  pl-5 my-3 ${
                    activeContent == "active4"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0 "
                      : ""
                  }`}
                  onClick={() => setactiveContent("active4")}
                >
                  Big Data Analytics
                </div>
                <div
                  className={`hover:underline cursor-pointer pl-5 my-3 ${
                    activeContent == "active5"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0"
                      : ""
                  }`}
                  onClick={() => setactiveContent("active5")}
                >
                  Predictive Modeling
                </div>
                <div
                  className={`hover:underline cursor-pointer pl-5 my-3 ${
                    activeContent == "active6"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0 "
                      : ""
                  }`}
                  onClick={() => setactiveContent("active6")}
                >
                  Custom Software Development
                </div>
                <div
                  className={`hover:underline cursor-pointer  pl-5 my-3 ${
                    activeContent == "active7"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0 "
                      : ""
                  }`}
                  onClick={() => setactiveContent("active7")}
                >
                  Digital Marketing
                </div>
                <div
                  className={`hover:underline cursor-pointer  pl-5 my-3 ${
                    activeContent == "active8"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0"
                      : ""
                  }`}
                  onClick={() => setactiveContent("active8")}
                >
                  Natural Language Processing
                </div>
                <div
                  className={`hover:underline cursor-pointer  pl-5 my-3 ${
                    activeContent == "active13"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -my-0"
                      : ""
                  }`}
                  onClick={() => setactiveContent("active13")}
                >
                  DevOps
                </div>
                <div
                  className={`hover:underline cursor-pointer pl-5 mt-3 ${
                    activeContent == "active9"
                      ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 -mr-[30px] -mt-0 "
                      : ""
                  }`}
                  onClick={() => setactiveContent("active9")}
                >
                  UI/UX
                </div>
              </div>
              {/* 2nd Part */}
              <div className=" bg-white border-2   w-full  absolute right-0 h-full -z-40 pl-[36%] pt-10 pb-5 pr-16 shadow-2xl ">
                <h3 className="font-titillium font-semibold text-2xl tracking-tight">
                  AI Development
                </h3>
                <p className="font-titillium text-[#72749f] text-lg mt-3">
                  At Xeven Solutions, innovation meets intelligence. Our team of
                  experts utilizes cutting-edge technologies to craft custom AI
                  solutions that seamlessly integrate with your unique
                  requirements, revolutionizing how you operate.
                </p>
                <h4 className="font-titillium  text-[#72749f] font-semibold text-lg tracking-tight my-6">
                  Business Benefits of Choosing Us
                </h4>
                <ul className="list-none">
                  <li className="relative pl-8 before:absolute before:left-0 before:top-4 before:-translate-y-1/2 before:w-[10px] before:h-2 before:bg-black mb-4">
                    {" "}
                    <span className="font-titillium  text-[#72749f] font-semibold text-lg ">
                      Cutting-Edge Expertise:{" "}
                    </span>{" "}
                    <span className="text-lg text-[#72749f]">
                      {" "}
                      Our team of experts is proficient in utilizing the latest
                      technologies to develop custom AI solutions tailored to
                      your needs.
                    </span>
                  </li>
                  <li className="relative pl-8 before:absolute before:left-0 before:top-4 before:-translate-y-1/2 before:w-[10px] before:h-2 before:bg-black mb-4">
                    {" "}
                    <span className="font-titillium  text-[#72749f] font-semibold text-lg ">
                      Cutting-Edge Expertise:{" "}
                    </span>{" "}
                    <span className="text-lg text-[#72749f]">
                      {" "}
                      Our team of experts is proficient in utilizing the latest
                      technologies to develop custom AI solutions tailored to
                      your needs.
                    </span>
                  </li>
                  <li className="relative pl-8 before:absolute before:left-0 before:top-4 before:-translate-y-1/2 before:w-[10px] before:h-2 before:bg-black mb-4">
                    {" "}
                    <span className="font-titillium  text-[#72749f] font-semibold text-lg ">
                      Cutting-Edge Expertise:{" "}
                    </span>{" "}
                    <span className="text-lg text-[#72749f]">
                      {" "}
                      Our team of experts is proficient in utilizing the latest
                      technologies to develop custom AI solutions tailored to
                      your needs.
                    </span>
                  </li>
                  <li className="relative pl-8 before:absolute before:left-0 before:top-4 before:-translate-y-1/2 before:w-[10px] before:h-2 before:bg-black mb-4">
                    {" "}
                    <span className="font-titillium  text-[#72749f] font-semibold text-lg ">
                      Cutting-Edge Expertise:{" "}
                    </span>{" "}
                    <span className="text-lg text-[#72749f]">
                      {" "}
                      Our team of experts is proficient in utilizing the latest
                      technologies to develop custom AI solutions tailored to
                      your needs.
                    </span>
                  </li>
                </ul>
                <button className="font-titillium px-6 py-3 rounded-sm text-white bg-gradient-to-tr from-pink2 to-pink1 cursor-pointer mt-12 relative left-[calc(100%-8rem)] hover:bg-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ComplexComp;
