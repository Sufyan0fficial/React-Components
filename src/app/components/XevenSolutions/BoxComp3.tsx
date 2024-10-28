import Image from "next/image";
import React from "react";

function BoxComp1({ img, h3, p }: any) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-start lg:gap-4 w-full md:w-[48%] pl-6 pr-10 py-6 border rounded-lg lg:shadow-md hover:border-2 hover:border-pink2 shadow-lg ">
      <Image
        src={img}
        alt=""
        width={100}
        height={100}
        className="object-contain object-center border shadow-sm"
      />

      <div>
        <h3 className="font-poppins font-semibold text-xl">{h3}</h3>
        <p className="font-titillium text-slate-500 font-normal mt-3">{p}</p>
      </div>
    </div>
  );
}

export default BoxComp1;
