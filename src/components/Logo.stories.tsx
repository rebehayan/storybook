import Logo from "./Logo";

const meta = {
  title: "components/Logo",
  component: Logo,
  argTypes: {
    size: { control: { type: "text" } },
  },
};

export default meta;

export const Size_sm = {
  args: {
    size: "sm",
  },
};
export const Size_md = {
  args: {
    size: "md",
  },
};
export const Size_lg = {
  args: {
    size: "lg",
  },
};
export const Size_xl = {
  args: {
    size: "xl",
  },
};
