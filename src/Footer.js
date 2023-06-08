import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      {length} List {length === 1 ? "Event" : "Event"}
    </footer>
  );
};

export default Footer;
