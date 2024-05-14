import React, { useEffect, useState } from "react";
import CartBox from "../../components/cartbox/CartBox";

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

const Demo = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<number[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        // Shuffle the products array
        const shuffledProducts = shuffleArray(data);
        // Take the first three products
        const randomProducts = shuffledProducts.slice(0, 3);
        // Populate cartItems with IDs of random products
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
    <div>
      <h1>Products</h1>
      <CartBox products={products} cartItems={cartItems} />
    </div>
  );
};

export default Demo;
