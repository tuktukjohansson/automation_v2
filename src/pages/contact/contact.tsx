import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Popup from "../../components/popup/popup.tsx";

// Components
import Container from "../../components/container/container.tsx";

// Images
import blob3 from "../../images/components/blob3.png";
import blob4 from "../../images/components/blob4.png";
import "./contact.scss";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const { t } = useTranslation();
  const form = useRef();
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const sendEmail = e => {
    e.preventDefault();
    const email = form.current.user_email.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setLoading(true);

    emailjs
      .sendForm("service_rstpq89", "template_bonczzb", form.current, {
        publicKey: "h62aOe4zowAuSMPFz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true);
          setLoading(false);
        },
        error => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="contactpage">
      {/* ----------------------------- Container ----------------------------- */}
      <Container>
        <div className="blobcontainer">
          <img className="blob3" src={blob3} />
          <img className="blob4" src={blob4} />
        </div>
        <div className="flex-container">
          <Popup show={showPopup} onClose={togglePopup}>
            <h2>{t("contact.popup.title")}</h2>
            <p>{t("contact.popup.description")}</p>
          </Popup>
          <div className="text-container">
            <h1>{t("contact.title")}</h1>
            <p>{t("contact.description")}</p>
          </div>
          <div className="contactform">
            <form ref={form} onSubmit={sendEmail}>
              <div className="inputgroup">
                <label>{t("contact.form.name")}</label>
                <input type="text" name="user_name" required />
              </div>
              <div className="inputgroup">
                <label>{t("contact.form.email")}</label>
                <input type="email" name="user_email" required />
                {emailError && <p className="error">{emailError}</p>}
              </div>
              <div className="inputgroup">
                <label>{t("contact.form.message")}</label>
                <textarea name="message" />
              </div>
              <div className="sendbutton">
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <div className="spinner"></div>
                  ) : (
                    t("components.buttons.send")
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
