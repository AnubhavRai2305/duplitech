// MakeupFestBanner.jsx
import React from "react";
import "../css/Makeupfestbanner.css"

// IMAGE: Makeup Fest full-width banner image (pink/purple bg with blush, foundation, lipstick)
// import makeupFestImg from "./assets/banners/makeup-fest.png";

const MakeupFestBanner = () => (
  <div className="mkfest-banner">
    {/* Replace div below with: <img src={makeupFestImg} alt="Pilgrim Makeup Fest" className="mkfest-banner__img" /> */}
    <div className="mkfest-banner__placeholder">
      <div className="mkfest-banner__content">
        <p className="mkfest-banner__brand">&#10022; pilgrim&#174;</p>
        <h2 className="mkfest-banner__title">Makeup <span className="mkfest-banner__fest">FEST</span></h2>
        <p className="mkfest-banner__sub">Good looks, Great Deals, Infinite Reasons To Shop!</p>
        <p className="mkfest-banner__deal"><strong>Up To 70% OFF, Flash Deals &amp; a lot more!</strong></p>
        <a href="/collections/makeup" className="mkfest-banner__cta">SHOP NOW &gt;&gt;</a>
      </div>
    </div>
  </div>
);

export default MakeupFestBanner;