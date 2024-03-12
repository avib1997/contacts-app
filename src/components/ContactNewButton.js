import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faRandom } from "@fortawesome/free-solid-svg-icons"; // Import the desired icons
import "../styles/Contact.css"; // Import the Contact component styles

function ContactNewButton() {
  return (
    <div className="contact-new">
      <button>
        <FontAwesomeIcon icon={faUserPlus} />{" "}
        {/* Use FontAwesomeIcon component for the user plus icon */}
      </button>
      <button style={{ marginLeft: "15px" }}>
        <FontAwesomeIcon icon={faRandom} />{" "}
        {/* Use FontAwesomeIcon component for the random icon */}
      </button>
    </div>
  );
}

export default ContactNewButton;
