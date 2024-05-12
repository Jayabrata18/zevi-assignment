import logo from "../assets/Screenshot_2024-05-12_113833-removebg-preview.png";
import SearchBar from "../components/seachbar/SearchBar";
import "./searchpage.scss";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productApi";
import ProductCard from "../components/productcard/ProductCard";

const SearchPage = () => {
  const [products, setProducts] = useState({});

  // useEffect(() => {
  //   getProducts().then((data) => {
  //     setProduct(data[0]);
  //   });
  // }, []);
  useEffect(() => {
    getProducts().then((data) => {
      if (Array.isArray(data)) {
        setProducts(data.slice(0, 5)); // Slice the first five products
      } else {
        console.error("Data fetched is not an array:", data);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <img className="logo" src={logo} alt="google logo" />
      </div>
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="search-result">
        <span className="category-span">Latest Trends</span>
        <div className="category">
          {/* <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} /> */}
          {Array.isArray(products) ? (
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
        <div className="suggetions">
          <span className="popular-suggetions">Popular Suggetions</span>
          <div className="suggetions-list">
            <span className="suggetions-item">Shoes</span>
            <br />
            <span className="suggetions-item">Dress</span>
            <br />
            <span className="suggetions-item">Bags</span>
            <br />
            <span className="suggetions-item">Jewellery</span>
            <br />
            <span className="suggetions-item">Watches</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
