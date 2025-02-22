import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../ui/Logo";

export default function Footer() {
  const socialStyling =
    "text-white hover-brand-text-color transition-transform transform hover:scale-110";

  return (
    <footer className="flex flex-col items-center gap-4 bg-black py-16 text-center text-white">
      {/* LOGO */}
      <Logo />

      {/* SOCIAL MEDIA LINKS */}
      <nav aria-label="Social Media Links">
        <div className="mt-4 flex items-center gap-6">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF className={socialStyling} size={20} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className={socialStyling} size={24} />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            aria-label="YouTube"
          >
            <FaYoutube className={socialStyling} size={22} />
          </Link>
        </div>
      </nav>

      {/* FELLOWSHIP LOCATION */}
      <address className="not-italic">
        <p className="font-black tracking-wide capitalize">
          fellowship location
        </p>
        <p className="brand-text-color leading-tight">
          Unit #220 - 1628 Dickson Ave,
          <br className="lg:hidden" />
          Kelowna, BC V1Y 9X1
        </p>
      </address>

      {/* COPYRIGHT NOTICE */}
      <p className="brand-animate text-xs text-white/50 capitalize">
        Copyright © {new Date().getFullYear()} Christian Fellowship Calgary.
        <br className="lg:hidden" />
        All rights reserved. Site design by
        <Link href="/" className="hover-brand-text-color">
          {" "}
          Afope Matilukuro
        </Link>
      </p>
    </footer>
  );
}
