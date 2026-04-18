// LookingFor.jsx
import React, { useRef, useState } from "react";
import "../css/LookingFor.css";

// Import your circle images:
// import hydrated from "./assets/looking/hydrated-skin.png";
// import voluminous from "./assets/looking/voluminous-hair.png";
// import youthful from "./assets/looking/youthful-radiance.png";
// import shinyHair from "./assets/looking/healthy-shiny-hair.png";
// import everydayGlow from "./assets/looking/everyday-glow.png";
// import glamorous from "./assets/looking/glamorous-look.png";

const GOALS = [
  { id: 1, label: "Hydrated Skin",      /* img: hydrated */     bg: "#f5a623" },
  { id: 2, label: "Voluminous Hair",    /* img: voluminous */   bg: "#2d6a4f" },
  { id: 3, label: "Youthful Radiance",  /* img: youthful */     bg: "#f48fb1" },
  { id: 4, label: "Healthy, Shiny Hair",/* img: shinyHair */    bg: "#29b6c8" },
  { id: 5, label: "Everyday Glow",      /* img: everydayGlow */ bg: "#5bb8c9" },
  { id: 6, label: "Glamorous Look",     /* img: glamorous */    bg: "#b71c1c" },
];

const summerImage = "https://discoverpilgrim.com/cdn/shop/files/1.5_30682f78-3546-4854-821a-accb39044946.jpg?v=1770978974&width=1080";

const SUMMER_PRODUCTS = [
  { id: 1, badge: "Up To 40% OFF", img: summerImage, tag: "NEW LAUNCH", name: "5% Vitamin C Brightening Serum Sunscreen SPF 50+", tagline: "Protects from Sun Damage & Tanning", size: "50ml", rating: 4.8, price: "₹495" },
  { id: 2, badge: "Up To 40% OFF", img: summerImage, tag: "NEW LAUNCH", name: "5% Niacinamide Hydra Glow Gel Sunscreen SPF 50+", tagline: "Delivers Hydrated Glow", size: "50ml", rating: 4.7, price: "₹495" },
  { id: 3, badge: "Up To 40% OFF", img: summerImage, tag: "IN-VIVO TESTED", name: "Korean Cooling Fluid Sunscreen SPF 50+", tagline: "-5° C Cooling Sensation", size: "50ml", rating: 4.4, price: "₹495" },
  { id: 4, badge: "Up To 40% OFF", img: summerImage, tag: "#4 IN SUNSCREEN", name: "Korean Tinted Sunscreen SPF 50+", tagline: "Natural, Radiant Finish", size: "50ml", rating: 4.7, price: "₹495" },
];

const StarRating = ({ val }) => (
  <span className="lf-stars">
    {[1,2,3,4,5].map(i => <span key={i} className={i <= Math.round(val) ? "lf-star filled" : "lf-star"}>★</span>)}
    <span className="lf-rating-val">{val}</span>
  </span>
);

const LookingFor = () => {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section className="lf">
      {/* ── What Are You Looking For ── */}
      <h2 className="lf__title">What Are You Looking For Today?</h2>

      <div className="lf__goals-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && <button className="lf__arrow lf__arrow--left" onClick={() => scroll("left")}>&#8592;</button>}
        <div className="lf__goals" ref={scrollRef}>
          {GOALS.map(g => (
            <a key={g.id} href={`/collections/${g.label.toLowerCase().replace(/[\s,]+/g,"-")}`} className="lf__goal">
              {/* Replace div with: <img src={g.img} alt={g.label} className="lf__goal-img" /> */}
              <div className="lf__goal-circle" style={{ background: g.bg }}>
                <span className="lf__goal-placeholder">{g.label[0]}</span>
              </div>
              <p className="lf__goal-label">{g.label}</p>
            </a>
          ))}
        </div>
        {hovered && <button className="lf__arrow lf__arrow--right" onClick={() => scroll("right")}>&#8594;</button>}
      </div>

      {/* ── Summer Must-Haves ── */}
      <div className="lf__section-header">
        <div>
          <h3 className="lf__section-title">Summer Must-Haves</h3>
          <p className="lf__section-sub">Glow All Summer</p>
        </div>
        <a href="/collections/summer" className="lf__view-all">View All</a>
      </div>

      <div className="lf__products">
        {SUMMER_PRODUCTS.map(p => (
          <div key={p.id} className="lf__product-card">
            <div className="lf__product-badge">{p.badge}</div>
            
            {p.img ? (
              <img src={p.img} className="lf__product-img" alt={p.name} />
            ) : (
              <div className="lf__product-img-placeholder" />
            )}

            <div className="lf__product-rating-row">
              <StarRating val={p.rating} /> <span className="lf__star-icon">★</span>
            </div>
            <div className="lf__product-body">
              <p className="lf__product-tag">{p.tag}</p>
              <h4 className="lf__product-name">{p.name}</h4>
              <p className="lf__product-tagline">{p.tagline}</p>
              <p className="lf__product-size">{p.size}</p>
              <p className="lf__product-price">{p.price}</p>
            </div>
            <button className="lf__product-cta">Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LookingFor;