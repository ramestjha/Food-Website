import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer_content">
        <div className="footer_content_left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus fugiat itaque maiores deleniti dolores eveniet sequi
            reiciendis ad quis!
          </p>
          <div className="footer_socical_icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer_content_center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Polices</li>
          </ul>
        </div>
        <div className="footer_content_right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7632966717</li>
            <li>rnjha339@gmail.com </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer_copyright">
        Copyright 2024 c Tomato.com - All rights are reserved
      </p>
    </div>
  );
};

export default Footer;
