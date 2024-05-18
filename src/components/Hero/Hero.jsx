import React from "react";
import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png';
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Amidst the Golden Glow</h1>
        <p>
          graduates donned in regal caps and gowns gathered with family and
          friends to mark the culmination of their academic journey. Cheers
          echoed through the grand auditorium as each graduate received their
          diploma, a testament to years of dedication and perseverance. With
          hearts full of pride and minds brimming with possibility, they emerged
          from the ceremony ready to embrace the future, guided by the lessons
          learned and memories cherished at their beloved university.
        </p>
        <button className="btn">Explore More <img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  );
};

export default Hero;
