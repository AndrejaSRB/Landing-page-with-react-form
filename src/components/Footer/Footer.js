import React from "react";
import { ReactComponent as EmailIconSvg } from '../../assets/email-icon.svg';
// import EmailIconSvg from '../../assets/email-icon.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <ul>
        <li>
          <a href="https://www.greensettlements.com/">Quastion/FAQ </a>
        </li>
        <li>
          <a href="https://www.greensettlements.com/">Privacy Policy</a>
        </li>
        <li>
          <a href="https://www.greensettlements.com/">Terms of Service</a>
        </li>
        <li>
          <a href="https://www.greensettlements.com/">Blog</a>
        </li>
        <li>
          <a href="https://www.greensettlements.com/">Contact Us</a>
        </li>
      </ul>
      <p>Copyright ©2019 GreenSettlements. All rights reserved.</p>
    </div>
    <div className="footer-contact-us">
        <EmailIconSvg />
        {/* <img src={EmailIconSvg}/> */}
        <div>Contact us!</div>
      </div>
  </footer>
);

export default Footer;
