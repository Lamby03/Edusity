import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Making a Good Tommorow from Today</h2>
        <p>
          Edusity University stands as a beacon of academic excellence, renowned
          for its innovative programs and distinguished faculty. Nestled in a
          picturesque campus, it offers a wide array of undergraduate and
          graduate courses across disciplines such as engineering, liberal arts,
          and business administration. With a commitment to holistic education,
          Edusity University encourages students to pursue their passions while
          equipping them with the skills and knowledge needed to thrive in an
          ever-changing world.
        </p>
        
       
      </div>
    </div>
  );
};

export default About;
