import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="contact">
        <h2>Nous contacter</h2>
        <ul>
          <li>
            <FaFacebookSquare className="icon"/>
          </li>
          <li>
            <FaLinkedin className="icon" />
          </li>
          <li>
            <FaTwitterSquare className="icon" />
          </li>
          <li>
            <FaWhatsappSquare className="icon" />
          </li>
        </ul>
      </div>
      <div className="categorie">
        <h2>Categorie</h2>
        <ul>
          <li>Developpement Web et Web Mobile</li>
          <li>Marketing Digital</li>
        </ul>
      </div>
      <div className="apropos">
        <h2>A propos</h2>
        <ul>
          <li>Kinshasa Digital</li>
          <li>Concepteurs</li>
        </ul>
      </div>
      <div className="inscrire">
        <h2>A propos</h2>
        <ul>
          <li>Kinshasa Digital Academie</li>
          <li>Concepteurs</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
