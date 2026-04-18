// ShopByCategories.jsx
import React from "react";
import "../css/ShopByCategories.css"

const CATEGORIES = [
  { id: 1, label: "Hair Care",          img: "https://discoverpilgrim.com/cdn/shop/files/Hair-Care-Rashmika-400x560_6fd816d0-e889-4d02-ad8b-8caad17961f1.png?v=1742470624&width=400", imgKey: "hair-care"          },
  { id: 2, label: "Skin Care",          img: "https://discoverpilgrim.com/cdn/shop/files/Skin-Care-400x560_b94a6807-7625-463a-b593-0537e8dcfb57.png?v=1742470624&width=400", imgKey: "skin-care"          },
  { id: 3, label: "Makeup",             img: "https://discoverpilgrim.com/cdn/shop/files/Makeup-400x560_1d74dd34-33c7-4bc1-8fa7-6f2b122ba5b5.png?v=1742470624&width=400", imgKey: "makeup"             },
  { id: 4, label: "Body Care",          img: "https://discoverpilgrim.com/cdn/shop/files/Body-Care-400x560_bc79e780-c17e-483c-bf22-a88a0e4af8fe.png?v=1742470624&width=400", imgKey: "body-care"          },
  { id: 5, label: "Fragrances",         img: "https://discoverpilgrim.com/cdn/shop/files/Fragrances-400x560_1_ffebb0ed-8a61-4e7c-ad17-984bc59b5df9.png?v=1761576345&width=400", imgKey: "fragrances"         },
  { id: 6, label: "Summer Essentials",  img: "https://discoverpilgrim.com/cdn/shop/files/Summer-Essentials-400x560.png?v=1771835774&width=400", imgKey: "summer-essentials"  },
  { id: 7, label: "New Launches",       img: "https://discoverpilgrim.com/cdn/shop/files/New-Launches-400x560_1.png?v=1776256290&width=400", imgKey: "new-launches"       },
  { id: 8, label: "Up to 70% OFF\n& More", img: "https://discoverpilgrim.com/cdn/shop/files/MakeupFest_400x560_2.png?v=1776328288&width=400", imgKey: "makeup-fest"    },
];

const CategoryCard = ({ label, imgKey, img }) => (
  <a
    href={`/collections/${imgKey}`}
    className="category-card"
    aria-label={label}
  >
    {img ? (
      <img src={img} alt={label} className="category-card__img" />
    ) : (
      <div className="category-card__img-placeholder">
        <span>{imgKey}</span>
      </div>
    )}

    <div className="category-card__footer">
      <span className="category-card__label">{label}</span>
      <span className="category-card__arrow">&#9657;</span>
    </div>
  </a>
);

const ShopByCategories = () => {
  return (
    <section className="shop-categories">
      <h2 className="shop-categories__title">Shop By Categories</h2>

      <div className="shop-categories__grid">
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.id} label={cat.label} imgKey={cat.imgKey} img={cat.img} />
        ))}
      </div>

      <a href="/collections/all" className="shop-categories__view-all">
        View all products &nbsp;→
      </a>
    </section>
  );
};

export default ShopByCategories;