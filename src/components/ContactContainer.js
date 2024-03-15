import React from "react";
import ContactList from "./ContactList";
import ContactNewButton from "./ContactNewButton";

function ContactContainer() {
  return (
    <div className="contact-container">
      <ContactList />
      <ContactNewButton />
    </div>
  );
}

export default ContactContainer;
