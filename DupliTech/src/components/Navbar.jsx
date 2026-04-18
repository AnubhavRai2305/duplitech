import React, { useState } from "react";
import "../css/nav.css";

const NAV_ITEMS = [
  {
    label: "Best sellers",
    dropdown: [
      "Hair Growth Serum",
      "Vitamin C Serum",
      "Niacinamide Serum",
    ],
  },
  {
    label: "Skin Care",
    dropdown: [
      "Moisturizers",
      "Face Wash",
      "Serums",
      "Sunscreens",
    ],
  },
  {
    label: "Hair Care",
    dropdown: [
      "Shampoos",
      "Conditioners",
      "Hair Oils",
      "Hair Masks",
    ],
  },
  {
    label: "Makeup",
    dropdown: [
      "Foundation",
      "Lipstick",
      "Eyeliner",
      "Compact",
    ],
  },
  {
    label: "Kits & Combos",
    dropdown: [
      "Skin Kits",
      "Hair Kits",
      "Combo Packs",
    ],
  },
  {
    label: "Collections",
    dropdown: [
      "Korean Range",
      "Ayurvedic Range",
      "Luxury Range",
    ],
  },
  {
    label: "Fragrances",
    dropdown: [
      "Perfumes",
      "Body Mist",
      "Roll-ons",
    ],
  },
  {
    label: "Gifting",
    dropdown: [
      "Gift Boxes",
      "Under ₹999",
      "Premium Gifts",
    ],
  },
  {
    label: "More",
    dropdown: [
      "About Us",
      "Blog",
      "Contact",
    ],
  },
];

// ✅ Logo you provided
const LOGO =
  "https://discoverpilgrim.com/cdn/shop/files/Pilgrim-New-Logo-Without-Tagline_a9de71c3-9c1c-4a33-b4eb-95830dab01db.png?v=1750912299&width=280";

// ── SVG Icons ──────────────────────────────────────────────
const SearchIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="22" y2="22" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="1" y="7" width="15" height="11" rx="1" />
    <path d="M16 10h4l3 4v4h-7V10z" />
    <circle cx="5.5" cy="18.5" r="1.5" />
    <circle cx="18.5" cy="18.5" r="1.5" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

// ── Component ──────────────────────────────────────────────
const Navbar = () => {
  const [cartCount] = useState(0);

  return (
    <nav className="navbar">
      {/* ✅ LOGO FIXED */}
      <a href="/" className="navbar__logo" aria-label="Pilgrim Home">
        <img src={LOGO} alt="Pilgrim" className="navbar__logo-img" />
      </a>

      {/* Center Nav Links */}
      <ul className="navbar__links">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a href={`/${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
              {item.label}
            </a>

            {item.dropdown.length > 0 && (
              <div className="navbar__dropdown">
                <ul>
                  {item.dropdown.map((product) => (
                    <li key={product}>
                      <a
                        href={`/products/${product
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {product}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="navbar__icons">
        <button className="navbar__icon-btn" aria-label="Search">
          <SearchIcon />
        </button>

        <button className="navbar__icon-btn" aria-label="My Account">
          <UserIcon />
        </button>

        <button
          className="navbar__icon-btn navbar__track-btn"
          aria-label="Track Order"
        >
          <TruckIcon />
        </button>

        <div className="navbar__cart-wrapper">
          <button className="navbar__icon-btn" aria-label="Cart">
            <CartIcon />
          </button>
          <span className="navbar__cart-badge">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;