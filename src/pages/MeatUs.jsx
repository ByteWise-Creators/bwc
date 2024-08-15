import ProfileCard from "../components/ProfileCard";
import deepakumar from "../assets/img/deepakumar.png";
import hariharan from "../assets/img/hariharan.png";
import ajay from "../assets/img/ajay.png";
import hariprasath from "../assets/img/hariprasath.png";
import arvindh from "../assets/img/arvindh.jpg";
import titleSvg from "../assets/Svg/title-svg.svg";

const MeatUs = () => {
  return (
    <section className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-[70%] md:w-[75%] lg:w-[60%] xl:w-[50%] mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold relative z-[1] font-heading">
            Meet our founders.
          </h1>
          <img
            src={titleSvg}
            className="absolute h-[90px] w-[90px] top-[-20px] right-[30px]"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8">
          <ProfileCard
            imgSrc={deepakumar}
            name="Deepakumar M"
            title="Founder & Project Manager"
            description="Leads project development with a focus on excellence."
          />
          <ProfileCard
            imgSrc={hariharan}
            name="Hariharan C"
            title="Founder & Administrative Officer"
            description="Handles administrative tasks for smooth company operations."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 sm:gap-8 mt-0 sm:mt-8">
          <ProfileCard
            imgSrc={ajay}
            name="Ajay D"
            title="Co-Founder & CEO"
            description="Drives strategic vision and company growth."
          />
          <ProfileCard
            imgSrc={hariprasath}
            name="Hari Prasath K"
            title="Co-Founder & COO"
            description="Optimizes operations for improved productivity."
          />
          <ProfileCard
            imgSrc={arvindh}
            name="Arvindh V"
            title="Co-Founder & CSR"
            description="Ensures exceptional client service and support."
          />
        </div>
      </div>
    </section>
  );
};

export default MeatUs;
