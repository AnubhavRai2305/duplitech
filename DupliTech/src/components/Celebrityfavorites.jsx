import React from "react";
import "../css/Celebrityfavorites.css";

// ✅ Image you provided
const RASHMIKA_IMG =
  "https://discoverpilgrim.com/cdn/shop/files/Rashmika-Fav-1080x1080.jpg?v=1750900457&width=1080";

// fallback for now (you can replace later with real images)
const DEFAULT_IMG = RASHMIKA_IMG;

const CELEBS = [
  { id:1, label:"RASHMIKA'S FAVOURITE", img: RASHMIKA_IMG },
  { id:2, label:"JENNIFER'S FAVOURITE", img: DEFAULT_IMG },
  { id:3, label:"MANISHA'S PICKS", img: DEFAULT_IMG },
];

const CelebrityFavorites = () => (
  <section className="celeb">
    <h2 className="celeb__title">
      Feel the Glamour: Celebrity Favorites
    </h2>

    <div className="celeb__grid">
      {CELEBS.map((c) => (
        <a
          key={c.id}
          href={`/collections/celebrity`}
          className="celeb__card"
        >
          {/* ✅ IMAGE FIXED */}
          <img
            src={c.img}
            alt={c.label}
            className="celeb__img"
          />

          <div className="celeb__label">{c.label}</div>
        </a>
      ))}
    </div>
  </section>
);

export default CelebrityFavorites;