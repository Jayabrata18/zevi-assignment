
const ProductCard = ({
  product,
  onClick,
}: {
  product: any;
  onClick?: () => void;
}) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">
        <img src="https://via.placeholder.com/120x150" alt="product" />
      </div>
      <div className="product-details">
        <span>red dress</span>
      </div>
    </div>
  );
};

export default ProductCard;