"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export function AccordionDemo() {
  const items = [1, 2, 3, 4];
  const [activeitem, setactiveitem] = useState(0);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mt-10 flex flex-col gap-4"
    >
      {items.map((value, index) => (
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
            What is Healthcare Technology?
          </AccordionTrigger>

          <AccordionContent className="font-titillium p-5 text-base">
            Healthcare technology refers to the application of scientific
            knowledge, tools, and systems to improve the delivery of healthcare
            services. It encompasses a wide range of technologies, including
            medical devices, electronic health records, telemedicine, artificial
            intelligence, and mobile health applications. These technologies aim
            to enhance patient care, streamline processes, improve efficiency,
            and advance medical research and innovation.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
