// TrendingNow.jsx
import React, { useState, useRef } from "react";
import "../css/TrendingNow.css";

const TABS = ["Bestsellers", "Skin Care", "Hair Care", "Makeup"];

// Array of the 4 provided images to cycle through
const defaultImages = [
  "https://discoverpilgrim.com/cdn/shop/files/1_cd90a395-adca-4a55-aaef-5f81a2382f80.jpg?v=1764938514&width=1080",
  "https://discoverpilgrim.com/cdn/shop/files/1_d35d2da5-6bc6-47b1-8188-f05726489b6f.jpg?v=1767688962&width=1080",
  "https://discoverpilgrim.com/cdn/shop/files/1_d1861101-daf5-4a0f-b1d8-11c061b3b046.jpg?v=1753167116&width=1080",
  "https://discoverpilgrim.com/cdn/shop/files/1_e6841aa2-67fa-4993-aa5a-1eb2e69234bf.jpg?v=1770799215&width=1080"
];

const PRODUCTS = {
  Bestsellers: [
    {
      id: 1,
      badge: "Up To 40% OFF",
      image: defaultImages[0],
      sellingFast: true,
      name: "Redensyl & Anagain Hair Growth Serum",
      tagline: "New Hair Growth in 28 Days",
      stars: 4,
      reviews: 7650,
      variants: "4 Sizes",
      price: "₹795",
      cta: "Add to cart →",
    },
    {
      id: 2,
      badge: "Up To 40% OFF",
      image: defaultImages[1],
      sellingFast: false,
      name: "Non-Drying Anti-Dandruff Shampoo",
      tagline: "Reduces Visible Flakes From 1st Wash*",
      stars: 4,
      reviews: 382,
      variants: "4 Sizes",
      price: "₹345",
      cta: "Add to cart →",
    },
    {
      id: 3,
      badge: "Up To 40% OFF",
      image: defaultImages[2],
      sellingFast: false,
      name: "Rosemary Water With Biotin",
      tagline: "Promote Healthier Growth",
      stars: 5,
      reviews: 34,
      variants: "3 Variants",
      price: "₹225",
      cta: "CHOOSE VARIANT",
      chooseVariant: true,
    },
    {
      id: 4,
      badge: "Up To 40% OFF",
      image: defaultImages[3],
      sellingFast: false,
      name: "Keratin & Amazonian Patuá Smoothening Shampoo",
      tagline: "10X Keratin-Smooth Hair in 1 Wash",
      stars: 4,
      reviews: 5653,
      variants: "4 Sizes",
      price: "₹345",
      cta: "Add to cart →",
    },
    {
      id: 5,
      badge: "Up To 40% OFF",
      image: defaultImages[0],
      sellingFast: false,
      name: "10% Vitamin C Face Serum",
      tagline: "Brightens & Evens Skin Tone",
      stars: 4,
      reviews: 3120,
      variants: "2 Sizes",
      price: "₹449",
      cta: "Add to cart →",
    },
    {
      id: 6,
      badge: "Up To 40% OFF",
      image: defaultImages[1],
      sellingFast: false,
      name: "10% Niacinamide Face Serum",
      tagline: "Minimises Pores & Controls Oil",
      stars: 4,
      reviews: 2890,
      variants: "2 Sizes",
      price: "₹399",
      cta: "Add to cart →",
    },
    {
      id: 7,
      badge: "Up To 40% OFF",
      image: defaultImages[2],
      sellingFast: false,
      name: "Korean Rice Water Hydra Glow Moisturizer",
      tagline: "48H Hydration & Glow",
      stars: 4,
      reviews: 1540,
      variants: "1 Size",
      price: "₹349",
      cta: "Add to cart →",
    },
    {
      id: 8,
      badge: "Up To 40% OFF",
      image: defaultImages[3],
      sellingFast: false,
      name: "25% AHA 2% BHA 5% PHA Peeling Solution",
      tagline: "Exfoliates & Renews Skin",
      stars: 4,
      reviews: 980,
      variants: "1 Size",
      price: "₹599",
      cta: "Add to cart →",
    },
  ],
  "Skin Care": [
    {
      id: 1, badge: "Up To 40% OFF", image: defaultImages[0],
      name: "10% Vitamin C Face Serum", tagline: "Brightens & Evens Skin Tone",
      stars: 4, reviews: 3120, variants: "2 Sizes", price: "₹449", cta: "Add to cart →",
    },
    {
      id: 2, badge: "Up To 40% OFF", image: defaultImages[1],
      name: "10% Niacinamide Face Serum", tagline: "Minimises Pores & Controls Oil",
      stars: 4, reviews: 2890, variants: "2 Sizes", price: "₹399", cta: "Add to cart →",
    },
    {
      id: 3, badge: "Up To 40% OFF", image: defaultImages[2],
      name: "Korean Rice Water Hydra Glow Moisturizer", tagline: "48H Hydration & Glow",
      stars: 4, reviews: 1540, variants: "1 Size", price: "₹349", cta: "Add to cart →",
    },
    {
      id: 4, badge: "Up To 40% OFF", image: defaultImages[3],
      name: "25% AHA 2% BHA 5% PHA Peeling Solution", tagline: "Exfoliates & Renews Skin",
      stars: 4, reviews: 980, variants: "1 Size", price: "₹599", cta: "Add to cart →",
    },
    {
      id: 5, badge: "Up To 40% OFF", image: defaultImages[0],
      name: "Vitamin C Serum Sunscreen SPF 50+", tagline: "Brightening + Sun Protection",
      stars: 5, reviews: 420, variants: "1 Size", price: "₹549", cta: "Add to cart →",
    },
    {
      id: 6, badge: "Up To 40% OFF", image: defaultImages[1],
      name: "Salicylic Acid Face Wash", tagline: "Clears Acne & Unclogs Pores",
      stars: 4, reviews: 2100, variants: "2 Sizes", price: "₹299", cta: "Add to cart →",
    },
    {
      id: 7, badge: "Up To 40% OFF", image: defaultImages[2],
      name: "Ceramide & Hyaluronic Acid Moisturizer", tagline: "Deep Barrier Repair",
      stars: 4, reviews: 760, variants: "1 Size", price: "₹499", cta: "Add to cart →",
    },
    {
      id: 8, badge: "Up To 40% OFF", image: defaultImages[3],
      name: "Retinol Night Cream", tagline: "Reduces Fine Lines Overnight",
      stars: 4, reviews: 530, variants: "1 Size", price: "₹649", cta: "Add to cart →",
    },
  ],
  "Hair Care": [
    {
      id: 1, badge: "Up To 40% OFF", image: defaultImages[0], sellingFast: true,
      name: "Redensyl & Anagain Hair Growth Serum", tagline: "New Hair Growth in 28 Days",
      stars: 4, reviews: 7650, variants: "4 Sizes", price: "₹795", cta: "Add to cart →",
    },
    {
      id: 2, badge: "Up To 40% OFF", image: defaultImages[1],
      name: "Non-Drying Anti-Dandruff Shampoo", tagline: "Reduces Visible Flakes From 1st Wash*",
      stars: 4, reviews: 382, variants: "4 Sizes", price: "₹345", cta: "Add to cart →",
    },
    {
      id: 3, badge: "Up To 40% OFF", image: defaultImages[2],
      name: "Rosemary Water With Biotin", tagline: "Promote Healthier Growth",
      stars: 5, reviews: 34, variants: "3 Variants", price: "₹225", cta: "CHOOSE VARIANT", chooseVariant: true,
    },
    {
      id: 4, badge: "Up To 40% OFF", image: defaultImages[3],
      name: "Keratin & Amazonian Patuá Smoothening Shampoo", tagline: "10X Keratin-Smooth Hair in 1 Wash",
      stars: 4, reviews: 5653, variants: "4 Sizes", price: "₹345", cta: "Add to cart →",
    },
    {
      id: 5, badge: "Up To 40% OFF", image: defaultImages[0],
      name: "Coffee & Keratin Hair Mask", tagline: "Deep Nourishment & Frizz Control",
      stars: 4, reviews: 1230, variants: "2 Sizes", price: "₹399", cta: "Add to cart →",
    },
    {
      id: 6, badge: "Up To 40% OFF", image: defaultImages[1],
      name: "Scalp Cooling Serum", tagline: "Soothes Itchy & Irritated Scalp",
      stars: 4, reviews: 640, variants: "1 Size", price: "₹449", cta: "Add to cart →",
    },
    {
      id: 7, badge: "Up To 40% OFF", image: defaultImages[2],
      name: "Hair Fall Control Shampoo", tagline: "Reduces Hair Fall in 4 Weeks",
      stars: 4, reviews: 2340, variants: "3 Sizes", price: "₹295", cta: "Add to cart →",
    },
    {
      id: 8, badge: "Up To 40% OFF", image: defaultImages[3],
      name: "Onion & Biotin Hair Oil", tagline: "Strengthens Roots & Reduces Breakage",
      stars: 4, reviews: 4100, variants: "2 Sizes", price: "₹349", cta: "Add to cart →",
    },
  ],
  Makeup: [
    {
      id: 1, badge: "Up To 40% OFF", image: defaultImages[0],
      name: "Matte Lip Crayon", tagline: "Long-Lasting 12H Matte Finish",
      stars: 4, reviews: 890, variants: "8 Shades", price: "₹349", cta: "Add to cart →",
    },
    {
      id: 2, badge: "Up To 40% OFF", image: defaultImages[1],
      name: "Kajal With Vitamin E", tagline: "Intense Black & Smudge Proof",
      stars: 5, reviews: 3200, variants: "2 Variants", price: "₹199", cta: "Add to cart →",
    },
    {
      id: 3, badge: "Up To 40% OFF", image: defaultImages[2],
      name: "Liquid Lipstick", tagline: "Vibrant Colour, All Day Wear",
      stars: 4, reviews: 1450, variants: "10 Shades", price: "₹399", cta: "Add to cart →",
    },
    {
      id: 4, badge: "Up To 40% OFF", image: defaultImages[3],
      name: "BB Cream SPF 30", tagline: "Coverage + Sun Protection",
      stars: 4, reviews: 670, variants: "3 Shades", price: "₹449", cta: "Add to cart →",
    },
    {
      id: 5, badge: "Up To 40% OFF", image: defaultImages[0],
      name: "Eyeshadow Palette", tagline: "12 Blendable Everyday Shades",
      stars: 4, reviews: 540, variants: "2 Palettes", price: "₹599", cta: "Add to cart →",
    },
    {
      id: 6, badge: "Up To 40% OFF", image: defaultImages[1],
      name: "Setting Spray", tagline: "Locks Makeup for 16H",
      stars: 4, reviews: 320, variants: "1 Size", price: "₹349", cta: "Add to cart →",
    },
    {
      id: 7, badge: "Up To 40% OFF", image: defaultImages[2],
      name: "Compact Powder", tagline: "Flawless Finish & Oil Control",
      stars: 4, reviews: 780, variants: "4 Shades", price: "₹299", cta: "Add to cart →",
    },
    {
      id: 8, badge: "Up To 40% OFF", image: defaultImages[3],
      name: "Mascara",tagline: "Volumising & Lengthening Formula",
      stars: 4, reviews: 430, variants: "1 Size", price: "₹349", cta: "Add to cart →",
    },
  ],
};

