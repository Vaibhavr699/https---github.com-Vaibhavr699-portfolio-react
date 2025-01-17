import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/bgg.png";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
    
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a86b3d3-8589-4875-82b4-a695a5f468f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel
            reprehenderit consequuntur consectetur sequi in!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>vaibhavr699@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>8076055898</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Noida,India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=" ">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor=" ">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label htmlFor="">Write your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
