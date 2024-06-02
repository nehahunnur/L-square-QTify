import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselLeft.module.css";

const CarouselLeft = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBeginning(swiper.isBeginning);
    });

    return () => {
      swiper.off("slideChange");
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
      {/* Example usage of SwiperSlide */}
      <Swiper
        className="swiper-container"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* Add more SwiperSlide components for additional slides */}
      </Swiper>
    </div>
  );
}

export default CarouselLeft;
