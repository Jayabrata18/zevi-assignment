interface Product {
  name: string; 
}
const ProductCard = ({
  product,
  onClick,
}: {
  product: Product;
  onClick?: () => void;
}) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">
        <img src="https://via.placeholder.com/120x150" alt="product" />
      </div>
      <div className="product-details">
        <span>red dress</span>
        <span>{product.name}</span>
      </div>
    </div>
  );
};

export default ProductCard;
