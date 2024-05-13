import React from "react";
import "./filtercomponent.scss";
const FilterComponent = () => {
  return (
    <div className="filter-container">
      <div className="brand-content">
        <h3>BRANDS</h3>
        <div className="brand-list">
          <div className="brand-item">
            <input type="checkbox" name="brand" id="brand1" />
            <label htmlFor="brand1">Mango</label>
          </div>
          <div className="brand-item">
            <input type="checkbox" name="brand" id="brand2" />
            <label htmlFor="brand2">H&M</label>
          </div>
        </div>
      </div>
      <div className="price-range">
        <p className="divider">
        </p>
        <h3>PRICE RANGE</h3>
        <div className="brand-list">
          <div className="brand-item">
            <input type="checkbox" name="brand" id="brand1" />
            <label htmlFor="brand1">under 5000</label>
          </div>
          <div className="brand-item">
            <input type="checkbox" name="brand" id="brand2" />
            <label htmlFor="brand2">5000-10000</label>
          </div>
        </div>
      </div>
      <div className="rating-content">
        <h3>RATING</h3>
        <div className="rating-list">
          <div className="rating-item">
            <input type="checkbox" name="rating" id="rating1" />
            <label htmlFor="rating1">4.0 & above</label>
          </div>
          <div className="rating-item">
            <input type="checkbox" name="rating" id="rating2" />
            <label htmlFor="rating2">3.0 & above</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
