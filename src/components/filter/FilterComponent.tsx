import React from "react";
import "./filtercomponent.scss";
const FilterComponent = () => {
  return (
    <div className="filter-container">
      <div className="brand-content">
        <h3>BRAND</h3>
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
      <p className="divider"></p>
      <div className="price-range">
        <h3>PRICE RANGE</h3>
        <div className="brand-list">
          <div className="brand-item">
            <input type="checkbox" name="brand" id="brand1" />
            <label htmlFor="brand1">Under 500</label>
          </div>
          <div className="brand-item">
            <input type="checkbox" name="brand" id="brand2" />
            <label htmlFor="brand2">1000-3000</label>
          </div>
        </div>
      </div>
      <p className="divider"></p>
      <div className="rating-content">
        <h3>RATINGS</h3>
        <div className="rating-list">
          <div className="rating-item">
            <input type="checkbox" name="rating" id="rating1" />
            <span
              className="star"
              style={{
                color: "gold",
                fontSize: "20px",
              }}
            >
              {" "}★ ★ ★ ★ ★
            </span>
          </div>
          <div className="rating-item">
            <input type="checkbox" name="rating" id="rating2" />
            <span
              className="star"
              style={{
                color: "gold",
                fontSize: "20px",
              }}
            >
              {" "}★ ★ ★ ★
            </span>
            <span
              className="star"
              style={{
                color: "grey",
                fontSize: "20px",
              }}
            >
              {" "}
              ★
            </span>
          </div>
          <div className="rating-item">
            <input type="checkbox" name="rating" id="rating3" />
            <span
              className="star"
              style={{
                color: "gold",
                fontSize: "20px",
              }}
            >
              {" "}★ ★ ★
            </span>
            <span
              className="star"
              style={{
                color: "grey",
                fontSize: "20px",
              }}
            >
              {" "}
              ★ ★
            </span>
          </div>
          <div className="rating-item">
            <input type="checkbox" name="rating" id="rating4" />
            <span
              className="star"
              style={{
                color: "gold",
                fontSize: "20px",
              }}
            >
              {" "}★ ★
            </span>
            <span
              className="star"
              style={{
                color: "grey",
                fontSize: "20px",
              }}
            >
              {" "}
              ★ ★ ★
            </span>
          </div>
          <div className="rating-item">
            <input type="checkbox" name="rating" id="rating5" />
            <span
              className="star"
              style={{
                color: "gold",
                fontSize: "20px",
              }}
            >
              {" "}★
            </span>
            <span
              className="star"
              style={{
                color: "grey",
                fontSize: "20px",
              }}
            >
              {" "}
              ★ ★ ★ ★
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
