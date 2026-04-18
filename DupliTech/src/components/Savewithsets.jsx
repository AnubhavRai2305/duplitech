import React, { useState, useRef } from "react";
import "../css/Savewithsets.css";

const TABS = ["Bestsellers", "Skin Care", "Hair Care"];

// ✅ Single image used everywhere
const COMMON_IMAGE =
  "https://discoverpilgrim.com/cdn/shop/files/1_6aa30e3b-d777-4174-a76e-d5b399431966.jpg?v=1773124513&width=1080";

const SETS = {
  Bestsellers: [
    { id:1, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Patuá Haircare Combo", tagline:"10X Smoother Hair In 1 Wash", stars:5, reviews:10, units:"3 Units", price:"₹906", original:"₹1,295", discount:"30% OFF" },
    { id:2, badge:"FLAT30%OFF", soldOut:true, tag:"PRICE DROP", name:"Vitamin C Glow Power Duo", tagline:"Glowing, Brighter Skin in 5 Days", stars:5, reviews:166, units:"2 Units", price:"₹626", original:"₹895", discount:"30% OFF" },
    { id:3, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Sulphate Free Shampoo & Argan Oil Hair Mask", tagline:"Promotes Growth", stars:5, reviews:10, units:"2 Units", price:"₹696", original:"₹995", discount:"30% OFF" },
    { id:4, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"The 24k Gold Glow Combo", tagline:"Enhances Natural Glow", stars:4, reviews:8, units:"2 Units", price:"₹763", original:"₹1,090", discount:"30% OFF" },
  ],
  "Skin Care": [
    { id:1, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Vitamin C Glow Power Duo", tagline:"Glowing, Brighter Skin in 5 Days", stars:5, reviews:166, units:"2 Units", price:"₹626", original:"₹895", discount:"30% OFF" },
    { id:2, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"The 24k Gold Glow Combo", tagline:"Enhances Natural Glow", stars:4, reviews:8, units:"2 Units", price:"₹763", original:"₹1,090", discount:"30% OFF" },
    { id:3, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Niacinamide Skin Duo", tagline:"Minimises Pores & Controls Oil", stars:4, reviews:55, units:"2 Units", price:"₹549", original:"₹785", discount:"30% OFF" },
    { id:4, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Sunscreen Starter Kit", tagline:"Complete Sun Protection", stars:5, reviews:32, units:"3 Units", price:"₹899", original:"₹1,285", discount:"30% OFF" },
  ],
  "Hair Care": [
    { id:1, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Patuá Haircare Combo", tagline:"10X Smoother Hair In 1 Wash", stars:5, reviews:10, units:"3 Units", price:"₹906", original:"₹1,295", discount:"30% OFF" },
    { id:2, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Sulphate Free Shampoo & Argan Oil Hair Mask", tagline:"Promotes Growth", stars:5, reviews:10, units:"2 Units", price:"₹696", original:"₹995", discount:"30% OFF" },
    { id:3, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Hair Growth Serum Duo", tagline:"New Hair Growth in 28 Days", stars:4, reviews:78, units:"2 Units", price:"₹849", original:"₹1,213", discount:"30% OFF" },
    { id:4, badge:"FLAT30%OFF", tag:"PRICE DROP", name:"Scalp Care Combo", tagline:"Soothes & Nourishes Scalp", stars:4, reviews:24, units:"2 Units", price:"₹599", original:"₹856", discount:"30% OFF" },
  ],
};

const StarRating = ({ count }) => (
  <span className="sws-stars">
    {[1,2,3,4,5].map(i => (
      <span key={i} className={i <= count ? "sws-star filled" : "sws-star"}>
        ★
      </span>
    ))}
  </span>
);

const SaveWithSets = () => {
  const [activeTab, setActiveTab] = useState("Bestsellers");
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -608 : 608,
      behavior: "smooth",
    });
  };

  return (
    <section className="sws">
      {/* Header */}
      <div className="sws__header">
        <div>
          <h3 className="sws__title">Save with Sets</h3>
          <p className="sws__sub">Curated Sets for Amazing Results</p>
        </div>
        <a href="/collections/sets" className="sws__see-all">
          See all
        </a>
      </div>

      {/* Tabs */}
      <div className="sws__tabs">
        {TABS.map((t) => (
          <button
            key={t}
            className={`sws__tab ${
              activeTab === t ? "sws__tab--active" : ""
            }`}
            onClick={() => setActiveTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div
        className="sws__carousel-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <button
            className="sws__arrow sws__arrow--left"
            onClick={() => scroll("left")}
          >
            &#8592;
          </button>
        )}

        <div className="sws__carousel" ref={scrollRef}>
          {SETS[activeTab].map((p) => (
            <div key={p.id} className="sws__card">
              <div className="sws__badge">{p.badge}</div>

              {p.soldOut && (
                <div className="sws__sold-out">Sold Out</div>
              )}

              {/* ✅ IMAGE FIXED */}
              <img
                src={COMMON_IMAGE}
                alt={p.name}
                className="sws__img"
              />

              <div className="sws__body">
                <p className="sws__tag">{p.tag}</p>
                <h4 className="sws__name">{p.name}</h4>
                <p className="sws__tagline">{p.tagline}</p>

                <div className="sws__meta">
                  <StarRating count={p.stars} />
                  <span className="sws__reviews">
                    {p.reviews} reviews
                  </span>
                </div>

                <p className="sws__units">{p.units}</p>

                <p className="sws__price">
                  {p.price}
                  <span className="sws__original">
                    {p.original}
                  </span>
                  <span className="sws__discount">
                    ({p.discount})
                  </span>
                </p>
              </div>

              <button className="sws__cta">Add to cart</button>
            </div>
          ))}
        </div>

        {hovered && (
          <button
            className="sws__arrow sws__arrow--right"
            onClick={() => scroll("right")}
          >
            &#8594;
          </button>
        )}
      </div>
    </section>
  );
};

export default SaveWithSets;