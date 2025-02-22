"use client";
import Link from "next/link";
import { MobileMenuBtn, PrimaryBtn } from "../ui/Btn";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLockBodyScroll } from "react-use";
import Logo from "../ui/Logo";
import useResponsive from "@/hooks/useResponsive";

const pathnames = ["about", "resources", "connect with us"];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLgScreen } = useResponsive();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useLockBodyScroll(isMenuOpen);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (isLgScreen) {
      setIsMenuOpen(false);
    }
  }, [isLgScreen]);

  return (
    <nav
      className={`${isHome ? "bg-transparent" : "bg-black"} absolute top-0 z-20 flex h-24 w-full items-center justify-center font-bold tracking-wider text-white capitalize`}
      aria-label="Main Navigation"
    >
      <div className="flex w-full max-w-7xl items-center justify-between px-10 md:px-16 lg:px-24">
        <Logo />

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-x-10 md:flex">
          {pathnames.map((path, i) =>
            pathnames.length - 1 === i ? (
              <PrimaryBtn
                key={path}
                isLight
                isSmall
                link="/"
                text={path}
                aria-label="Learn more about what to expect"
              />
            ) : (
              <Link href="/" key={path} className="group relative text-lg">
                {path}
                <span className="brand-bg-color brand-animate absolute -bottom-2 left-0 h-1 w-0 group-hover:w-full" />
              </Link>
            ),
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <MobileMenuBtn
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle mobile menu"
        />

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-20 flex flex-col items-center justify-center gap-12 bg-black text-2xl font-bold text-white"
              role="dialog"
              aria-modal="true"
            >
              {pathnames.map((path, i) =>
                pathnames.length - 1 === i ? (
                  <PrimaryBtn
                    key={path}
                    isLight
                    isLarge
                    link="/"
                    text={path}
                    aria-label="Learn more about what to expect"
                  />
                ) : (
                  <Link href="/" key={path} className="group relative">
                    {path}
                    <span className="brand-bg-color brand-animate absolute -bottom-2 left-0 h-1 w-0 group-hover:w-full" />
                  </Link>
                ),
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
