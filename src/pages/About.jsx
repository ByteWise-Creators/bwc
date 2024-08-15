import Scroller from "../components/Scroller";
import titleSvg from "../assets/Svg/title-svg.svg";

const AboutUs = () => {
  const services = [
    "Android",
    "iOS",
    "Cross-Platform",
    "Front-End",
    "Backend",
    "Full-Stack",
    "UI/UX",
  ];

  const typesOfApplications = [
    "Education",
    "Business Apps",
    "Social Media",
    "Lifestyle",
    "Entertainment",
    "News Apps",
    "E-Commerce",
    "Custom",
  ];

  const typesOfWebsites = [
    "Landing Page Website",
    "News and Magazine Website",
    "E-commerce Website",
    "Business Website",
    "Blog Website",
    "Portfolio Website",
    "Event Website",
    "Company Website",
    "Travel Website",
    "Custom",
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="relative w-[70%] md:w-[40%] lg:w-[30%] xl:w-[22%] mx-auto text-center mb-12 w-c">
          <h1 className="text-4xl sm:text-5xl font-bold relative z-[1] font-heading">
            About Us.
          </h1>
          <img
            src={titleSvg}
            className="absolute h-[90px] w-[90px] top-[-25px] right-0"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:justify-between">
          {/* Animation */}
          <div className="w-full md:w-1/2 px-4 rounded-md">
            <Scroller items={typesOfApplications} className="sc-1" />
            <Scroller items={services} direction="left" className="sc-2" />
            <Scroller items={typesOfWebsites} className="sc-3" />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 px-4 text-justify">
            <p className="text-base md:text-lg leading-relaxed font-para">
              At ByteWise Creators, we specialize in transforming businesses
              through cutting-edge digital solutions. Our team excels at
              modernizing outdated systems and optimizing inefficient processes
              to enhance operational efficiency. We design and implement custom
              digital strategies that integrate the latest technology,
              streamline workflows, and improve customer experiences.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-1 font-para">
              By leveraging our expertise, we help businesses stay ahead of the
              competition and unlock new growth opportunities. Partner with us
              to revolutionize your digital landscape and drive success in a
              rapidly evolving market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
