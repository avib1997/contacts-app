// ContactNewButton.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faRandom } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import "../styles/Contact.css";

function ContactNewButton() {
  const history = useHistory();

  const handleAddContact = () => {
    history.push("/contacts/new");
  };

  return (
    <div className="contact-new">
      <button onClick={handleAddContact}>
        <FontAwesomeIcon icon={faUserPlus} />
      </button>
      <button style={{ marginLeft: "15px" }}>
        <FontAwesomeIcon icon={faRandom} />
      </button>
    </div>
  );
}

export default ContactNewButton;
