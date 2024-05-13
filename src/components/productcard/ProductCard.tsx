
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="product-card">
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