import { Container } from "@mui/material";
import Link from "next/link";
import React from "react";

function Herosection({ img, p1, p2 }: any) {
  return (
    <div
      className="h-[calc(100vh-85px)] w-full overflow-x-hidden "
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Text section  */}
      <Container
        maxWidth="lg"
        className="flex justify-start items-center text-white h-full  "
      >
        <div className="lg:w-1/2 w-full">
          <p className="font-poppins font-bold text-5xl ">{p1}</p>
          <p className="font-titillium font-normal text-2xl mt-5 mb-10">{p2}</p>
          <Link href="/" className="mt-16">
            <button className="bg-gradient-to-tr from-pink2 to-pink1 font-titillium rounded-md px-6 py-2 hover:from-white hover:to-white hover:border hover:border-pink1 hover:text-pink1">
              Lets Connect
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Herosection;
