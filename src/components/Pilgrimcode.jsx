// PilgrimCode.jsx
import React from "react";
import "../css/Pilgrimcode.css"

const PROMISES = [
  { id:1, icon:"🌿", label:"Natural World\nIngredients" },
  { id:2, icon:"✅", label:"Derma-Tested\nFor Safety" },
  { id:3, icon:"🏛️", label:"India FDA\nApproved" },
  { id:4, icon:"🐰", label:"Vegan & No\nAnimal Testing" },
  { id:5, icon:"🚫", label:"No Toxic\nChemicals" },
  { id:6, icon:"♻️", label:"Plastic\nPositive" },
];

const PilgrimCode = () => (
  <section className="pgcode">
    <div className="pgcode__left">
      <h2 className="pgcode__title">The Pilgrim Code</h2>
      <div className="pgcode__grid">
        {PROMISES.map(p => (
          <div key={p.id} className="pgcode__item">
            {/* Replace emoji with SVG icon or <img> matching the teal line-art style */}
            <div className="pgcode__icon-circle">
              <span className="pgcode__icon">{p.icon}</span>
            </div>
            <p className="pgcode__label">{p.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="pgcode__right">
      <h3 className="pgcode__promise-title">Our Promise</h3>
      <p className="pgcode__promise-text">
        Pilgrim is "Clean Compatible". Not just <strong>free of harmful and toxic chemicals</strong> but uses only those ingredients that either enhance the health of our hair &amp; skin or support the <strong>effectiveness of formulations</strong>.
      </p>
    </div>

    <div className="pgcode__tribe-row">
      <a href="/pages/reviews" className="pgcode__tribe-btn">HEAR FROM OUR PILGRIM TRIBE →</a>
    </div>
  </section>
);

export default PilgrimCode;