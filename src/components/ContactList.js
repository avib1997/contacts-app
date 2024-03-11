import React from "react";
import Contact from "./Contact";
import "../styles/Contact.css";

function ContactList() {
  // Sample contacts data
  const contacts = [
    { name: "John Doe", phone: "123-456-7890", avatarNumber: 1 },
    { name: "Jane Smith", phone: "987-654-3210", avatarNumber: 2 },
    { name: "Alice Johnson", phone: "555-555-5555", avatarNumber: 3 },
  ];

  return (
    <div className="contacts-container">
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          name={contact.name}
          phone={contact.phone}
          avatarNumber={contact.avatarNumber}
        />
      ))}
    </div>
  );
}

export default ContactList;
