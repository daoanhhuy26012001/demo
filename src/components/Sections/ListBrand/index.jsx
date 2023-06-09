import './ListBrand.css';
import { Button } from '../../Common/Button';
import { VARIANTS } from '../../../constants/constant';

export const ListBrand = ({ brand }) => {
  return (
    <ul className="list-brand">
      {brand.map((url, index) => (
        <li key={index}>
          <Button variant={VARIANTS.SECONDARY} url={ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENI8qnl4Ag4V7c-FHNuVSCO4IPc5pJ29bLeXx-ATSWiP_CrgZAGY8KexqXUgkpT87lGM'} />
        </li>
      ))}
    </ul>
  );
};
