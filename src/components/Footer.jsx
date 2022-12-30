import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer__legend">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/alan-yeverino-1b160754/"
          target="_blank"
          rel="noreferrer"
        >
          Alan Yeverino
        </a>
      </h3>
    </div>
  );
};

export default Footer;
