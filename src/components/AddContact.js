import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addContact } from "../redux/actions";
import "../styles/AddContact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

function AddContact({ addContact }) {
  const history = useHistory();
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Dispatch the addContact action to update the Redux store
    addContact(contactData);

    // After saving, navigate back to the main page
    history.push("/");
  };

  const handleCancel = () => {
    // Navigate back to the main page
    history.push("/");
  };

  return (
    <div className="contact-container">
      <div className="new-contact-container">
        <div className="new-contact-avatar">
          <img
            src="https://randomuser.me/api/portraits/men/81.jpg"
            alt="Avatar"
          />
          <button style={{ marginLeft: "15px" }}>
            <FontAwesomeIcon icon={faSync} />{" "}
            {/* Use FontAwesomeIcon for the refresh icon */}
          </button>
        </div>
        <div className="new-contact-inputs">
          <div className="new-contact-input">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={contactData.name}
              onChange={handleChange}
            />
          </div>
          <div className="new-contact-input">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={contactData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="new-contact-input">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={contactData.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="new-contact-buttons">
          <button className="button-ok" onClick={handleSave}>
            Save
          </button>
          <button className="button-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addContact })(AddContact);
