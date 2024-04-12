import Badge from "./Badge";

const meta = {
  title: "components/Badges",
  component: Badge,
  argTypes: {
    children: { control: { type: "text" } },
  },
};

export default meta;

export const Primary = {
  args: {
    children: "버튼",
    className: "red",
  },
};
export const Secondary = {
  args: {
    children: "버튼",
    className: "blue",
  },
};
