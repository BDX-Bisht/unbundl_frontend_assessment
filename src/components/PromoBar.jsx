import React from 'react';
import './PromoBar.css';

export default function PromoBar() {
  return (
    <div className="promo-bar">
      <p className="promo-text">
        Starting at <span className="promo-original-price">Rs 69,999</span> <span className="promo-discount-price">Rs 47,999</span>. Hurry! Offer ends soon.
      </p>
    </div>
  );
}
