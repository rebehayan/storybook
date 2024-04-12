import React from "react";
import logo from "../assets/react.svg";

interface LogoProps {
  size: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ size }: LogoProps) => {
  let widthClass = "";
  switch (size) {
    case "sm":
      widthClass = "w-5";
      break;
    case "md":
      widthClass = "w-8";
      break;
    case "lg":
      widthClass = "w-12";
      break;
    case "xl":
      widthClass = "flex w-30 h-30";
      break;

    default:
      break;
  }
  return (
    <>
      <img src={logo} className={widthClass} alt="Logo" />
    </>
  );
};

export default Logo;
