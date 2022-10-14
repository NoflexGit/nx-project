import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SelectItem, Select } from './Select';

const Story: ComponentMeta<typeof Select> = {
  component: Select,
  title: 'Select',
};
export default Story;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select label="Favorite Animal" {...args}>
    <Item key="red panda">Red Panda</Item>
    <Item key="cat">Cat</Item>
    <Item key="dog">Dog</Item>
    <Item key="aardvark">Aardvark</Item>
    <Item key="kangaroo">Kangaroo</Item>
    <Item key="snake">Snake</Item>
  </Select>
);

export const Primary = Template.bind({});
Primary.args = {};
