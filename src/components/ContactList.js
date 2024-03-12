import React, { useState } from "react";
import Contact from "./Contact";
import "../styles/Contact.css";
import "../styles/SearchInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ContactList() {
  // Sample contacts data
  const [contacts, setContacts] = useState([
    { id: 1, name: "Dan Smith", phone: "(123) 745-526657", avatarNumber: 1 },
    {
      id: 2,
      name: "Alex Alvarez",
      phone: "(123) 542-5634271",
      avatarNumber: 2,
    },
    { id: 3, name: "Norman Dirtic", phone: "(724) 124-88573", avatarNumber: 3 },
  ]);

  // State variable for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle contact deletion
  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Function to handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter contacts based on search term
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Single search bar */}
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Display filtered contacts */}
      <div className="contacts-container">
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            phone={contact.phone}
            avatarNumber={contact.avatarNumber}
            onDelete={handleDelete}
            id={contact.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
