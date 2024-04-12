import React from "react";

interface TextProps {
  children: string;
  size: "xs" | "sm" | "lg" | "xl";
}

const Text = ({ children, size }: TextProps) => {
  return (
    <>
      <div className={`text-gray-400 text leading-relaxed text-${size}`}>{children}</div>
    </>
  );
};

export default Text;
