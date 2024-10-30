import React from "react";
import BoxComp3 from "../BoxComp3";
import Image from "next/image";
import { Container } from "@mui/material";

function FifthSection({ h3, array }: any) {
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

            <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-4">
              {array.map((item: any, index: any) => (
                <BoxComp3 img={item.img} p={item.p} h3={item.h3} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FifthSection;
