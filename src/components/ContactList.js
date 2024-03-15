import React, { useState } from "react";
import { connect } from "react-redux";
import Contact from "./Contact";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ContactList({ contacts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    // Dispatch action to delete contact
    // Example: dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      <div className="contacts-container">
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            phone={contact.phone}
            avatarNumber={contact.avatarNumber}
            onDelete={() => handleDelete(contact.id)}
            id={contact.id}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(ContactList);
