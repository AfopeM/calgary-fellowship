"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import useResponsive from "@/hooks/useResponsive";

export interface CardProp {
  title: string;
  content: string;
  image: string;
}

export function CardWrapper({ cards }: { cards: CardProp[] }) {
  return (
    <section className="flex flex-col items-center justify-center lg:flex-row">
      {cards.map((card: CardProp) => {
        return (
          <Card
            key={card.title}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        );
      })}
    </section>
  );
}

export function Card({ title, content, image }: CardProp) {
  const [isHovered, setIsHovered] = useState(false);
  const { isLgScreen } = useResponsive();

  const handleInteraction = () => {
    if (!isLgScreen) {
      setIsHovered((prev) => !prev);
    }
  };

  return (
    <motion.article
      className="group relative h-96 w-full overflow-hidden bg-black lg:h-[500px]"
      onHoverStart={() => isLgScreen && setIsHovered(true)}
      onHoverEnd={() => isLgScreen && setIsHovered(false)}
      onClick={handleInteraction} // Click to toggle on small/medium screens
    >
      {/* IMAGE */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image fill src={image} alt="Card Image" className="object-cover" />
      </motion.div>

      {/* DARK OVERLAY  */}
      <motion.span
        className={`${isHovered ? "backdrop-blur-lg" : ""} absolute inset-0 bg-black/65 object-cover`}
        animate={{ opacity: isHovered ? 0.95 : 0.65 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* CONTENT */}
      <div className="absolute flex h-full w-full flex-col items-center justify-center gap-4 p-16 text-center">
        <motion.h4
          initial={{ y: 40 }}
          animate={{ y: isHovered ? 0 : 40 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-black text-white uppercase md:text-4xl xl:text-5xl"
        >
          {title}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-light text-gray-200 md:text-lg"
        >
          {content}
        </motion.p>
      </div>
    </motion.article>
  );
}