const StarRating = ({ count }) => (
  <span className="product-card__stars">
    {[1,2,3,4,5].map(i => (
      <span key={i} className={i <= count ? "star filled" : "star"}>★</span>
    ))}
  </span>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    {product.badge && (
      <div className="product-card__badge">{product.badge}</div>
    )}

    {/* Render the image if it exists, otherwise fallback to the placeholder */}
    {product.image ? (
      <img src={product.image} alt={product.name} className="product-card__img" />
    ) : (
      <div className="product-card__img-placeholder" />
    )}

    <div className="product-card__body">
      {product.sellingFast && (
        <p className="product-card__selling-fast">SELLING FAST</p>
      )}
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__tagline">{product.tagline}</p>

      <div className="product-card__meta">
        <StarRating count={product.stars} />
        <span className="product-card__reviews">{product.reviews.toLocaleString()} reviews</span>
      </div>

      <p className="product-card__variants">{product.variants}</p>
      <p className="product-card__price">From {product.price}</p>
    </div>

    <button
      className={`product-card__cta ${product.chooseVariant ? "product-card__cta--variant" : ""}`}
    >
      {product.cta}
    </button>
  </div>
);

const TrendingNow = () => {
  const [activeTab, setActiveTab] = useState("Bestsellers");
  const [hovered, setHovered] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    // scroll by exactly one card width (card 280px + gap 16px)
    el.scrollBy({ left: dir === "left" ? -592 : 592, behavior: "smooth" });
  };

  return (
    <section className="trending">
      <div className="trending__header">
        <h2 className="trending__title">Trending Now</h2>
        <p className="trending__subtitle">Curated just for you!</p>
      </div>

      {/* Tab filters */}
      <div className="trending__tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`trending__tab ${activeTab === tab ? "trending__tab--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Scrollable cards + arrow buttons */}
      <div
        className="trending__carousel-wrapper"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <button className="trending__arrow trending__arrow--left" onClick={() => scroll("left")}>
            &#8592;
          </button>
        )}

        <div className="trending__carousel" ref={scrollRef}>
          {PRODUCTS[activeTab].map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {hovered && (
          <button className="trending__arrow trending__arrow--right" onClick={() => scroll("right")}>
            &#8594;
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingNow;