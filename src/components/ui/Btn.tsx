import { motion } from "framer-motion";
import Link from "next/link";

interface PrimaryBtnProp {
  text: string;
  link: string;
  isLight?: boolean;
  isSmall?: boolean;
  isLarge?: boolean;
}

export function PrimaryBtn({
  text,
  link,
  isLight,
  isSmall,
  isLarge,
}: PrimaryBtnProp) {
  const isLightStyling = isLight
    ? "brand-bg-color hover-brand-text-color text-white hover:bg-transparent hover:ring-2"
    : "brand-text-color bg-white hover:bg-transparent hover:ring-2";

  const SizeStyling = isSmall
    ? "px-4 py-2 text-lg w-48"
    : isLarge
      ? "px-6 py-4 text-2xl w-72"
      : "px-6 py-3 text-xl w-56";

  return (
    <Link
      href={link}
      className={`${isLightStyling} ${SizeStyling} tracker-wider brand-animate cursor-pointer rounded text-center font-bold capitalize hover:scale-102`}
    >
      {text}
    </Link>
  );
}

interface MobileMenuBtnProp {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function MobileMenuBtn({ isMenuOpen, toggleMenu }: MobileMenuBtnProp) {
  return (
    <button
      className={`${isMenuOpen ? "text-white" : "text-black"} brand-animate relative z-30 flex cursor-pointer hover:scale-105 md:hidden`}
      onClick={toggleMenu}
    >
      <motion.div
        className={`flex flex-col gap-y-1`}
        initial={false}
        animate={{ rotate: isMenuOpen ? -45 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* First Row */}
        <div className="flex gap-x-0.5">
          <div className="relative h-4 w-4">
            <span className="brand-bg-color absolute top-0 right-0 h-3/4 w-1 rounded" />
            <span className="brand-bg-color absolute right-0 bottom-1 h-1 w-3/4 rounded" />
          </div>
          <div className="relative h-4 w-4">
            <span className="brand-bg-color absolute top-0 left-0 h-3/4 w-1 rounded" />
            <span className="brand-bg-color absolute bottom-1 left-0 h-1 w-3/4 rounded" />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-x-0.5">
          <div className="relative h-4 w-4">
            <motion.span
              className="brand-bg-color absolute right-0 w-1 rounded"
              animate={{
                height: isMenuOpen ? "75%" : "140%",
                bottom: isMenuOpen ? "50%" : "0%",
              }}
              transition={{ duration: 0.3 }}
            />
            <span className="brand-bg-color absolute -top-1.5 right-0 h-1 w-3/4 rounded" />
          </div>
          <div className="relative h-4 w-4">
            <motion.span
              className="brand-bg-color absolute left-0 w-1 rounded"
              animate={{
                height: isMenuOpen ? "75%" : "140%",
                bottom: isMenuOpen ? "50%" : "0%",
              }}
              transition={{ duration: 0.3 }}
            />
            <span className="brand-bg-color absolute -top-1.5 left-0 h-1 w-3/4 rounded" />
          </div>
        </div>
      </motion.div>
    </button>
  );
}
