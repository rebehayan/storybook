import Checkbox from "./Checkbox";

const meta = {
  title: "components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: { type: "text" } },
    checked: { control: { type: "boolean" } },
    color: { control: { type: "text" } },
  },
};

export default meta;

export const Without_Label = {
  args: {
    label: null,
    checked: false,
    color: "gray",
  },
};
export const With_Label = {
  args: {
    label: "Label태그가 존재할 때",
    checked: false,
  },
};
export const Checked = {
  args: {
    label: "체크된 상태",
    checked: true,
    color: "gray",
  },
};
export const Checked_Red = {
  args: {
    label: "체크박스 Red",
    checked: true,
    color: "red",
  },
};
export const Checked_Blue = {
  args: {
    label: "체크박스 Blue",
    checked: true,
    color: "blue",
  },
};
export const Checked_Gray = {
  args: {
    label: "체크박스 Gray",
    checked: true,
    color: "gray",
  },
};
