import { ICON } from '../../../constants/images.js';
import { Icon } from './index';

/**
 * Icon Storybook Configuration
 */
export default {
  title: 'Design/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
};

/**
 * Up Icon Story
 */
export const UpIcon = {
  args: {
    url: ICON.UP,
    onClick: () => alert('Successful')
  }
};

/**
 * Down Icon Story
 */
export const DownIcon = {
  args: {
    url: ICON.DOWN,
    onClick: () => alert('Successful')
  }
};

/**
 * Filter Icon Story
 */
export const FilterIcon = {
  args: {
    url: ICON.FILTER,
    onClick: () => alert('Successful')
  }
};
