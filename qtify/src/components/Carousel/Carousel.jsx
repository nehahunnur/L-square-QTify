import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Carousel = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      // Your Swiper configuration options here
    });

    return () => {
      // Clean up Swiper instance
      swiper.destroy();
    };
  }, []); // Add 'swiper' to the dependency array to resolve the ESLint error

  return (
    <div className="swiper-container">
      {/* Your carousel content here */}
    </div>
  );
}

export default Carousel;
