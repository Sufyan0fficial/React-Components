import Image from "next/image";
import React from "react";
interface Type1 {
  img: string;
  h3: string;
  p: string;
}
function BoxComp1({ img, h3, p }: Type1) {
  return (
    <div
      className={`w-full lg:w-[32%] md:w-[48%] px-6 py-6 border rounded-lg shadow-md hover:border-2 hover:border-pink2 `}
    >
      <Image
        src={img}
        alt=""
        width={50}
        height={50}
        className="object-contain object-center"
      />
      <h3 className="font-poppins font-semibold text-xl">{h3}</h3>
      <p className="font-titillium text-slate-500 font-normal mt-3">{p}</p>
    </div>
  );
}

export default BoxComp1;
