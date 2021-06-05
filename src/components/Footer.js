import React from "react";
import "./Footer.css";
import LinkedInBlack from "../icons/LinkedIn-Wordmark-Black.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={LinkedInBlack} alt="LinkedIn" />
      <a href="/">About</a>
      <a href="/">Accessibility</a>
      <a href="/">User Agreement</a>
      <a href="/">Privacy Policy</a>
      <a href="/">Cookie Policy</a>
      <a href="/">Copyright Policy</a>
      <a href="/">Brand Policy</a>
      <a href="/">Guest Controls</a>
      <a href="/">Community Guidelines</a>
      <a href="/">Language</a>
    </div>
  );
}

export default Footer;
