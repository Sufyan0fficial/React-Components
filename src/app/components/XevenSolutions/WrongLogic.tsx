// "use client";

// import { Container } from "@mui/material";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// function ComplexImgComp() {
//   const [hover, sethover] = useState({
//     1: false,
//     2: false,
//     3: false,
//     4: false,
//     5: false,
//     6: false,
//     7: false,
//     8: false,
//   });
//   console.log(hover);
//   const [item, setitem] = useState(0);
//   const DummyData = [1, 2, 3, 4, 5, 6, 7, 8];
//   return (
//     <div>
//       <Container maxWidth="lg" className="my-20">
//         <div className="flex gap-3 items-start ">
//           <Image
//             src="/xevenhealthpage/compImage.webp"
//             alt=""
//             width={30}
//             height={30}
//             className="object-contain object-center pt-2"
//           />
//           <div>
//             <h3 className="font-poppins font-semibold text-4xl tracking-wide ">
//               Industries We Transformed with Innovative Software Solutions
//             </h3>
//             <p className="font-titillium text-gray-400 text-lg mt-5">
//               We are committed to innovating across industries with our custom
//               AI solutions, empowering businesses to thrive in the digital era.
//             </p>
//           </div>
//         </div>
//       </Container>
//       {/* Main Image Component Starts here */}
//       <div className="flex justify-start items-start flex-wrap mb-20 border-2 border-red-500 relative w-full h-full ">
//         {DummyData.map((box, index) => (
//           <div
//             key={index}
//             className={`w-1/4 h-80  border border-white  relative `}
//             onMouseEnter={() => {
//               sethover(() => {
//                 hover["index"] = true;
//               });
//               setitem(DummyData[index]);
//             }}
//             //   onMouseLeave={() => sethover(false)}
//           >
//             {/* text section  */}
//             <div
//               className={` flex items-start justify-start absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-10 py-20 w-full h-full transition-all duration-300 ${
//                 hover ? "bg-pink1  hover:bg-opacity-80 " : ""
//               }

//                        `}
//             >
//               <div className={`${hover && "hidden"} font-poppins text-4xl `}>
//                 Ed Tech
//               </div>
//               <div className={`${hover ? "flex" : "hidden"}`}>
//                 {hover && (
//                   <div className="flex flex-col gap-4">
//                     <h3 className="font-poppins text-2xl font-medium">
//                       Ed Tech
//                     </h3>
//                     <p className="font-titillium text-sm">
//                       Say goodbye to paperwork, personalize teaching approaches,
//                       lower operating costs, and broaden your market scope with
//                       e-learning platforms.
//                     </p>
//                     <Link href="/" className="text-base">
//                       Read More →
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* Image section */}
//         <Image
//           src="/xevenhealthpage/mainImage.jpg"
//           alt="image"
//           fill
//           sizes="100%"
//           className="object-cover object-center -z-10"
//         />
//       </div>
//     </div>
//   );
// }

// export default ComplexImgComp;
