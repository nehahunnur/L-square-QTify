import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import "./CarouselLeftNavigation.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegin, setIsBegin] = useState(swiper.isBeginning);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBegin(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);

    // Clean up the event listener when the component unmounts
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className="leftNavigation">
      {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
