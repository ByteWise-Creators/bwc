/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const BackDrop = ({ children}) => {
  return (
    <motion.div
      className={`absolute z-[999] bottom-0 left-0 h-full w-full bg-black/90 flex justify-center items-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};


const Model = () => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };
  return (
    <BackDrop>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-primary d-size m-auto px-5 py-2 flex gap-3 justify-center items-center rounded-md"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div></div>
        <button className="bg-primaryGradient px-2.5 py-1.5">Ok</button>
      </motion.div>
    </BackDrop>
  );
};

export default Model;