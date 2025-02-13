import React from "react";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <footer className="footer main-content">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-branding">
          <h1 style={{ color: "cyan" }}>Cornerstone Vision</h1>
          <p>Bringing Top Brands to Your Fingertips – Shop the Best, Anytime, Anywhere!</p>
        </div>

        {/* Footer Links Container */}
        <div className="footer-links">
          {/* Column: What we do */}
          <div>
            <h3>What we do</h3>
            <ul>
              <li>
                <a href="/cloud-modernisation">Wholesale and Distribution</a>
              </li>
              <li>
                <a href="/data-analytics">Online Marketplaces</a>
              </li>
              <li>
                <a href="/location-intelligence">Retail Partnerships</a>
              </li>
            </ul>
          </div>
            <div>
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a href="mailto:info@cornerstonevision.com" style={{ color: "#fff", textDecoration: "none" }}>
                    E: info@cornerstonevision.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/00447480940409" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
                    <img src="/whatsapp_logo.png" alt="" style={{ width: "24px", height: "24px", verticalAlign: "middle" }} /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                    <img src="/Instagram_logo_2022.svg.png" alt="" style={{ width: "24px", height: "24px", verticalAlign: "middle" }} /> Instagram
                  </a>
                </li>
              </ul>
            </div>
          {/* Column: Who we are */}
          <div>
            <ul>
              <li>
              <a href="https://find-and-update.company-information.service.gov.uk/company/16155793" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>
                  <img src="/CompaniesHouse.png" alt="" style={{ width: "50px", height: "50px", verticalAlign: "middle", color: "white" }} />Companies House
                </a>
              </li>
              <li>
                <h6>Registered Addres:<br />
                  111 New Union Street, Coventry, United Kingdom, CV1 2NT</h6>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Cornerstone Vision Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;