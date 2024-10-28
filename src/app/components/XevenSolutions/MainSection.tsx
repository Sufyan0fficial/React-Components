import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BoxComp1 from "./BoxComp1";
import BoxComp2 from "./BoxComp2";
import BoxComp3 from "./BoxComp3";
import { AccordionDemo } from "./Accordian";

function MainSection() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section  */}
      <div className="h-screen w-full overflow-x-hidden">
        {/* Image Section  */}
        <div className="w-screen h-[calc(100vh-80px)] relative bg-blue-800 ">
          <Image
            src="/xevenhealthpage/mainImage.jpg"
            alt="Main Image"
            fill
            sizes="100%"
            className="object-cover object-center"
          />
        </div>
        {/* Text section  */}

        <div className="lg:w-1/2 w-full lg:pl-44 px-10 absolute left-0 top-[calc(50%-80px)] text-white">
          <p className="font-poppins font-bold text-5xl ">AI In Health Tech</p>
          <p className="font-titillium font-normal text-2xl mt-5 mb-10">
            AI in healthcare provides clinical software solutions. It saves
            lives by predicting treatment responses and analyzing vast medical
            data.
          </p>
          <Link href="/" className="mt-16">
            <button className="bg-gradient-to-tr from-pink2 to-pink1 font-titillium rounded-md px-6 py-2 hover:from-white hover:to-white hover:border hover:border-pink1 hover:text-pink1">
              Let&aposs Connect
            </button>
          </Link>
        </div>
      </div>
      {/* 2nd Section */}
      <div className="my-12 ">
        <Container
          maxWidth="lg"
          className="flex flex-col lg:flex-row lg:items-center  "
        >
          {/* text section  */}
          <div className="w-full lg:w-[50%] ">
            <div className="flex gap-2 items-start">
              <Image
                src="/xevenhealthpage/compImage.webp"
                alt="component"
                width={50}
                height={50}
                className="object-contain object-center pt-2"
              />
              <div>
                <h2 className="font-poppins font-semibold lg:text-4xl text-2xl ">
                  AI revolutionizing healthcare software services
                </h2>

                <p className="font-titillium font-normal text-lg text-slate-600 my-8">
                  As a leading healthcare software development company, we use
                  the power of AI in our health tech software. Technologies like
                  machine learning and computer vision are revolutionizing the
                  healthcare software industry. It enables precise data
                  analysis, intelligent decision-making, and personalized
                  treatment plans. With our expertise, we are leading the way in
                  transforming healthcare software solutions, delivering
                  innovative services for better patient care and improved
                  outcomes.
                </p>
                <Link href="/" className="font-titillium text-base">
                  <button className="bg-gradient-to-tr from-pink2 to-pink1 font-titillium rounded-md px-6 py-2 text-white hover:border hover:border-pink1 hover:text-pink1 hover:from-white hover:to-white">
                    Schedule a Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* IMAGE Section */}
          <div className="w-full lg:w-[60%] relative h-96 ">
            <Image
              src="/xevenhealthpage/image1.webp"
              alt="Main Image2"
              fill
              sizes="100%"
              className="object-contain object-center"
            />
          </div>
        </Container>
      </div>
      {/* 3rd Section */}
      <div className="md:my-36">
        <Container maxWidth="lg">
          <div className="flex gap-2 items-start">
            <Image
              src="/xevenhealthpage/compImage.webp"
              alt="component"
              width={30}
              height={30}
              className="object-contain object-center pt-2"
            />
            <div>
              <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wider">
                Capabilities and benefits of AI and ML in Health Tech
              </h3>

              {/* Boxes Section  */}
              <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-4">
                <BoxComp1
                  img="/xevenhealthpage/plusicon.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp1
                  img="/xevenhealthpage/plusicon.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp1
                  img="/xevenhealthpage/plusicon.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp1
                  img="/xevenhealthpage/plusicon.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp1
                  img="/xevenhealthpage/plusicon.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp1
                  img="/xevenhealthpage/plusicon.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* 4th Section  */}
      <div className="my-36">
        <Container maxWidth="lg">
          <div className="flex gap-2 items-start">
            <Image
              src="/xevenhealthpage/compImage.webp"
              alt="component"
              width={30}
              height={30}
              className="object-contain object-center pt-2"
            />
            <div>
              <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wider">
                AI Health Tech Use Cases
              </h3>

              {/* Boxes Section  */}

              <div className="mt-10  overflow-x-scroll scroll-hidden">
                <div className="flex  gap-10 ">
                  <BoxComp2
                    img="/xevenhealthpage/section4img1.webp"
                    p={
                      "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                    }
                    h3={"Improved Operational Efficiency"}
                  />
                  <BoxComp2
                    img="/xevenhealthpage/section4img1.webp"
                    p={
                      "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                    }
                    h3={"Improved Operational Efficiency"}
                  />
                  <BoxComp2
                    img="/xevenhealthpage/section4img1.webp"
                    p={
                      "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                    }
                    h3={"Improved Operational Efficiency"}
                  />
                  <BoxComp2
                    img="/xevenhealthpage/section4img1.webp"
                    p={
                      "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                    }
                    h3={"Improved Operational Efficiency"}
                  />
                  <BoxComp2
                    img="/xevenhealthpage/section4img1.webp"
                    p={
                      "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                    }
                    h3={"Improved Operational Efficiency"}
                  />
                  <BoxComp2
                    img="/xevenhealthpage/section4img1.webp"
                    p={
                      "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                    }
                    h3={"Improved Operational Efficiency"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* 5th Section */}
      <div className="my-36">
        <Container maxWidth="lg">
          <div className="flex gap-2 items-start">
            <Image
              src="/xevenhealthpage/compImage.webp"
              alt="component"
              width={30}
              height={30}
              className="object-contain object-center pt-2"
            />
            <div>
              <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wider">
                Why Choose Xeven Solutions
              </h3>

              {/* Boxes Section  */}
              <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-4">
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  p={
                    "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs."
                  }
                  h3={"Improved Operational Efficiency"}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* 6th Section Accordian */}
      <div className="my-36">
        <Container maxWidth="lg">
          <div className="flex gap-2 items-start">
            <Image
              src="/xevenhealthpage/compImage.webp"
              alt="component"
              width={30}
              height={30}
              className="object-contain object-center pt-2"
            />
            <div className="w-full">
              <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wider">
                Frequently Asked Questions
              </h3>
              <AccordionDemo />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MainSection;
