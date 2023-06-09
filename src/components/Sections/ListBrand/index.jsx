import './ListBrand.css';
import { Button } from '../../Common/Button';
import { VARIANTS } from '../../../constants/constant';

import image from '../../../assets/images/down.png'

export const ListBrand = ({ brand }) => {
  return (
    <ul className="list-brand">
      {brand.map((url, index) => (
        <li key={index}>
          <Button variant={VARIANTS.SECONDARY} url={image} />
        </li>
      ))}
    </ul>
  );
};
