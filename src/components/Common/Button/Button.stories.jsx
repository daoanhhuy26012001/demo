import { Button } from './index';
import { SIZES, VARIANTS } from '../../../constants/constant';

/**
 * Component story configuration for the Button component.
 */
export default {
  title: 'Design/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

/**
 * Primary Button variant.
 */
export const Primary = {
  args: {
    variant: VARIANTS.PRIMARY,
    text: 'Filter',
    onClick: () => alert('Successful operation')
  }
};

/**
 * Secondary Button variant.
 */
export const Secondary = {
  args: {
    variant: VARIANTS.SECONDARY,
    url: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
    size: SIZES.LARGE,
    onClick: () => alert('Successful operation')
  }
};

/**
 * Tertiary Button variant.
 */
export const Tertiary = {
  args: {
    variant: VARIANTS.PRIMARY,
    text: '6.5"',
    size: SIZES.SMALL,
    onClick: () => alert('Successful operation')
  }
};
