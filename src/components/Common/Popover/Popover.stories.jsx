import { Popover } from './index';
import { VARIANTS } from '../../../constants/constant.js';

/**
 * Component story configuration for the Popover component.
 */
export default {
  title: 'Design/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

/**
 * Primary Popover with image buttons.
 */
export const Primary = {
  args: {
    variant: VARIANTS.PRIMARY,
    buttonType: 'image'
  }
};

/**
 * Secondary Popover with text buttons.
 */
export const Secondary = {
  args: {
    variant: VARIANTS.SECONDARY,
    buttonType: 'text'
  }
};

/**
 * Tertiary Popover with both image and text buttons.
 */
export const Tertiary = {
  args: {
    variant: VARIANTS.TERTIARY,
    buttonType: 'both'
  }
};
