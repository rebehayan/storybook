import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  size: "lg" | "xl" | "2xl";
  color: "red" | "blue" | "green";
}
interface ButtonStyle {
  paddingX: string;
  paddingY: string;
  fontSize: string;
  paddingX: string;
  paddingY: string;
  fontSize: string;
}

const Button = ({ children, size, color }: ButtonProps) => {
  let buttonStyle: ButtonStyle = {
    paddingX: "",
    paddingY: "",
    fontSize: "",
    borderColor: "",
    color: "",
    backgroundColor: "",
  };

  if (size === "lg") {
    buttonStyle = {
      paddingX: "py-2",
      paddingY: "px-5",
      fontSize: "text-lg",
    };
  } else if (size === "xl") {
    buttonStyle = {
      paddingX: "py-3",
      paddingY: "px-6",
      fontSize: "text-xl",
    };
  } else if (size === "2xl") {
    buttonStyle = {
      paddingX: "py-4",
      paddingY: "px-7",
      fontSize: "text-2xl",
    };
  }
  if (color === "red") {
    buttonStyle.borderColor = "border-red-700";
    buttonStyle.color = "text-white";
    buttonStyle.backgroundColor = "bg-red-700";
  } else if (color === "blue") {
    buttonStyle.borderColor = "border-blue-700";
    buttonStyle.color = "text-white";
    buttonStyle.backgroundColor = "bg-blue-700";
  } else if (color === "green") {
    buttonStyle.borderColor = "border-green-700";
    buttonStyle.color = "text-white";
    buttonStyle.backgroundColor = "bg-green-700";
  }

  return (
    <>
      <button className={`inline-flex gap-1 border rounded-lg ${Object.values(buttonStyle).join(" ")}`}>{children}</button>
    </>
  );
};
export default Button;
