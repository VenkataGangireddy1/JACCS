import React from "react";
import "./Contact.css";
import GoogleMap from "./GoogleMap";
import JACCS from '../../assets/JACCS.jpeg'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  const mapLink =
    "https://www.google.com/maps/place/500+Lewis+St+Downingtown+PA+19335";
  const placeQuery = '500 Lewis St, Downingtown, PA 19335';
  const placeLabel = 'JACCS Cleaning Services — Downingtown';

  const formatUSPhone = (raw) => {
    if (!raw) return { display: "", href: "" };
    const digits = raw.replace(/\D/g, "");
    let country = "";
    let core = digits;
    if (digits.length === 11 && digits[0] === "1") {
      country = "1";
      core = digits.slice(1);
    } else if (digits.length === 10) {
      country = "1";
    }
    const area = core.slice(0, 3);
    const prefix = core.slice(3, 6);
    const line = core.slice(6, 10);
    const display =
      core.length >= 10 ? `(${area}) ${prefix}-${line}` : raw;
    const href = (country ? `+${country}` : "") + core;
    return { display, href };
  };

  const rawPhone = "+11111111111";
  const phone = formatUSPhone(rawPhone);

  return (
    <section className="contact-container">
      <div className="contact-col contact-col-logo">
        <img src={JACCS} alt="JACCS Cleaners Logo" className="contact-logo" />
      </div>

      <div className="contact-col contact-col-info">
        <h2>Contact Us</h2>
        <p className="contact-blurb">
          Serving Downingtown and surrounding areas with reliable, professional
          cleaning services.
        </p>

        <div className="contact-card">
          <span className="icon">📍</span>
          <div>
            <strong>500 Lewis St</strong>
            <div>Downingtown, PA 19335</div>
          </div>
        </div>

        <div className="contact-card">
          <span className="icon">📞</span>
          <a href={`tel:${phone.href}`}>{phone.display}</a>
        </div>

        <div className="contact-card">
          <span className="icon">✉️</span>
          <a href="mailto:info@jaccs-cleaners.com">info@jaccs-cleaners.com</a>
        </div>
      </div>

      <div className="contact-col contact-col-socials">
        <h3>Social Media</h3>
        <div className="contact-socials">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className="contact-col contact-col-map">
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          <GoogleMap placeQuery={placeQuery} label={placeLabel} />
        </a>
      </div>
    </section>
  );
}






