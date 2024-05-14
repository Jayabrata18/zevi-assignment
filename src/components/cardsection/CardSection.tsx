import "./cardsection.scss";
import ProductCard2 from "../productcard2/ProductCard2";
import { useEffect, useState } from "react";
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
const CardSection = () => {
  var productArray = [];
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);
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

  productArray = shuffleArray(products);

  return (
    <div className="cards">
      {productArray.map((_item: any, index: any) => {
        return (
          <div className="card">
            <ProductCard2 products={_item}  key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
