import React from "react";
import { useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  if (useLocation().pathname == "/login") {
    return null;
  }

  return (
    <div>
      <footer>
        <div className="socialmedia-icons">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
        </div>
        <div className="copyright">
          <FaRegCopyright /> <p>copyrighted at 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
