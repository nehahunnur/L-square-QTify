import React, { useEffect, useState } from 'react';
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import { useSwiper } from 'swiper/react'; // Importing useSwiper hook
import 'swiper/swiper-bundle.css'; // Importing Swiper CSS
import styles from "./CarouselRight.module.css";

const CarouselRight = () => {
  const swiper = useSwiper(); // Initialize swiper instance using useSwiper hook
  const [isEnd, setIsEnd] = useState(swiper?.isEnd ?? true); // Initialize isEnd state

  useEffect(() => {
    swiper.on("slideChange", () => {
      // Update isEnd state when slide changes
      setIsEnd(swiper.isEnd);
    });

    // Clean up function for useEffect
    return () => {
      swiper.off("slideChange");
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {/* Render RightArrow component only if swiper is not at the end */}
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
}

export default CarouselRight;
