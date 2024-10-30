"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export function AccordionSection({ array, h3 }: any) {
  const [activeitem, setactiveitem] = useState(0);

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
          <div className="w-full">
            <h3 className="font-poppins font-semibold text-2xl lg:text-4xl tracking-wider">
              Frequently Asked Questions
            </h3>
            <Accordion
              type="single"
              collapsible
              className="w-full mt-10 flex flex-col gap-4"
            >
              {array.map((item: any, index: any) => (
                <AccordionItem
                  key={index}
                  value={`item${index}`}
                  className={`rounded-md  border-2 border-pink-50 ${
                    activeitem == index ? "border-2 border-pink1" : ""
                  }`}
                >
                  <AccordionTrigger
                    className={`font-semibold text-base tracking-wide font-poppins py-3 hover:no-underline pl-5 pr-3  ${
                      activeitem == index
                        ? "bg-gradient-to-tr from-pink2 to-pink1 text-white"
                        : ""
                    }`}
                    onClick={() => setactiveitem(index)}
                  >
                    {item.trigger}
                  </AccordionTrigger>

                  <AccordionContent className="font-titillium p-5 text-base">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}
