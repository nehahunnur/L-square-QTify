import React from "react";
import "./Hero.css";
import HeroLogo from "../../assets/vibrating-headphone.svg";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="textWrap">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={HeroLogo} width={212} alt="not available" />
      </div>
    </div>
  );
};

export default Hero;
