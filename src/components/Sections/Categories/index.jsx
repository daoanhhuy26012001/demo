import './categories.css';
import { Button } from '../../Common/Button';
import { VARIANTS } from '../../../constants/constant';
import { ICON } from '../../../constants/images';
import { Icon } from '../../Common/Icon';

export const Categories = ({ categories, buttonIcons, onClick }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <Button
          variant={VARIANTS.PRIMARY}
          key={index}
          text={category}
          icon={
            category === 'Filter' ? (
              <Icon url={ICON.FILTER} />
            ) : (
              <Icon url={buttonIcons[category]} />
            )
          }
          isRight={category !== 'Filter'}
          onClick={() => onClick(category)}
        />
      ))}
    </div>
  );
};
