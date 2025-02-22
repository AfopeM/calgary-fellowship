"use client";

import { motion } from "framer-motion";
import useResponsive from "@/hooks/useResponsive";

interface InfiniteCarouselProp {
  isLight?: boolean;
}

export default function InfiniteCarousel({ isLight }: InfiniteCarouselProp) {
  const { isSmScreen, isMdScreen, isLgScreen } = useResponsive();

  // Sample data
  const items = [
    {
      title: "Church Meetings",
      subtitle: "Sundays at 8:30am and 11:30am",
    },
    {
      title: "Bible Study",
      subtitle: "Wednesdays at 7:00pm",
    },
    {
      title: "Youth Fellowship",
      subtitle: "Fridays at 6:00pm",
    },
  ];

  // Combine items with duplicates for seamless looping
  const carouselItems = [...items, ...items];

  return (
    <>
      {isSmScreen ? (
        <>
          <h3
            className={`${isLight ? "brand-text-color" : "text-black"} mb-1 text-2xl font-black`}
          >
            {items[0].title}
          </h3>
          <p className="tracking-wider text-white">{items[0].subtitle}</p>
        </>
      ) : (
        <motion.div
          className="flex w-fit items-center" // `w-fit` ensures the motion div only takes up as much width as its content
          animate={
            isMdScreen || isLgScreen
              ? {
                  x: ["0%", "-100%"], // Animate from the full carousel to the end of duplicates
                }
              : {}
          }
          transition={
            isMdScreen || isLgScreen
              ? {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15, // Adjust duration for smoother/slower animation
                  ease: "linear",
                }
              : {}
          }
          initial={{ x: 0 }}
        >
          {carouselItems.map((item, index) => (
            <div
              className="flex min-w-[33.33%] flex-col items-center justify-center px-4 text-center text-white"
              key={`carousel-item-${index}`}
            >
              <h3
                className={`${isLight ? "brand-text-color" : "text-black"} mb-1 text-2xl font-black`}
              >
                {item.title}
              </h3>
              <p className="tracking-wider">{item.subtitle}</p>
            </div>
          ))}
        </motion.div>
      )}
    </>
  );
}
