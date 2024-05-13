import  { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./productcard2.scss";
const ProductCard2 = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="container">
      <div className="img-container">
        <div className="like-icon" onClick={handleLikeToggle}>
          {isLiked ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <FaRegHeart style={{ color: "white" }} />
          )}
        </div>
        <img src="https://via.placeholder.com/130x170" alt="product" />

        <div className="view-product">
          <span> View Product</span>
        </div>
      </div>
      <div className="detail-container">
        <span className="product-title">Round Neck</span>
        <div className="price-container">
          <span className="previous-price">Rs. 599</span>
          <span className="current-price">Rs. 499</span>
        </div>
        <div className="rating-container">
          <span
            className="star"
            style={{
              color: "gold",
              fontSize: "15px",
            }}
          >
            ★ ★ ★ ★ ★
          </span>
          <span className="rating-count">(200)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
