import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text as TextComponent } from './Text';

const Story: ComponentMeta<typeof TextComponent> = {
  component: TextComponent,
  title: 'Typography/Typography.Text',
};
export default Story;

const Template: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args}>Hello world</TextComponent>
);

export const Text = Template.bind({});
Text.args = {};
