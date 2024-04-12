import React, { useId } from "react";
import icoCheck from "../assets/ico_check.svg";
import icoChecked from "../assets/ico_checked.svg";

interface CheckboxProps {
  label: string;
  checked: boolean;
  color: "red" | "blue" | "green";
}

const Checkbox = ({ label, checked, color = "gray" }: CheckboxProps) => {
  const id = useId();

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        id={`chk-${id}`}
        style={checked ? { backgroundImage: `url(${icoChecked}) ` } : { backgroundImage: `url(${icoCheck}) ` }}
        className={`rounded cursor-pointer w-5 h-5 mr-2 appearance-none bg-white bg-no-repeat bg-center bg-contain border-2 border-solid border-gray-300 align-[-0.2rem] checked:shadow-md bg-i disabled:opacity-50
         ${color === "red" && "checked:bg-rose-600 checked:border-rose-600"}
         ${color === "blue" && "checked:bg-blue-600 checked:border-blue-600"}
         ${color === "gray" && "checked:bg-zinc-400 checked:border-zinc-400"}
        `}
      />
      {label && (
        <label htmlFor={`chk-${id}`} className="ml-2">
          {label}
        </label>
      )}
    </>
  );
};

export default Checkbox;
