"use client";

import React from "react";
import BoxComp1 from "../BoxComp1";
import Image from "next/image";
import { Container } from "@mui/material";

function ThirdSection({ h2, array }: any) {
  //   const [boxData, setboxData] = useState([
  //     {
  //       img: "/xevenhealthpage/phoneicon.png",
  //       p: "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs.",
  //       h3: "Improved Operational Efficiency",
  //     },
  //     {
  //       img: "/xevenhealthpage/plusicon.webp",
  //       p: "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs.",
  //       h3: "Improved Operational Efficiency",
  //     },
  //     {
  //       img: "/xevenhealthpage/plusicon.webp",
  //       p: "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs.",
  //       h3: "Improved Operational Efficiency",
  //     },
  //     {
  //       img: "/xevenhealthpage/plusicon.webp",
  //       p: "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs.",
  //       h3: "Improved Operational Efficiency",
  //     },
  //     {
  //       img: "/xevenhealthpage/plusicon.webp",
  //       p: "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs.",
  //       h3: "Improved Operational Efficiency",
  //     },
  //     {
  //       img: "/xevenhealthpage/plusicon.webp",
  //       p: "AI and ML automate routine tasks and improve operational efficiency in healthcare organizations. This results in increased productivity and reduced costs.",
  //       h3: "Improved Operational Efficiency",
  //     },
  //   ]);

  return (
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
              {h2}
            </h3>

            {/* Boxes Section  */}
            <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-4">
              {array.map((item: any, index: any) => (
                <BoxComp1 key={index} img={item.img} p={item.p} h3={item.h3} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ThirdSection;
