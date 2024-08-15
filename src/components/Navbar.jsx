import AnchorLink from "react-anchor-link-smooth-scroll";
import byteWiseCreators from "../assets/ByteWise_Creators.png";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const variants = {
    initial: { y: 50, opacity: 0.5, rotate: 120 },
    animate: { y: 0, opacity: 1, rotate: 0 },
    exit: { y: 50, opacity: 0, rotate: 120 },
  };

  const transition = { duration: 0.6, type: "spring" };

  return (
    <>
      <section className="min-w-full sticky top-2 hidden items-center justify-center my-[3%] md:flex z-[99]">
        <nav className="bg-secondary w-4/5 flex justify-between items-center p-2 lg:p-3.5 rounded-[100px] shadow-lg">
          <div className="shrink-0">
            <a href="/">
              <img
                src={byteWiseCreators}
                alt="byteWiseCreators-logo"
                className="h-14"
              />
            </a>
          </div>
          <div className="mr-5">
            <ul className="flex justify-center items-center gap-5 lg:gap-10 list-none">
              <li>
                <AnchorLink
                  className="lg:text-[17px] uppercase font-subHeading ac-hov transition-all duration-300"
                  href="#home"
                >
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  className="lg:text-[17px] uppercase font-subHeading ac-hov transition-all duration-300"
                  href="#about"
                  offset={50}
                >
                  About
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  className="lg:text-[17px] uppercase font-subHeading ac-hov transition-all duration-300"
                  href="#service"
                  offset={50}
                >
                  Service
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  className="lg:text-[17px] uppercase font-subHeading ac-hov transition-all duration-300"
                  href="#contact"
                  offset={55}
                >
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>

      {/* Mobile Menu */}

      <AnimatePresence key="ani-pre">
        {menuOpen && (
          <AnchorLink href="#logo" onClick={toggleMenu}>
            <motion.div
              key="home"
              layout
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="fixed z-10 right-5 bottom-[252px] w-12 h-12 bg-primaryGradient rounded-full flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
            </motion.div>
          </AnchorLink>
        )}

        {menuOpen && (
          <AnchorLink href="#about" onClick={toggleMenu}>
            <motion.div
              key="about"
              layout
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="fixed z-10 right-5 bottom-[194px] w-12 h-12 bg-primaryGradient rounded-full flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              </svg>
            </motion.div>
          </AnchorLink>
        )}

        {menuOpen && (
          <AnchorLink href="#service" onClick={toggleMenu}>
            <motion.div
              key="service"
              layout
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="fixed z-10 right-5 bottom-[136px] w-12 h-12 bg-primaryGradient rounded-full flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
              </svg>
            </motion.div>
          </AnchorLink>
        )}

        {menuOpen && (
          <AnchorLink href="#contact" onClick={toggleMenu}>
            <motion.div
              key="contact"
              layout
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="fixed z-10 right-5 bottom-[78px] w-12 h-12 bg-primaryGradient rounded-full flex items-center justify-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </svg>
            </motion.div>
          </AnchorLink>
        )}
      </AnimatePresence>

      <div
        className="fixed right-5 z-10 bottom-5 md:hidden w-12 h-12 mt-5 bg-primaryGradient rounded-full flex flex-col gap-1.5 items-center justify-center cursor-pointer"
        onClick={toggleMenu}
        key="toogle-menu"
      >
        <div
          key="b-1"
          className={`h-1 w-7 bg-white rounded-full transition-transform duration-500 ${
            menuOpen ? "transform rotate-45 translate-y-2.5" : ""
          }`}
        ></div>
        <div
          key="b-2"
          className={`h-1 w-7 bg-white rounded-full transition-opacity duration-500 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          key="b-3"
          className={`h-1 w-7 bg-white rounded-full transition-transform duration-500 ${
            menuOpen ? "transform -rotate-45 -translate-y-2.5" : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
