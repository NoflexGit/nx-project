import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

const Story: ComponentMeta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
};
export default Story;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}>Button</Checkbox>
);

export const Overview = Template.bind({});
Overview.args = {};
