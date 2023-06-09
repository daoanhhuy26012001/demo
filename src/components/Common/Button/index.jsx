// Styles
import './button.css';
import { SIZES } from '../../../constants/constant';

/**
 * Button component
 *
 * @param {string} variant - The variant of the button ('primary', 'secondary', etc.)
 * @param {string} size - How large should the button be? (Options: 'small', 'medium', 'large')
 * @param {string} text - The contents of the button (required)
 * @param {function} onClick - Optional click handler
 */

export const Button = ({
  url,
  variant,
  size = SIZES.MEDIUM,
  text,
  icon,
  isRight,
  onClick
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={['button', `button-${size}`, `button-${variant}`].join(' ')}>
      {url ? (
        <img src={url} />
      ) : isRight ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </button>
  );
};
