import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./form.scss";

import Container from "../../components/container/container.tsx";

const Form = () => {
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
          setLoading(false);
        },
        error => {
          console.log("Mail did not send", error.text);
          setLoading(false);
        }
      );
  };
  return (
    <div className="form">
      <div className="titlecontainer">
        <div className="title">Få ett prisförslag för din process!</div>
      </div>

      <div className="inputwrapper">
        <div className="inputboxes">
          <div className="inputbox">
            <label>Typ av process:</label>
            <input type="text" name="category" required />
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
      {/* <form ref={form} onSubmit={sendEmail2}>
        <div className="flexrow">
          <div className="inputgroup">
            <label>Category</label>
            <input type="text" name="category" required />
          </div>
          <div className="inputgroup">
            <label>Antal FTE</label>
            <input type="text" name="fte" required />
          </div>
          <div className="inputgroup">
            <label>Antal orderrader per dag</label>
            <input type="text" name="amount_rows" required />
          </div>
        </div>
        <div className="flexrow">
          <div className="inputgroup">
            <label>Affärssystem</label>
            <input type="text" name="system" required />
          </div>
          <div className="inputgroup">
            <label>Ordrar i månaden</label>
            <input type="text" name="amount_orders" required />
          </div>
          <div className="inputgroup">
            <label>Mail</label>
            <input type="text" name="mail" required />
          </div>
        </div> */}
      {/* <div className="sendbutton"></div> */}
      {/* <button type="submit" disabled={loading}>
          {loading ? <div className="spinner"></div> : "Send"}
        </button> */}
      {/* </form> */}
    </div>
  );
};

export default Form;
