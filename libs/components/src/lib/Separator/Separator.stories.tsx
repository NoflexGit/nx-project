import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Separator } from './Separator';

const Story: ComponentMeta<typeof Separator> = {
  component: Separator,
  title: 'Separator',
};
export default Story;

const Template: ComponentStory<typeof Separator> = (args) => (
  <Separator {...args} />
);

export const Overview = Template.bind({});
Overview.args = {};
