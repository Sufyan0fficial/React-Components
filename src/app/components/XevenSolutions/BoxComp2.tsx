import Image from "next/image";
import React from "react";

function BoxComp2({ img, h3, p }: any) {
  return (
    <div className="w-[45%] lg:w-[30%] flex-shrink-0 ">
      <div className="w-full h-72 relative flex-shrink-0">
        <Image src={img} alt="" className="object-cover object-center" fill />
      </div>
      <h3 className="font-poppins font-semibold text-xl my-6">{h3}</h3>
      <p className="font-titillium text-slate-500 font-normal">{p}</p>
    </div>
  );
}

export default BoxComp2;
