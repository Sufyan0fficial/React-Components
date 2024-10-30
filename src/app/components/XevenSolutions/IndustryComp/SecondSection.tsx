import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SecondSection({ img, h2, p }: any) {
  return (
    <div className="my-12 ">
      <Container
        maxWidth="lg"
        className="flex flex-col lg:flex-row lg:items-center  "
      >
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
                {h2}
              </h2>

              <p className="font-titillium font-normal text-lg text-slate-600 my-8">
                {p}
              </p>
              <Link href="/" className="font-titillium text-base">
                <button className="bg-gradient-to-tr from-pink2 to-pink1 font-titillium rounded-md px-6 py-2 text-white hover:border hover:border-pink1 hover:text-pink1 hover:from-white hover:to-white">
                  Schedule a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%] relative h-96 ">
          <Image
            src={img}
            alt="Main Image2"
            fill
            sizes="100%"
            className="object-contain object-center"
          />
        </div>
      </Container>
    </div>
  );
}

export default SecondSection;
