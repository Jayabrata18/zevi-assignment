import React from "react";
import "./cartbox.scss";
interface Props {
  products: Product[];
  cartItems: number[];
  onClick: () => void;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CartBox: React.FC<Props> = ({
  products,
  cartItems,
  onClick,
}: {
  products: Product[];
  cartItems: number[];
  onClick?: () => void;
}) => {
  return (
    <div className="cart-container">
      {cartItems.map((itemId) => {
        const product = products.find((p) => p.id === itemId);
        if (product) {
          const truncatedTitle = product.title.split(" ").slice(0, 3).join(" ");
          return (
            <div className="product-container " key={itemId} onClick={onClick}>
              <img src={product.image} alt={product.title} />
              <span>{truncatedTitle}</span>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartBox;
