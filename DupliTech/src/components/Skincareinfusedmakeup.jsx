// SkincareInfusedMakeup.jsx
import React from "react";
import "../css/Skincareinfusedmakeup.css"

const simImage = "https://discoverpilgrim.com/cdn/shop/files/01jumeirahjewel.jpg?v=1773393650&width=1080";

const PRODUCTS = [
  { id:1, badge:"Up To 40% OFF", tag:"#1 IN MAKEUP",    name:"Dubai Bling Glitter Lipstick",      tagline:"Nourishing & Hydrating",                               variants:"8 Colors",  price:"₹645", img: simImage },
  { id:2, badge:"Up To 40% OFF", tag:"#2 IN MAKEUP",    name:"Dream Matte Serum Foundation",      tagline:"Makeup Meets Skincare",                                variants:"7 Colors",  price:"₹695", img: simImage },
  { id:3, badge:"Up To 40% OFF", tag:"#3 IN MAKEUP",    name:"Matte Me Up! Bullet Lipstick",      tagline:"Lasts All Day Long",                                   variants:"20 Colors", price:"₹595", img: simImage },
  { id:4, badge:"Up To 40% OFF", tag:"NEW LAUNCH",      name:"Dream Matte Foundation Stick",      tagline:"4-in-1 Stick: Conceal, Contour, Highlight & Cover",variants:"7 Colors",  price:"₹845", img: simImage },
];

const SkincareInfusedMakeup = () => (
  <section className="sim">
    <div className="sim__header">
      <div>
        <h3 className="sim__title">Skincare Infused Makeup</h3>
        <p className="sim__sub">Makeup Crafted for Skin</p>
      </div>
      <a href="/collections/makeup" className="sim__view-all">View All</a>
    </div>

    <div className="sim__grid">
      {PRODUCTS.map(p => (
        <div key={p.id} className="sim__card">
          <div className="sim__badge">{p.badge}</div>
          
          {p.img ? (
            <img src={p.img} alt={p.name} className="sim__img" />
          ) : (
            <div className="sim__img-placeholder" />
          )}

          <div className="sim__body">
            <p className="sim__tag">{p.tag}</p>
            <h4 className="sim__name">{p.name}</h4>
            <p className="sim__tagline">{p.tagline}</p>
            <p className="sim__variants">{p.variants}</p>
            <p className="sim__price">{p.price}</p>
          </div>
          <button className="sim__cta">Select Shade</button>
        </div>
      ))}
    </div>
  </section>
);

export default SkincareInfusedMakeup;