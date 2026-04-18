// OfferBanner.jsx
import React, { useState, useEffect } from "react";
import "../css/Offerbanner.css"

// ── Import your banner images here ──────────────────────────
// import banner1 from "./assets/banners/flat-40-banner.png";
// import banner2 from "./assets/banners/flat-25-banner.png";

const BANNERS = [
  {
    id: 1,
    // IMAGE 1: Flat 40% OFF banner — lipstick, serum, shampoo, sunscreen on light blue bg
    // Replace placeholder with: <img src={banner1} alt="Flat 40% Off" className="offer-banner__img" />
    headline: "FLAT 40% OFF",
    subline: "ON ₹1199+",
    code: "FLAT40",
    note: "Applicable On All Single Products",
  },
  {
    id: 2,
    // IMAGE 2: Flat 25% OFF banner — shampoo, sunscreen on light blue bg
    // Replace placeholder with: <img src={banner2} alt="Flat 25% Off" className="offer-banner__img" />
    headline: "FLAT 25% OFF",
    subline: "ON ₹699+",
    code: "FLAT25",
    note: "Applicable On All Single Products",
  },
];

const OfferBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % BANNERS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const banner = BANNERS[current];

  return (
    <div className="offer-banner">

      {/* Left: product image */}
      <div className="offer-banner__img-area">
        {/* ── REPLACE THIS DIV WITH YOUR <img> TAG ──
            {current === 0
              ? <img src={banner1} alt="Flat 40% Off" className="offer-banner__img" />
              : <img src={banner2} alt="Flat 25% Off" className="offer-banner__img" />
            }
        */}
        <div className="offer-banner__img-placeholder">
          Banner image {current + 1} goes here
        </div>
      </div>

      {/* Right: text content */}
      <div className="offer-banner__content">
        <h2 className="offer-banner__headline">{banner.headline}</h2>
        <p className="offer-banner__subline">{banner.subline}</p>

        <div className="offer-banner__code-row">
          <span className="offer-banner__code-label">USE CODE:</span>
          <span className="offer-banner__code-value">{banner.code}</span>
        </div>

        <a href="/collections/all" className="offer-banner__cta">
          SHOP NOW &gt;&gt;
        </a>

        <p className="offer-banner__note">{banner.note}</p>
      </div>

      {/* Dot indicators */}
      <div className="offer-banner__dots">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            className={`offer-banner__dot ${i === current ? "offer-banner__dot--active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Banner ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;