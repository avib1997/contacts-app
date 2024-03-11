import React from "react";

function ContactNewButton() {
  return (
    <div className="contact-new">
      <button>
        <i className="fa fa-user-plus" aria-hidden="true"></i>
      </button>
      <button>
        <i
          className="fa fa-random"
          aria-hidden="true"
          style={{ marginLeft: "15px" }}
        ></i>
      </button>
    </div>
  );
}

export default ContactNewButton;
