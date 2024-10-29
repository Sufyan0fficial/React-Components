import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import BoxComp1 from "./BoxComp1";
import BoxComp3 from "./BoxComp3";

function AboutUS() {
  return (
    <div>
      {/* About Xeven Solution Section  */}

      <div
        className="w-full h-96 relative"
        style={{
          backgroundImage: `url('/xevenhealthpage/xevenoffice.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundColor: "#FF87FA",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-pink2 to-pink1  opacity-80"></div>
        <div className="flex items-start justify-center lg:pl-36 pl-10 flex-col absolute top-0 bottom-0 lg:w-1/2 w-full">
          <h3 className="font-poppins text-4xl text-white font-semibold">
            About Xeven Solutions
          </h3>
          <p className="font-titillium text-2xl font-medium text-white mt-4 ">
            We use the power of AI to transform the way businesses operate and
            make data-driven decisions
          </p>
        </div>
      </div>

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
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start ">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/irfan-malik-1.webp"
                    alt=""
                    fill
                    sizes="100%"
                    className="object-contain object-center "
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start ">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/team-2.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start ">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/team-3.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start ">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/team-4.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start ">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/team-5.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start ">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/team-6.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start ">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/team-7.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/team-8.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider ">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
              <div className=" md:w-1/2  lg:w-1/3 w-full flex flex-col items-center md:items-start ">
                <div className="w-full  md:h-96 h-[400px] relative ">
                  <Image
                    src="/xevenhealthpage/team-9.webp"
                    alt=""
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="font-poppins text-2xl font-semibold mb-1 mt-2 tracking-wider">
                  Muhmmad Irfan
                </h3>
                <p className="font-titillium text-[#72749f] text-lg">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Celebrating Success Section */}
        <div className="flex gap-2 items-start mb-28 mt-44">
          <Image
            src="/xevenhealthpage/compImage.webp"
            alt="component"
            width={30}
            height={30}
            className="object-contain object-center pt-2"
          />
          <div className=" w-full ">
            <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wide ">
              Celebrating Success
            </h3>
            <p className="font-titillium text-lg text-[#72749f] my-6 tracking-wide">
              A timeline of the major milestones that have shaped our company’s
              growth and development.
            </p>
            <div className="flex justify-center items-center border-t-black  mt-10 flex-wrap ">
              <div className="flex flex-col justify-center items-center border border-white lg:border-t-[#72749f] border-r-[#72749f] w-1/2 lg:w-1/4 py-8 ">
                <p className="font-poppins text-4xl md:text-5xl lg:text-7xl text-black text-center font-bold ">
                  10+
                </p>
                <p className="text-black w-max ">Years of Experience</p>
              </div>
              <div className="flex flex-col justify-center items-center border border-white lg:border-t-[#72749f] lg:border-r-[#72749f] w-1/2 lg:w-1/4  py-8">
                <p className="font-poppins text-4xl md:text-5xl lg:text-7xl text-black text-center font-bold ">
                  170+
                </p>
                <p className="text-black w-max ">Happy Clients</p>
              </div>
              <div className="flex flex-col justify-center items-center border border-white border-t-[#72749f] border-r-[#72749f] w-1/2 lg:w-1/4 py-8">
                <p className="font-poppins text-4xl md:text-5xl lg:text-7xl text-black text-center font-bold ">
                  200+
                </p>
                <p className="text-black w-max ">Emplyoees</p>
              </div>
              <div className="flex flex-col justify-center items-center border border-white border-t-[#72749f] w-1/2 lg:w-1/4 py-8">
                <p className="font-poppins text-4xl md:text-5xl lg:text-7xl text-black text-center font-bold ">
                  4
                </p>
                <p className="text-black w-max ">Offices Around the World</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why choose US */}
        <div className="flex gap-2 items-start mb-28 mt-44">
          <Image
            src="/xevenhealthpage/compImage.webp"
            alt="component"
            width={30}
            height={30}
            className="object-contain object-center pt-2"
          />
          <div className=" w-full ">
            <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wide ">
              Why Choose Xeven Solutions
            </h3>
            <div className="flex lg:flex-row flex-col items-stretch  h-full mt-10">
              <div className="w-full !lg:w-[32%] flex flex-col gap-4 ">
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  h3="Proven Track Record"
                  p="Our team is committed to going above and beyond your expectations and making sure that you are completely satisfied."
                  className="!w-full"
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  h3="Proven Track Record"
                  p="Our team is committed to going above and beyond your expectations and making sure that you are completely satisfied."
                  className="!w-full"
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  h3="Proven Track Record"
                  p="Our team is committed to going above and beyond your expectations and making sure that you are completely satisfied."
                  className="!w-full"
                />
              </div>
              <div className="relative !flex-grow w-full min-h-[500px] lg:mx-3 my-5 lg:my-0">
                <Image
                  src="/xevenhealthpage/xevenoffice.avif"
                  alt="office"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="w-full !lg:w-[32%] flex flex-col gap-4 ">
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  h3="Proven Track Record"
                  p="Our team is committed to going above and beyond your expectations and making sure that you are completely satisfied."
                  className="!w-full"
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  h3="Proven Track Record"
                  p="Our team is committed to going above and beyond your expectations and making sure that you are completely satisfied."
                  className="!w-full"
                />
                <BoxComp3
                  img="/xevenhealthpage/section5img1.webp"
                  h3="Proven Track Record"
                  p="Our team is committed to going above and beyond your expectations and making sure that you are completely satisfied."
                  className="!w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Infinte Moving Carousel */}
        {/* <div className="my-48">
          <InfiniteSlider />
        </div> */}
      </Container>
    </div>
  );
}

export default AboutUS;
