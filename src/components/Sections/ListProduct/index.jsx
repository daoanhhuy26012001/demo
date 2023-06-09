import './ListProduct.css';
import { ProductCard } from '../../Common/Card';

export const ProductList = ({ products }) => {
  return (
    <ul className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </ul>
  );
};
