// AddContact.js

import React from "react";
import "../styles/AddContact.css";

function AddContact() {
  return (
    <div className="contact-container">
      <div className="new-contact-container">
        <div className="new-contact-avatar">
          <img
            src="https://randomuser.me/api/portraits/men/81.jpg"
            alt="Avatar"
          />
          <button>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
        <div className="new-contact-inputs">
          <div className="new-contact-input">
            <label>Name</label>
            <input />
          </div>
          <div className="new-contact-input">
            <label>Phone</label>
            <input />
          </div>
          <div className="new-contact-input">
            <label>Title</label>
            <input />
          </div>
        </div>
        <div className="new-contact-buttons">
          <button className="button-ok">Save</button>
          <button className="button-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddContact;
