import * as React from "react";
import { MENU_LINKS } from "./constants/mentLinks";
import { ResponsiveLinks } from "./components/ResponsiveLinks";
import { motion, type Variants } from "framer-motion";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../_constants/socialMedia";

type Props = {
  currentPath: string;
};

const makePathFromLink = (path: string) => path.slice(1).replace(" ", "-");

const scrollVariant: Variants = {
  active: {
    background: "#d9d9d990",
    transition: {
      delay: 0.1,
    },
  },
  inactive: {
    background: "#d9d9d9",
    transition: {
      delay: 0.1,
    },
  },
};

const Navbar = ({ currentPath }: Props) => {
  return (
    <div className="bg-bgColor w-full fixed z-50">
      <nav className="container responsive-padding mx-auto h-24 flex items-center justify-between gap-16 relative z-50 ">
        <a href="/">
          <img
            src="/assets/logo.png"
            className="w-48 mr-4"
            alt="Trębacz Fizjoterapia Logo"
          />
        </a>
        <ResponsiveLinks />
        <div className="links">
          {MENU_LINKS.map((link, index) => {
            const isActive = currentPath === makePathFromLink(link.path);
            return (
              <a
                className={`relative text-xl md:text-2xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center whitespace-nowrap  ${
                  isActive ? "text-primary" : null
                }`}
                key={index}
                href={link.path}
              >
                {link.title}
              </a>
            );
          })}
        </div>
        <ul className="hidden lg:flex gap-4 h-[96px] list-none items-center">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href={INSTAGRAM_URL} className="cursor-pointer">
              <img width={24} src="/assets/ig.svg" alt="Profil na Instagram" />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href={FACEBOOK_URL} className="cursor-pointer">
              <img width={24} src="/assets/fb.svg" alt="Profil na Facebook" />
            </a>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
