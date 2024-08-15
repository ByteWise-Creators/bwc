/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const Scroller = ({
  direction = "right",
  items = ["HTML", "CSS", "JS", "SSG", "webdev", "animation", "UI/UX"],
  className = "cn",
}) => {
  const scrollerRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!isAnimated) {
      const scrollerInner = scrollerRef.current.querySelector(`.${className}`);
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const dupItems = item.cloneNode(true);
        dupItems.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(dupItems);
      });
      setIsAnimated(true);
    }
  }, [className]);

  return (
    <div
      ref={scrollerRef}
      className="scroller max-w-[600px] overflow-hidden fade-grad"
    >
      <ul
        style={{
          animationDirection: direction === "right" ? "normal" : "reverse",
          animationDuration: "60s",
        }}
        className={`flex gap-4 py-4 flex-nowrap w-c animate-scroll ${className}`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-secondary font-heading px-3.5 py-1.5 rounded shadow-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scroller;
