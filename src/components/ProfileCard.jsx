/* eslint-disable react/prop-types */
import { Tilt } from "react-tilt";

const ProfileCard = ({ imgSrc, name, title, description }) => {
  const defaultOptions = {
    reverse: true,
    max: 25,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.97)",
  };

  return (
    <Tilt options={defaultOptions}>
      <div className="bg-secondary text-center rounded p-6 shadow shadow-gray-900 flex flex-col items-center mb-8 sm:mb-0 w-full sm:w-[300px]">
        <img
          src={imgSrc}
          alt={`${name} image`}
          className="w-32 h-32 rounded-full mb-4"
        />

        <h3 className="text-xl font-semibold font-heading">{name}</h3>
        <p className="font-medium font-subHeading">{title}</p>
        <p className="text-sm font-light mt-2 font-para">{description}</p>
      </div>
    </Tilt>
  );
};

export default ProfileCard;
