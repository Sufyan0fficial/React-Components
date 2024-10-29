"use client";

import { Container } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface ContentType {
  id: number;
  title: string;
  desc: string;
  heading2: string;
  listData: {
    [key: string]: string;
  };
}
function ComplexComp2() {
  const [activeContent, setactiveContent] = useState(1);
  const Content: ContentType[] = [
    {
      id: 1,
      title: "UI/UX",
      desc: "The importance of a first impression cannot be overstated. Whether its your website or mobile app, the initial interaction with users sets the tone for their entire experience. Building a strong digital presence is imperative in todays competitive landscape.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Better User Engagement":
          "Our UI/UX Design Services focus on intuitive designs and seamless user experiences to boost user engagement.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 2,
      title: "AI Development",
      desc: "At Xeven Solutions, innovation meets intelligence. Our team of experts utilizes cutting-edge technologies to craft custom AI solutions that seamlessly integrate with your unique requirements, revolutionizing how you operate..",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 3,
      title: "AI Chatbot Development",
      desc: "Our AI Chatbot Development Services are designed to transform customer interactions for businesses. We specialize in crafting Intelligent chatbots that engage in human-like dialogue.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 4,
      title: "ChatGPT Integration",
      desc: "Elevate user experiences by leveraging our ChatGPT Integration Services into your business processes. It enables you to leverage the advanced capabilities of NLP and ML to provide more intuitive and personalized interactions for your customers.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 5,
      title: "Machine & Deep Learning",
      desc: "Elevate user experiences by leveraging our ChatGPT Integration Services into your business processes. It enables you to leverage the advanced capabilities of NLP and ML to provide more intuitive and personalized interactions for your customers.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },

    {
      id: 6,
      title: "Computer Vision",
      desc: "At Xeven Solutions, we help businesses maximize their profits by leveraging our advanced Computer Vision Services. Our Computer Vision systems identify objects and detect patterns by analyzing digital photos and videos.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 7,
      title: "Big Data Analytics",
      desc: "Benefit your data-driven business from actionable insights and improved decision-making with our Big Data Analytics Services. Our experienced team of data specialists offers an extensive range of data analytics services crafted to drive the growth of your business.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 8,
      title: "Predictive Modeling",
      desc: "At Xeven Solutions, we offer innovative Predictive Modeling Services for your business. Our Predictive Modeling services help you to make better decisions, anticipate market trends, identify potential risks and opportunities, and remain agile.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 9,
      title: "Custom Software Development",
      desc: "With over 10 years of experience, Xeven Solutions is a reliable custom software development company that transforms your unique ideas into reality. Our Custom Software Development Services will give you a competitive edge in your industry.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 10,
      title: "Digital Marketing",
      desc: "Ignite your brand's digital potential with our comprehensive Digital Marketing Services. We specialize in data-driven strategies and creative campaigns that enhance your online presence.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 11,
      title: "DevOps",
      desc: "Experience the transformative power of our DevOps Services, where seamless integration, automation, and AI-powered optimization converge to redefine your software development landscape.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
    {
      id: 12,
      title: "Natural Language Processing",
      desc: "From sentiment analysis to chatbot development, our expert NLP Services cover a range of applications across industries. Our expertise involves creating models for computers to understand and generate natural language.",
      heading2: "Business Benefits of Choosing Us",
      listData: {
        "Cutting-Edge Expertise":
          "Our team of experts is proficient in utilizing the latest technologies to develop custom AI solutions tailored to your needs.",
        "UI/UX Expertise:":
          "Our team specializes in crafting user interfaces that help you stand out from the competition and leave a lasting impression on users.",
        "Fusion of Creativity and Functionality:":
          " We blend creativity and functionality to create stunning interfaces and deliver a user experience that keeps users returning for more.",
        "Stunning Interfaces: ":
          " For businesses like yours, we craft stunning designs that are visually appealing, easy to navigate, and highly engaging.",
      },
    },
  ];

  return (
    <div>
      <Container maxWidth="lg" className="mt-20 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start ">
          <div className="flex justify-start items-center w-full lg:w-max lg:pl-4">
            <Image
              src="/xevenhealthpage/compImage.webp"
              alt="Image Component"
              width={25}
              height={25}
              className="object-contain object-center lg:pt-2  lg:-ml-8 lg:mr-10"
            />
            <h3 className="font-poppins font-semibold tracking-wide text-4xl  ml-2 lg:hidden">
              Services We Offer
            </h3>
          </div>

          <div className="w-full ml-2">
            <h3 className="font-poppins font-semibold tracking-wide text-4xl  lg:-ml-8 hidden lg:block">
              Services We Offer
            </h3>
            {/* Main COmponent Start from here */}
            <div className="flex flex-col lg:flex-row mb-10 lg:mt-20 mt-10 lg:items-stretch relative  accordianShadow">
              {/* 1st Part */}
              <div className="lg:w-1/3 w-full  bg-[#000037] text-white font-titillium font-semibold text-lg pt-[45px] pl-[30px] pb-[35px] gap-6 flex flex-col lg:-mt-12  mb-8 2xl:mb-12 lg:-ml-8 accordianShadow ">
                {Content.map((data: ContentType) => {
                  return (
                    <div
                      key={data.id}
                      className={`hover:underline cursor-pointer pl-5  ${
                        activeContent == data.id
                          ? "bg-gradient-to-tr from-pink2 to-pink1 py-3 min-w-full flex-shrink-0 lg:-mr-[30px]  lg:-my-2  -ml-[30px] lg:-ml-0 pl-[45px] lg:pl-5"
                          : ""
                      }`}
                      onClick={() => setactiveContent(data.id)}
                    >
                      {data.title}
                    </div>
                  );
                })}
              </div>
              {/* 2nd Part */}

              <div className=" bg-white lg:absolute lg:inset-0   lg:-z-10   accordianShadow">
                {" "}
              </div>
              <div className="min-h-max overflow-visible  pl-8 lg:pt-10 pt-4 pr-8 pb-10 lg:w-2/3 lg:pl-16   pointer-events-none w-full h-full  ">
                <h3 className="font-titillium font-semibold text-2xl tracking-tight ">
                  {Content[activeContent - 1].title}
                </h3>
                <p className="font-titillium text-[#72749f] text-lg mt-3">
                  {Content[activeContent - 1].desc}
                </p>
                <h4 className="font-titillium  text-[#72749f] font-semibold text-lg tracking-tight my-6">
                  {Content[activeContent - 1].heading2}
                </h4>
                <ul className="list-none">
                  {Object.keys(Content[activeContent - 1].listData).map(
                    (key, index) => (
                      <li
                        className="relative pl-8 before:absolute before:left-0 before:top-4 before:-translate-y-1/2 before:w-[10px] before:h-2 before:bg-black mb-4"
                        key={index}
                      >
                        {" "}
                        <span className="font-titillium  text-[#72749f] font-semibold text-lg ">
                          {key}{" "}
                        </span>{" "}
                        <span className="text-lg text-[#72749f]">
                          {" "}
                          {Content[activeContent - 1].listData[key]}
                        </span>
                      </li>
                    )
                  )}
                </ul>
                <div className="flex justify-end">
                  <button className="font-titillium text-white px-6 py-3 rounded-sm bg-gradient-to-tr from-pink2 to-pink1 hover:border hover:border-pink1 hover:from-transparent hover:to-transparent hover:text-pink1 hover:cursor-pointer pointer-events-auto 2xl:mt-4">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ComplexComp2;
