import { useEffect, useState } from "react";
import ProductCard from "../productcard/ProductCard";
import "./searchpopup.scss";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api/productApi";
const SearchPopUp = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data[0]);
    });
  }, []);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/result");
  };

  // useEffect(() => {
  //   getProducts().then((data) => {
  //     if (Array.isArray(data)) {
  //       setProducts(data.slice(0, 5)); // Slice the first five products
  //     } else {
  //       console.error("Data fetched is not an array:", data);
  //     }
  //   });
  // }, []);
  return (
    <div className="search-result">
      <span className="category-span">Latest Trends</span>
      <div className="category">
        <ProductCard product={products} onClick={handleRedirect} />
        <ProductCard product={products} onClick={handleRedirect} />
        <ProductCard product={products} onClick={handleRedirect} />
        <ProductCard product={products} onClick={handleRedirect} />
        <ProductCard product={products} onClick={handleRedirect} />
        {/* {Array.isArray(products) ? (
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )} */}
      </div>
      <div className="suggetions">
        <span className="popular-suggetions">Popular suggetions</span>
        <div className="suggetions-list">
          <span className="suggetions-item" onClick={handleRedirect}>
            Shoes
          </span>
          <br />
          <span className="suggetions-item" onClick={handleRedirect}>
            Denim Paints
          </span>
          <br />
          <span className="suggetions-item" onClick={handleRedirect}>
            Bags
          </span>
          <br />
          <span className="suggetions-item" onClick={handleRedirect}>
            Jewellery
          </span>
          <br />
          
        </div>
      </div>
    </div>
  );
};

export default SearchPopUp;
