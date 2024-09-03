import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Popup from "../../components/popup/popup.tsx";
import "./form.scss";

import Container from "../../components/container/container.tsx";

const Form = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const { t } = useTranslation();
  const form = useRef();
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const sendEmail2 = e => {
    e.preventDefault();
    const email = form.current.mail.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setLoading(true);

    emailjs
      .sendForm("service_rstpq89", "template_udkmlbl", form.current, {
        publicKey: "h62aOe4zowAuSMPFz",
      })
      .then(
        () => {
          console.log("Mail sent");
          setShowPopup(true);
          setLoading(false);
        },
        error => {
          console.log("Mail did not send", error.text);
          setLoading(false);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail2} className="form">
      <Popup show={showPopup} onClose={togglePopup}>
        <h2>Thank You for Your Message!</h2>
        <p>Your message has been received. We’ll get back to you shortly</p>
      </Popup>
      <div className="titlecontainer">
        <div className="title">Få ett prisförslag för din process!</div>
      </div>

      <div className="inputwrapper">
        <div className="inputboxes">
          <div className="inputbox">
            <label>Typ av process:</label>
            <select className="dropdown" name="category">
              <option value="Sales">Sales</option>
              <option value="Purchases">Purchases</option>
            </select>
          </div>
          <div className="inputbox">
            <label>Antal FTE:</label>
            <input type="text" name="fte" required />
          </div>
          <div className="inputbox">
            <label>Antal orderrader per dag:</label>
            <input type="text" name="amount_rows" required />
          </div>
        </div>
        <div className="inputboxes">
          <div className="inputbox">
            <label>Affärssystem:</label>
            <input type="text" name="system" required />
          </div>
          <div className="inputbox">
            <label>Ordrar i månaden:</label>
            <input type="text" name="amount_orders" required />
          </div>
          <div className="inputbox">
            <label>Mailadress:</label>
            <input type="text" name="mail" required />
          </div>
        </div>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? <div className="spinner"></div> : "Få prisförslag"}
      </button>
    </form>
  );
};

export default Form;
