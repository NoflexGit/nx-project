import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';

const Story: ComponentMeta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
};
export default Story;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  src: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
};
