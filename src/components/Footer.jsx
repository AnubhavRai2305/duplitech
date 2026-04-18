// Footer.jsx
import React from "react";
import "../css/Footer.css"

const Footer = () => (
  <footer className="footer">
    {/* Scrolling ticker */}
    <div className="footer__ticker">
      <div className="footer__ticker-track">
        {Array(6).fill("DISCOVER WORLD'S BEST BEAUTY SECRETS").map((t,i) => (
          <span key={i}>{t} &nbsp;•&nbsp; </span>
        ))}
      </div>
    </div>

    {/* Main footer content */}
    <div className="footer__main">
      <div className="footer__col">
        <h4 className="footer__heading">INFORMATION</h4>
        <ul className="footer__list">
          {["Track your order","About Us","Contact Us","FAQ","Careers","Corporate Gifting","Store Locator"].map(l => (
            <li key={l}><a href="#" className="footer__link">{l}</a></li>
          ))}
        </ul>
      </div>

      <div className="footer__col">
        <h4 className="footer__heading">IMPORTANT LINKS</h4>
        <ul className="footer__list">
          <li><a href="#" className="footer__link">Shipping &amp; Returns</a></li>
          <li><a href="#" className="footer__link">Terms &amp; Conditions</a></li>
          <li><a href="#" className="footer__link">Privacy Policy</a></li>
          <li><a href="#" className="footer__link">Refund Policy</a></li>
          <li>
            <a href="#" className="footer__link">Download App </a>
            <span className="footer__exclusive">EXCLUSIVE PERKS</span>
          </li>
          <li><a href="#" className="footer__link">Blogs</a></li>
          <li><a href="#" className="footer__link">Customer Love</a></li>
          <li><a href="#" className="footer__link">Pilgrim T-shirts</a></li>
        </ul>
      </div>

      <div className="footer__col">
        <h4 className="footer__heading">YOU'LL LOVE US HERE</h4>
        <div className="footer__socials">
          {/* Facebook */}
          <a href="#" className="footer__social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" className="footer__social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
          {/* YouTube */}
          <a href="#" className="footer__social-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="footer__social-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
    </div>

    {/* Sticky bottom bar */}
    <div className="footer__sticky-bar">
      <p>Buy Products Worth ₹699 or more to get Flat 25% OFF on your order</p>
      <button className="footer__sticky-close">&#8963;</button>
    </div>
  </footer>
);

export default Footer;