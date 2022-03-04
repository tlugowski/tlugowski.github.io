import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rgg68vq",
        "template_ta0dv4s",
        formRef.current,
        "user_6pV4SCctlpzlVEgmkRHrG"
      )
      .then(
        result => {
          console.log(result.text);
          setDone(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact me:</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +48 *** *** ***
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              t.lugowski@wp.pl
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              Warsaw, Poland
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>Complete the form fields</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
