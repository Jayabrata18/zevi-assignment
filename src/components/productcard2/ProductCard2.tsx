import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./productcard2.scss";

interface Props {
  products: Product[];
}
interface Product {
  id: number;
  title: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const ProductCard2: React.FC<Props> = ({
  products,
}: {
  products: any;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  console.log(products);

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
   
        <img src={products.image} alt={products.title} />

        <div className="view-product">
          <span> View Product</span>
        </div>
      </div>
      <div className="detail-container">
        <span className="product-title">{products.title}</span>
        <div className="price-container">
          <span className="previous-price">Rs. 599</span>
          <span className="current-price">Rs. 499</span>
        </div>
        <div className="rating-container">
          <span className="rating">{Math.floor(products.rating.rate)}</span>
          <span
            className="star"
            style={{
              color: "gold",
              fontSize: "15px",
            }}
          >
            {"★".repeat(Math.floor(products.rating.rate))}
          </span>
          <span className="rating-count">({products.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard2;
