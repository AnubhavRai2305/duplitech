// HeroBanner.jsx
import React from "react";
import "../css/herobanner.css"

// Uncomment and import your product image when ready:
// import productImg from "./assets/vitamin-c-sunscreen.png";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      {/* Light ray decorative elements */}
      <div className="hero-banner__rays" aria-hidden="true" />
      <div className="hero-banner__ray-extra" aria-hidden="true" />

      {/* Lens / bubble circle */}
      <div className="hero-banner__bubble" aria-hidden="true" />

      {/* Left content */}
      <div className="hero-banner__content">
        <span className="hero-banner__badge">New Launch</span>

        <p className="hero-banner__subtitle">
          India's <strong>#1<sup>st</sup></strong>
        </p>

        <h1 className="hero-banner__title">Vitamin C Serum Sunscreen</h1>

        <p className="hero-banner__features">
          Stronger Safer <strong>SPF 50+ PA++++</strong>&nbsp;&nbsp;|&nbsp;&nbsp;
          <strong>Triple Glow+++</strong>&nbsp;&nbsp;|&nbsp;&nbsp;
          <strong>In-Vivo Tested</strong>
        </p>

        <a href="/products/vitamin-c-serum-sunscreen" className="hero-banner__cta">
          Shop Now &gt;&gt;
        </a>
      </div>

      {/* NEW GEN UV FILTERS label — sits over the bubble */}
      <div className="hero-banner__gen-label" aria-hidden="true">
        <span className="gen-new">NEW</span>
        <span className="gen-gen">GEN</span>
        <span className="gen-uv">UV</span>
        <span className="gen-filters">FILTERS</span>
      </div>

      {/* Product image — right side */}
      <div className="hero-banner__product">
        {/*
          Replace the placeholder below with your actual image:
          <img
            src={productImg}
            alt="Pilgrim Vitamin C Brightening Serum Sunscreen SPF 50+"
            className="hero-banner__product-img"
          />
        */}
        <div className="hero-banner__product-placeholder">
          Product image<br />goes here
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;