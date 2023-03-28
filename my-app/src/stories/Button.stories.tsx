import { Button, ButtonProps } from "../components/shared/Button";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Login = Template.bind({});

Login.argTypes = {
  bgColor: {
    control: "select",
    options: ["bg-indigo-500", "bg-sky-500", "bg-purple-500"],
  },
};
Login.args = {
  label: "Login",
  bgColor: "bg-indigo-500",
  disabled: false,
  isLoading: false,
};
