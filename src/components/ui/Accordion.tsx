"use client";

import { useState } from "react";

export interface AccordionProp {
  title: string;
  content: string;
}

export default function Accordion({
  accordion,
}: {
  accordion: AccordionProp[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section aria-label="Frequently Asked Questions">
      {accordion.map((item, index) => {
        const isOpen = openIndex === index;
        const accordionId = `accordion-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div
            key={index}
            className={`${index === 0 ? "lg:border-y" : "lg:border-b"} brand-border-color max-w-lg border-l pl-8 lg:border-l-0 lg:pl-0`}
          >
            <h3 className="text-lg font-bold">
              <button
                id={buttonId}
                onClick={() => toggleAccordion(index)}
                className="group flex w-full items-center justify-between py-4 text-left capitalize focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={accordionId}
              >
                {item.title}
                {/* icon */}
                <div
                  className={`${
                    isOpen ? "mt-6 -rotate-45" : "rotate-0"
                  } brand-animate relative h-6 w-6 hover:scale-110`}
                >
                  <span
                    className={`${
                      isOpen ? "h-[80%]" : "h-full"
                    } brand-bg-color absolute -top-[1px] right-2 w-1`}
                  />
                  <span className="brand-bg-color absolute right-[1px] bottom-3.5 h-1 w-3/4" />
                </div>
              </button>
            </h3>
            <div
              id={accordionId}
              role="region"
              aria-labelledby={buttonId}
              className={`brand-animate overflow-hidden ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
              aria-hidden={!isOpen}
            >
              <p className="px-4 pb-6 text-gray-500">{item.content}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
