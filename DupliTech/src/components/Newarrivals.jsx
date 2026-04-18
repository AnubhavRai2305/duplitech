// NewArrivals.jsx
import React, { useState, useRef } from "react";
import "../css/NewArrivals.css"

const newArrivalImage = "https://discoverpilgrim.com/cdn/shop/files/1.1.WB.jpg?v=1773923714&width=1080";

const TABS = ["All New Arrivals", "Skin Care", "Makeup", "Hair Care", "Body Care"];

const ALL_PRODUCTS = [
  { id:1, badge:"Up To 40% OFF", superBadge:"New", soldOut:true,  tag:"NEW LAUNCH", name:"10% Vitamin C Face Serum Roll-On",                    tagline:"Glowing, Brighter Skin in 5 Days*",       stars:4, reviews:15,  size:"25ml",    price:"₹695",       cta:"Add to cart →", img: newArrivalImage },
  { id:2, badge:"Up To 40% OFF", superBadge:"New Cooling Shampoo", soldOut:false, tag:"NEW LAUNCH", name:"Non-Drying Anti-Dandruff Shampoo Cooling Menthol", tagline:"Reduces Visible Flakes From 1st Wash*",    stars:4, reviews:20,  size:"2 Sizes", price:"From ₹395",  cta:"Add to cart →", img: newArrivalImage },
  { id:3, badge:"Up To 40% OFF", superBadge:null,  soldOut:false, tag:"NEW LAUNCH", name:"5% Vitamin C Brightening Serum Sunscreen SPF 50+",    tagline:"Protects from Sun Damage & Tanning",       stars:4, reviews:172, size:"50ml",    price:"₹495",       cta:"Add to cart",   img: newArrivalImage },
  { id:4, badge:"Up To 40% OFF", superBadge:null,  soldOut:false, tag:"NEW LAUNCH", name:"5% Niacinamide Hydra Glow Gel Sunscreen SPF 50+",     tagline:"Delivers Hydrated Glow",                   stars:4, reviews:168, size:"50ml",    price:"₹495",       cta:"Add to cart",   img: newArrivalImage },
  { id:5, badge:"Up To 40% OFF", superBadge:null,  soldOut:false, tag:"NEW LAUNCH", name:"Korean Cooling Fluid Sunscreen SPF 50+",              tagline:"-5° C Cooling Sensation",                  stars:4, reviews:90,  size:"50ml",    price:"₹495",       cta:"Add to cart",   img: newArrivalImage },
  { id:6, badge:"Up To 40% OFF", superBadge:null,  soldOut:false, tag:"NEW LAUNCH", name:"Rosemary Water With Biotin",                          tagline:"Promote Healthier Growth",                 stars:5, reviews:34,  size:"3 Variants",price:"₹225",      cta:"Add to cart",   img: newArrivalImage },
  { id:7, badge:"Up To 40% OFF", superBadge:null,  soldOut:false, tag:"NEW LAUNCH", name:"Keratin & Amazonian Patuá Smoothening Shampoo",       tagline:"10X Keratin-Smooth Hair in 1 Wash",        stars:4, reviews:200, size:"4 Sizes", price:"₹345",       cta:"Add to cart",   img: newArrivalImage },
  { id:8, badge:"Up To 40% OFF", superBadge:null,  soldOut:false, tag:"NEW LAUNCH", name:"24K Gold Gel Face Wash",                              tagline:"Enhances Natural Glow",                    stars:4, reviews:120, size:"2 Sizes", price:"₹349",       cta:"Add to cart",   img: newArrivalImage },
];

const StarRating = ({ count }) => (
  <span className="na-stars">
    {[1,2,3,4,5].map(i=><span key={i} className={i<=count?"na-star filled":"na-star"}>★</span>)}
  </span>
);

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("All New Arrivals");
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir==="left"?-608:608, behavior:"smooth" });

  return (
    <section className="na">
      <div className="na__header">
        <div>
          <h3 className="na__title">New Arrivals</h3>
          <p className="na__sub">Shop the Latest &amp; Greatest</p>
        </div>
        <a href="/collections/new-arrivals" className="na__see-all">See all</a>
      </div>

      <div className="na__tabs">
        {TABS.map(t => (
          <button key={t} className={`na__tab ${activeTab===t?"na__tab--active":""}`} onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <div className="na__carousel-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && <button className="na__arrow na__arrow--left" onClick={() => scroll("left")}>&#8592;</button>}
        <div className="na__carousel" ref={scrollRef}>
          {ALL_PRODUCTS.map(p => (
            <div key={p.id} className="na__card">
              {p.badge && <div className="na__badge">{p.badge}</div>}
              {p.superBadge && <div className="na__super-badge">{p.superBadge}</div>}
              {p.soldOut && <div className="na__sold-out">Sold Out</div>}
              
              {p.img ? (
                <img src={p.img} alt={p.name} className="na__img" />
              ) : (
                <div className="na__img-placeholder" />
              )}
              
              <div className="na__body">
                <p className="na__tag">{p.tag}</p>
                <h4 className="na__name">{p.name}</h4>
                <p className="na__tagline">{p.tagline}</p>
                <div className="na__meta">
                  <StarRating count={p.stars} />
                  <span className="na__reviews">{p.reviews} reviews</span>
                </div>
                <p className="na__size">{p.size}</p>
                <p className="na__price">{p.price}</p>
              </div>
              <button className="na__cta">{p.cta}</button>
            </div>
          ))}
        </div>
        {hovered && <button className="na__arrow na__arrow--right" onClick={() => scroll("right")}>&#8594;</button>}
      </div>
    </section>
  );
};

export default NewArrivals;