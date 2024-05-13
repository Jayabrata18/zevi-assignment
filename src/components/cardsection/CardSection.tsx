import "./cardsection.scss";
import ProductCard2 from "../productcard2/ProductCard2";

const CardSection = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="cards">
      {items.map((_item: any, index: any) => {
        return (
          <div className="card">
            <ProductCard2 key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
