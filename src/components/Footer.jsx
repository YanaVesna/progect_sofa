import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__box">
        <ul>
          <li>
            <span>Company</span>
          </li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>
            <span>Support</span>
          </li>

          <li>Help Center</li>
          <li>Safety Center</li>
          <li>Community Guidelines</li>
        </ul>
        <ul>
          <li>
            <span>Legal</span>
          </li>

          <li>Cookies Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
        <ul>
          <li>
            <span>Install App</span>
          </li>
          <li>
            <img
              src="https://i.ibb.co/YykdLyx/Google-Play-Badge.png"
              alt="Google Play Badge"
            />
          </li>
          <li>
            <img
              src="https://i.ibb.co/kcqpXmy/App-Store-Badge.png"
              alt="Google Play Badge"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
