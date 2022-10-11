import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Title as TitleComponent } from './Title';

const Story: ComponentMeta<typeof TitleComponent> = {
  component: TitleComponent,
  title: 'Typography/Typography.Title',
};
export default Story;

const Template: ComponentStory<typeof TitleComponent> = (args) => (
  <TitleComponent {...args}>Hello world</TitleComponent>
);

export const Title = Template.bind({});
Title.storyName = 'I am the primary';
Title.args = {};
