import { useEffect, useState } from "react";
import { BlurText } from "../animatedComponents/BlutText";
import heroSvg from "../assets/Svg/ByteWiseCreaters-hero.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import byteWiseCreators from "../assets/ByteWise_Creators.png";
import "./ByteWiseLoader.css";

const ByteWiseCreator = () => {
  const texts = [
    "Next-gen Digital Experience",
    "Futuristic Digital Solutions",
    "Revolution Tech Solutions",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [indexChanged, setIndexChanged] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    setIndexChanged(false);
    const timeOut = setTimeout(() => {
      setIndexChanged(true);
    }, 100);
    return () => clearTimeout(timeOut);
  }, [currentIndex]);

  return (
    <>
      {/* Loader */}
      <div className="absolute bg-black/20 backdrop-blur-md shadow-lg h-full w-full flex justify-center items-center z-[999]">
        <div className="w-[85px] h-[85px] md:w-[140px] md:h-[140px] absolute">
          <img src={byteWiseCreators} alt="ByteWise Creators" className="img" />
        </div>
        <div className="loader w-[98px] h-[98px] md:w-[165px] md:h-[165px]"></div>
      </div>

      {/* <---Summa---> */}
      <section
        id="home"
        className="flex flex-col sm:flex-row justify-center items-center gap-2 mx-auto pt-[20%] sm:pt-[6%] sm:pb-[3%] px-[4%]"
      >
        <div className="md:basis-[55%] basis-[95%]">
          <p className="font-subHeading text-sm lg:text-lg pt-10">
            Discover the Power of Digital Transformation
          </p>
          <p className="font-heading xss:text-[1.33rem] smm:text-[1.7rem] lg:text-4xl xl:text-5xl leading-[2.5rem] lg:leading-[4.5rem] xl:leading-[4.8rem] pt-5 tracking-wide">
            Transforming Businesses with
          </p>
          <div className="h-[3.3rem] sm:h-[4rem] md:h-[3.5rem] lg:h-[4.8rem]">
            {indexChanged && (
              <BlurText
                text={texts[currentIndex]}
                className="font-heading xss:text-[1.33rem] smm:text-[1.7rem] lg:text-4xl xl:text-5xl leading-[3rem] lg:leading-[4.5rem] xl:leading-[4.8rem] pb-2.5 tracking-wide h-[5rem] overflow-hidden"
                delay={250}
              />
            )}
          </div>
          <p className="font-para mb-8 text-sm md:text-[17px] leading-[1.5rem] sm:leading-[1.8rem] lg:text-[20px] lg:mt-2 font-light w-[80%]">
            Empowering Your Business with Innovative Tech and Seamless Digital
            Experiences
          </p>
          <AnchorLink
            href="#contact"
            className="bg-primaryGradient inline text-white md:text-lg font-para py-2.5 px-6 rounded-full w-full"
          >
            Innovate Digitally
          </AnchorLink>
        </div>
        <div className="hero-svg hidden md:block basis-[45%]">
          <img
            src={heroSvg}
            className="w-full h-[350px]"
            alt="ByteWise Creators"
          />
        </div>
      </section>
    </>
  );
};

export default ByteWiseCreator;
