import React from "react";
import "../styles/Contact.css";
import avatar1 from "../images/avatar_1.jpg";
import avatar2 from "../images/avatar_2.jpg";
import avatar3 from "../images/avatar_3.jpg";

function ContactAvatar({ avatarNumber }) {
  // Define the image paths based on the avatarNumber
  let avatarImagePath;
  switch (avatarNumber) {
    case 1:
      avatarImagePath = avatar1;
      break;
    case 2:
      avatarImagePath = avatar2;
      break;
    case 3:
      avatarImagePath = avatar3;
      break;
    default:
      // If avatarNumber is not 1, 2, or 3, set a default image path
      avatarImagePath = avatar1; // or any other default image
      break;
  }

  return (
    <div className="contact-avatar">
      {/* Use the imported image */}
      <img src={avatarImagePath} alt={`Avatar ${avatarNumber}`} />
    </div>
  );
}

export default ContactAvatar;
