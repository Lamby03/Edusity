import React from "react";
import "./Contact.css";
import msd_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e6221885-d019-42aa-af37-fd0c3a058c66");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
    //   const data = await response.json();
  
      if (res.success) {
        console.log("Success", res)
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(res.message);
      }
    };
  
  
    return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msd_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@edusity.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +91 999999999
          </li>
          <li>
            <img src={location_icon} alt="" /> U.K, London
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            row="6"
            placeholder="Enter your message"
            required
          />
          <button type="submit" className="btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
