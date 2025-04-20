import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h4>Hello This is a Footer Section</h4>
        <nav className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact" target="_blank">
            Contact
          </a>
        </nav>
      </div>
      <p>Gathendi, Copyright 2025</p>
    </footer>
  );
}

export default Footer;
