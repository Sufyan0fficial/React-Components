import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeaderComponent() {
  return (
    <div className="font-poppins font-normal h-28 flex items-center ">
      <Container maxWidth="lg">
        <div className=" flex justify-between items-center">
          <Link href="/" className="relative w-[160px] h-[50px]">
            <Image
              src="/xevenhealthpage/header-logo.webp"
              alt="logo"
              fill
              sizes="100%"
            />
          </Link>
          <div className="hidden lg:flex lg:justify-evenly gap-6">
            <Link
              href="/"
              className="hover:text-[#FF87FA] transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/"
              className="hover:text-[#FF87FA] transition-colors duration-300"
            >
              SaleForce
            </Link>
            <Link href="/" className="text-pink1">
              Industries
            </Link>
            <Link
              href="/"
              className="hover:text-[#FF87FA] transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link
              href="/"
              className="hover:text-[#FF87FA] transition-colors duration-300"
            >
              Company
            </Link>
          </div>
          <Link href="/" className="hidden lg:block">
            <Image
              src="/xevenhealthpage/serachicon.png"
              alt="search icon"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/"
            className="lg:flex gap-2 items-center hover:text-[#FF87FA] transition-colors duration-300 hidden"
          >
            <Image
              src="/xevenhealthpage/phoneicon.png"
              alt="contacticon"
              height={20}
              width={20}
            />
            <span>+92 317 0653342</span>
          </Link>
          <button className="font-titillium font-medium text-white px-6 py-[12px] rounded-md text-base bg-gradient-to-tr from-pink2 to-pink1 hover:from-transparent hover:to-transparent hover:border hover:border-pink1 hover:text-pink1 transition-all duration-300 hidden lg:block">
            Free Ai Consultation
          </button>
          <Link href="/" className="lg:hidden block">
            <Image
              src="/xevenhealthpage/baricon.png"
              alt=""
              height={50}
              width={50}
              className="object-cover object-center"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default HeaderComponent;
