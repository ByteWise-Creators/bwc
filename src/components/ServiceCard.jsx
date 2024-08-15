/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MyAnimateContext } from "../Contexts/AnimateContact";

const ServiceCard = ({ image = "", title, description, updateService }) => {
  const { heighLightOnClick } = useContext(MyAnimateContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const div1Varient = {
    initial: { y: -200 },
    animate: { y: 0 },
    exit: { y: -200 },
  };

  const div2Varient = {
    initial: { y: 200 },
    animate: { y: 0 },
    exit: { y: 200 },
  };

  return (
    <div
      id="servic"
      className="relative w-full xs:min-w-[320px] min-h-[200px] rounded-lg shadow-md overflow-hidden bg-transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full rounded-lg bg-[#282828]"
        whileHover={{ scale: 1.0001 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <AnimatePresence>
          {!isHovered ? (
            <motion.div
              key="front"
              className="absolute inset-0 flex flex-col justify-center items-center text-center h-full w-full"
              variants={div1Varient}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            >
              <img
                src={image}
                alt={title}
                className="size-16 object-cover text-white mb-5"
              />
              <h3 className="font-heading font-medium text-lg mt-2">{title}</h3>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              className="absolute inset-0 flex flex-col justify-center items-center text-center px-5 gap-5 h-full w-full bg-primaryGradient"
              variants={div2Varient}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            >
              <div className="theme-grad h-full w-full absolute top-0 left-0"></div>
              <p className="text-white font-normal z-10 font-para">{description}</p>
              <AnchorLink
                href="#contact"
                offset={55}
                onClick={() => {
                  updateService(title);
                  heighLightOnClick();
                }}
                className="font-heading px-2.5 py-1 border-[2px] rounded-lg font-semibold border-white cursor-pointer transition-all hover:scale-105 z-10"
              >
                Get service
              </AnchorLink>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};


export default ServiceCard;