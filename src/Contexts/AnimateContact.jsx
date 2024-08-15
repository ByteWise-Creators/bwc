/* eslint-disable react/prop-types */
import { useAnimationControls } from "framer-motion";
import { createContext, useRef } from "react";

export const MyAnimateContext = createContext();

const AnimateContact = ({ children }) => {
  const heighLightCtrl = useAnimationControls();
  const selectRef = useRef(null);

  const heighLightOnClick = () => {
    if (selectRef.current !== null) {
      setTimeout(() => {
        selectRef.current.focus();
      }, 800);
      setTimeout(() => {
        selectRef.current.blur();
      }, 1800);
    }
    heighLightCtrl.start("animate");
  };

  return (
    <MyAnimateContext.Provider
      value={{ heighLightCtrl, heighLightOnClick, selectRef }}
    >
      {children}
    </MyAnimateContext.Provider>
  );
};

export default AnimateContact;
