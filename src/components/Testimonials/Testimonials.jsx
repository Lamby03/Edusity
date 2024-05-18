import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

  const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  };

  const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={slideForward}
      ></img>
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      ></img>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Emily Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I'm truly impressed by Edusity's forward-thinking approach to
                education. The flexibility of their online programs allows me to
                pursue my passion for computer science while accommodating my
                busy schedule.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity, USA, has been a beacon of inspiration for my artistic
                journey. Their commitment to fostering creativity and providing
                a supportive learning environment has been instrumental in
                honing my skills as an artist.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Sophia Patel</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing Edusity, USA, for my degree in Sociology has been one
                of the best decisions I've made. Their commitment to social
                justice and community engagement aligns perfectly with my
                values.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Liam O'Connor </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                As a language enthusiast, Edusity, USA, has been a treasure
                trove of learning opportunities for me. Their language programs
                are comprehensive and immersive, allowing me to deepen my
                understanding of different cultures and communication nuances.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
