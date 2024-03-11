import React from "react";
import ContactAvatar from "./ContactAvatar"; // Import the ContactAvatar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons"; // Corrected import for the phone and times icons
import "../styles/Contact.css";

function Contact({ name, phone, avatarNumber }) {
  // Make sure to accept avatarNumber as a prop
  return (
    <div className="contact">
      <div className="contact-avatar">
        <ContactAvatar avatarNumber={avatarNumber} />
      </div>

      <div className="contact-details">
        <div className="contact-name">{name}</div>
        <div className="contact-phone">{phone}</div>
      </div>
      <div className="contact-buttons">
        <button>
          <FontAwesomeIcon icon={faPhone} />{" "}
          {/* Use the FontAwesomeIcon component */}
        </button>
      </div>
      <div className="contact-button-close">
        <FontAwesomeIcon icon={faTimes} />{" "}
        {/* Use the FontAwesomeIcon component */}
      </div>
    </div>
  );
}

export default Contact;
