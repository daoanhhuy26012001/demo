import './ListBrand.css';
import { Button } from '../../Common/Button';
import { VARIANTS } from '../../../constants/constant';

export const ListBrand = ({ brand }) => {
  return (
    <ul className="list-brand">
      {brand.map((url, index) => (
        <li key={index}>
          <Button variant={VARIANTS.SECONDARY} url={url} />
        </li>
      ))}
    </ul>
  );
};
