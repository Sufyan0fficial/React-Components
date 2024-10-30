import "@/app/components/XevenSolutions/styles.css";
import Image from "next/image";

const Data = [
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Sufyan",
    h2: "CEO of HorizonAI",
    delay: "item1",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Husnain",
    h2: "CEO of TechticsAI",
    delay: "item2",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Usman",
    h2: "CEO of DarulAloom",
    delay: "item3",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Umar",
    h2: "CEO of CodeQueSolutions",
    delay: "item4",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Abraiz",
    h2: "Cofounder of ZeeSolutions",
    delay: "item4",
  },
  {
    img: "ceoimage.jpg",
    h1: "Ali Amjad",
    h2: "Producer of MegaHit",
    delay: "item5",
  },
  {
    img: "ceoimage.jpg",
    h1: "Muhammad Zafar",
    h2: "Co-Founder of Zafar Solutions",
    delay: "item6",
  },
  {
    img: "ceoimage.jpg",
    h1: "Taimoor Mirza",
    h2: "Founder of Taimoor Academy",
    delay: "item7",
  },
  {
    img: "ceoimage.jpg",
    h1: "Taimoor Mirza",
    h2: "Founder of Taimoor Academy",
    delay: "item8",
  },
];

export default function InfiniteCarousel() {
  return (
    <div className="bg-red-600 relative w-full h-32  pt-5 mt-36">
      {Data.map((item, index) => (
        <div className={`infinitescroll ${item.delay} `} key={index}>
          <Image
            src={`/xevenhealthpage/${item.img}`}
            alt="image"
            fill
            className="object-center object-cover"
          />
        </div>
      ))}
    </div>
  );
}
