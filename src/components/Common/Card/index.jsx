import './card.css';
import { Button } from '../Button';
import { VARIANTS, SIZES } from '../../../constants/constant';

export const ProductCard = ({ product }) => {
  return (
    <li className="product-card">
      <div className="product-installment">
        {product.installment && (
          <Button
            variant={VARIANTS.TERTIARY}
            size={SIZES.SMALL}
            text={product.installment}></Button>
        )}
      </div>
      <img src={product.images} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <div className="product-details">
        <Button
          variant={VARIANTS.TERTIARY}
          size={SIZES.SMALL}
          text={product.version}></Button>
        <Button
          variant={VARIANTS.TERTIARY}
          size={SIZES.SMALL}
          text={product.resolution}></Button>
      </div>
      <p className="product-price">{product.price}</p>
    </li>
  );
};
