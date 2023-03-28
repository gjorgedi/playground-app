import { ComponentStory } from "@storybook/react";
import { Header, HeaderProps } from "../components/Header";

export default {
  title: "Header",
  component: Header,
};

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
  <Header {...args} />
);

export const HeaderTest = Template.bind({});

HeaderTest.argTypes = {
  flexDirection: {
    control: "select",
    options: ["flex-row-reverse", "flex-row"],
  },
  borderColor: {
    control: "select",
    options: ["border-indigo-400", "border-sky-400"],
  },
};
HeaderTest.args = {
  flexDirection: "flex-row",
  borderColor: "border-indigo-400",
};
