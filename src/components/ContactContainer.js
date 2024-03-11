import React from "react";
import SearchInput from "./SearchInput";
import ContactList from "./ContactList";
import ContactNewButton from "./ContactNewButton";

function ContactContainer() {
  return (
    <div className="contact-container">
      <SearchInput />
      <ContactList />
      <ContactNewButton />
    </div>
  );
}

export default ContactContainer;
