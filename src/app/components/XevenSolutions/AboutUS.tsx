import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import BoxComp1 from "./BoxComp1";

function AboutUS() {
  return (
    <div>
      <Container maxWidth="lg" className="">
        {/* Our Story Section  */}
        <div className="flex gap-2 items-start my-28">
          <Image
            src="/xevenhealthpage/compImage.webp"
            alt="component"
            width={30}
            height={30}
            className="object-contain object-center pt-2"
          />
          <div>
            <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wide">
              Discover Our Story
            </h3>
            <p className="font-titillium text-[#72749f] text-lg mt-6">
              Xeven Solutions is an emerging AI service provider that uses
              cutting-edge technology to provide organizations with smart
              solutions. Our goal is to empower businesses to fully utilize AI
              and improve their internal processes in order to stay competitive
              in a market that is continually changing.
            </p>
            <p className="my-4 font-titillium text-[#72749f] text-lg">
              Our story began with AI enthusiasts developing innovative
              solutions to real-world challenges. We realized success in the
              digital age meant embracing AI as a strategic imperative. Our
              services include data analysis, machine learning, natural language
              processing, and deep learning algorithms.
            </p>
            <p className="font-titillium text-[#72749f] text-lg">
              At Xeven Solutions, we assist businesses of all sizes, from
              startups to Fortune 500 companies, across industries ranging from
              healthcare to finance and beyond. Our business is driven by a
              passion for innovation, a commitment to excellence, and a desire
              to make a positive impact on the world.
            </p>
          </div>
        </div>
        {/* Core Values Section */}

        <div className="flex gap-2 items-start my-28">
          <Image
            src="/xevenhealthpage/compImage.webp"
            alt="component"
            width={30}
            height={30}
            className="object-contain object-center pt-2"
          />
          <div>
            <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wide ">
              Core Values that Drive Our Brand Forward
            </h3>
            <p className="font-titillium my-8 text-lg text-[#72749f]">
              Our values serve as a guiding force for the company’s actions,
              decisions, and interactions.
            </p>
            <div className="flex justify-start gap-4 flex-wrap">
              <BoxComp1
                img="/xevenhealthpage/plusicon.webp"
                h3="Client Value"
                p="We strive to exceed our clients expectations and deliver measurable results that positively impact their business."
              />
              <BoxComp1
                img="/xevenhealthpage/plusicon.webp"
                h3="Client Value"
                p="We strive to exceed our clients expectations and deliver measurable results that positively impact their business."
              />
              <BoxComp1
                img="/xevenhealthpage/plusicon.webp"
                h3="Client Value"
                p="We strive to exceed our clients expectations and deliver measurable results that positively impact their business."
              />
              <BoxComp1
                img="/xevenhealthpage/plusicon.webp"
                h3="Client Value"
                p="We strive to exceed our clients expectations and deliver measurable results that positively impact their business."
              />
              <BoxComp1
                img="/xevenhealthpage/plusicon.webp"
                h3="Client Value"
                p="We strive to exceed our clients expectations and deliver measurable results that positively impact their business."
              />
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="flex gap-2 items-start my-28">
          <Image
            src="/xevenhealthpage/compImage.webp"
            alt="component"
            width={30}
            height={30}
            className="object-contain object-center pt-2"
          />
          <div>
            <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wide ">
              Meet Our Team
            </h3>
            <p className="font-titillium my-8 text-lg text-[#72749f] tracking-wide">
              Our management team at Xeven Solutions is comprised of the
              industry’s top data scientists and AI developers.
            </p>
            <div className="flex justify-start  flex-wrap  ">
              <div className="  lg:w-1/3 w-full flex ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/irfan-malik-1.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" lg:w-1/3 w-full ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/team-2.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" lg:w-1/3 w-full ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/team-3.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" lg:w-1/3 w-full ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/team-4.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" lg:w-1/3 w-full ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/team-5.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" lg:w-1/3 w-full ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/team-6.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" lg:w-1/3 w-full ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/team-7.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" lg:w-1/3 w-full ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/team-8.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" lg:w-1/3 w-full ">
                <div className="w-full h-80 relative ">
                  <Image
                    src="/xevenhealthpage/team-9.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-3 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutUS;
