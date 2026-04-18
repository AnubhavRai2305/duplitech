import React from "react";
import "../css/Shopbycategoryandingredients.css";

// ✅ Images you provided
const HAIR_SERUM_IMG =
  "https://discoverpilgrim.com/cdn/shop/files/Hair-Serums-248x-332_e0140f9a-92ee-43ce-a443-0fc58ab43d55.png?v=1760700995&width=248";

const CERAMIDES_IMG =
  "https://discoverpilgrim.com/cdn/shop/files/Ceramides_500x500_582fb1e8-225c-439f-bf41-cb7e8c2d19e3.png?v=1750909244&width=500";

// fallback (so UI doesn’t break)
const DEFAULT_IMG = HAIR_SERUM_IMG;

const SUBCATEGORIES = [
  { id:1, label:"Hair Serums", img: HAIR_SERUM_IMG },
  { id:2, label:"Shampoos", img: DEFAULT_IMG },
  { id:3, label:"Hair Masks", img: DEFAULT_IMG },
  { id:4, label:"Moisturizers", img: DEFAULT_IMG },
  { id:5, label:"Sunscreens", img: DEFAULT_IMG },
  { id:6, label:"Face Serums", img: DEFAULT_IMG },
  { id:7, label:"Makeup - Face", img: DEFAULT_IMG },
  { id:8, label:"Makeup - Eyes", img: DEFAULT_IMG },
  { id:9, label:"Makeup - Lips", img: DEFAULT_IMG },
];

const INGREDIENTS = [
  { id:1, label:"Ceramides", img: CERAMIDES_IMG },
  { id:2, label:"Vitamin C", img: DEFAULT_IMG },
  { id:3, label:"Niacinamide", img: DEFAULT_IMG },
  { id:4, label:"Tea Tree", img: DEFAULT_IMG },
  { id:5, label:"Redensyl", img: DEFAULT_IMG },
  { id:6, label:"Squalane", img: DEFAULT_IMG },
];

const ShopByCategoryAndIngredients = () => (
  <section className="sbci">
    {/* ── Shop by Category ── */}
    <h2 className="sbci__title">Shop by category</h2>
    <div className="sbci__subcats">
      {SUBCATEGORIES.map((c) => (
        <a
          key={c.id}
          href={`/collections/${c.label.toLowerCase().replace(/[\s-]+/g, "-")}`}
          className="sbci__subcat"
        >
          <img
            src={c.img}
            alt={c.label}
            className="sbci__subcat-img"
          />
          <span className="sbci__subcat-label">{c.label}</span>
        </a>
      ))}
    </div>

    {/* ── Shop by Ingredients ── */}
    <h2 className="sbci__title sbci__title--ingredients">
      Shop by Ingredients
    </h2>
    <div className="sbci__ingredients">
      {INGREDIENTS.map((ing) => (
        <a
          key={ing.id}
          href={`/collections/${ing.label.toLowerCase().replace(/\s+/g, "-")}`}
          className="sbci__ingredient"
        >
          <img
            src={ing.img}
            alt={ing.label}
            className="sbci__ingredient-img"
          />
          <span className="sbci__ingredient-label">
            {ing.label}
          </span>
        </a>
      ))}
    </div>
  </section>
);

export default ShopByCategoryAndIngredients;