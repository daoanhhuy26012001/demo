import { Button } from '../Button/index';
import { BRAND } from '../../../constants/images';
import { VARIANTS, PRICES } from '../../../constants/constant';
import './popover.css';
import '../Button/button.css';

/**
 * Component for rendering a Popover with buttons based on the provided buttonType.
 *
 * @param {string} buttonType - Type of buttons to render. Possible values: 'image', 'text', 'both'.
 * @param {string} variant - Variant of the Popover component.
 * @returns {JSX.Element|null} Rendered Popover component.
 */
export const Popover = ({ buttonType, variant }) => {
  const renderButton = () => {
    if (buttonType === 'image') {
      return BRAND.map((image, index) => (
        <Button variant={VARIANTS.PRIMARY} key={index} url={image} />
      ));
    }
    if (buttonType === 'text') {
      return PRICES.map((price, index) => (
        <Button variant={VARIANTS.PRIMARY} key={index} text={price} />
      ));
    }

    if (buttonType === 'both') {
      const imageButtons = BRAND.map((image, index) => (
        <Button variant={VARIANTS.PRIMARY} key={`image-${index}`} url={image} />
      ));

      const textButtons = PRICES.map((price, index) => (
        <Button variant={VARIANTS.PRIMARY} key={`text-${index}`} text={price} />
      ));

      return (
        <div>
          <div>
            <h3 className="title">Brand</h3>
            {imageButtons}
          </div>
          <div>
            <h3 className="title">Price</h3>
            {textButtons}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={['popover', `popover-${variant}`].join(' ')}>
      {renderButton()}
    </div>
  );
};
