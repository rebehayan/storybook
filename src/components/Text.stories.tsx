import Text from "./Text";

const meta = {
  title: "components/Text",
  component: Text,
  argTypes: {
    children: { control: { type: "text" } },
    size: { control: { type: "text" } },
  },
};

export default meta;

export const Size_xs = {
  args: {
    children: "콘텐츠 텍스트 삽입",
    size: "xs",
  },
};
export const Size_sm = {
  args: {
    children: "콘텐츠 텍스트 삽입",
    size: "sm",
  },
};
export const Size_lg = {
  args: {
    children: "콘텐츠 텍스트 삽입",
    size: "lg",
  },
};
export const Size_xl = {
  args: {
    children: "콘텐츠 텍스트 삽입",
    size: "xl",
  },
};
