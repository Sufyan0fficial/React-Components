import React from "react";
import BoxComp2 from "../BoxComp2";
import Image from "next/image";
import { Container } from "@mui/material";

function FourthSection({ h3, array }: any) {
  return (
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
              {h3}
            </h3>

            {/* Boxes Section  */}

            <div className="mt-10  overflow-x-scroll scroll-hidden">
              <div className="flex  gap-10 ">
                {array.map((item: any, index: any) => (
                  <BoxComp2
                    key={index}
                    img={item.img}
                    p={item.p}
                    h3={item.h3}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FourthSection;
