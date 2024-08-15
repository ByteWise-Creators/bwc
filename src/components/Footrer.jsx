/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import AnchorLink from "react-anchor-link-smooth-scroll";
import byteWiseCreators from "../assets/ByteWise_Creators.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer layout className="bg-secondary text-textColor py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <div className="flex gap-3">
              <img src={byteWiseCreators} className="size-12" alt="" />
              <h3 className="text-xl font-heading font-bold mb-4 inline">
                ByteWise <span className="block">Creators</span>
              </h3>
            </div>
            <p className="text-sm font-para">
              ByteWise Creators is a digital transformation agency dedicated to
              bringing innovative solutions to modernize your business.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="font-subHeading space-y-2">
              <li className="cursor-pointer">
                <AnchorLink href="#home" className="hover:underline">
                  Home
                </AnchorLink>
              </li>
              <li className="cursor-pointer">
                <AnchorLink
                  href="#about"
                  offset={50}
                  className="hover:underline"
                >
                  About Us
                </AnchorLink>
              </li>
              <li className="cursor-pointer">
                <AnchorLink
                  href="#service"
                  offset={50}
                  className="hover:underline"
                >
                  Services
                </AnchorLink>
              </li>
              <li className="cursor-pointer">
                <AnchorLink href="#contact" className="hover:underline">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-heading font-bold mb-4">Services</h3>
            <ul className="font-subHeading space-y-2">
              <li className="cursor-pointer">Web Development</li>
              <li className="cursor-pointer">Full-Stack Development</li>
              <li className="cursor-pointer">UI/UX Design</li>
              <li className="cursor-pointer">App Development</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm font-subHeading">
            &copy; {new Date().getFullYear()} ByteWise Creators. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
