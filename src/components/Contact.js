import React from "react";
import "../styles/Contact.css"; // Import the Contact component styles
import ContactAvatar from "./ContactAvatar"; // Import the ContactAvatar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faTimes } from "@fortawesome/free-solid-svg-icons"; // Corrected import for the phone and times icons

function Contact({ id, name, phone, avatarNumber, onDelete }) {
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
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => onDelete(id)} // Call onDelete function with contact ID
          style={{ cursor: "pointer" }} // Add cursor pointer style
        />
        {/* Use the FontAwesomeIcon component */}
      </div>
    </div>
  );
}

export default Contact;
