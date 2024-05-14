import { useEffect, useState } from "react";
import CartBox from "../cartbox/CartBox";
import "./searchpopup.scss";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const SearchPopUp = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/result");
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        // Shuffle the products array
        const shuffledProducts = shuffleArray(data);
        // Take the first four products
        const randomProducts = shuffledProducts.slice(0, 4);
        const productIds = randomProducts.map((product) => product.id);
        setCartItems(productIds);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to shuffle an array
  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="searchpopup-result">
      <span className="search-category-span">Latest Trends</span>
      <div className="category">
        <CartBox
          products={products}
          cartItems={cartItems}
          onClick={handleRedirect}
        />
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
