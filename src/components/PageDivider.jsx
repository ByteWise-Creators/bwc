const PageDivider = () => {
  return (
    <div className="relative flex justify-center my-5">
      <span className="absolute text-xl mx-1 bg-primaryGradient bg-clip-text text-transparent">
        •
      </span>
      <span className="absolute text-3xl mx-1 bg-primaryGradient bg-clip-text text-transparent">
        •
      </span>
      <span className="absolute text-5xl mx-1 bg-primaryGradient bg-clip-text text-transparent">
        •
      </span>
      <span className="absolute text-3xl mx-1 bg-primaryGradient bg-clip-text text-transparent">
        •
      </span>
      <span className="absolute text-xl mx-1 bg-primaryGradient bg-clip-text text-transparent">
        •
      </span>
    </div>
  );
};

export default PageDivider;
