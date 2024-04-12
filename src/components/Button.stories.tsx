import Button from "./Button";

const meta = {
  title: "components/Button",
  component: Button,
  argTypes: {
    children: { control: { type: "text" } },
    size: { control: { type: "text" } },
    color: { control: { type: "text" } },
  },
};

export default meta;

export const Size_Large = {
  args: {
    children: "버튼",
    size: "lg",
    color: "red",
  },
};
export const Size_XLarge = {
  args: {
    children: "버튼",
    size: "xl",
    color: "red",
  },
};
export const Size_2XLarge = {
  args: {
    children: "버튼",
    size: "2xl",
    color: "red",
  },
};

export const Color_Red = {
  args: {
    children: "버튼",
    size: "lg",
    color: "red",
  },
};
export const Color_Blue = {
  args: {
    children: "버튼",
    size: "lg",
    color: "blue",
  },
};
export const Color_Green = {
  args: {
    children: "버튼",
    size: "lg",
    color: "green",
  },
};
