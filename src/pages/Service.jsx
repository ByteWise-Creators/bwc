/* eslint-disable react/prop-types */
import titleSvg from "../assets/Svg/title-svg.svg";
import ServiceCard from "../components/ServiceCard";
import services from "../assets/icons";


const Service = ({ updateService }) => {
  return (
    <section id="service" className="w-full py-14 text-[#fefefe]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-7 mb-12">
          {/* Title */}
          <div className="relative w-[70%] md:w-[40%] lg:w-[30%] xl:w-[26%] mx-auto text-center">
            <h1 className="text-5xl font-bold relative z-[1] font-heading">Services</h1>
            <img
              src={titleSvg}
              className="absolute h-[90px] w-[90px] top-[-20px] right-[30px]"
            />
          </div>
          <p className="text-lg md:text-xl font-para">
            We provide a wide range of digital solutions to meet your business
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              updateService={updateService}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
