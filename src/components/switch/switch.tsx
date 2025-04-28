import React from "react";

export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  disabled?: boolean;
  checked: boolean;
  onChange: () => void;
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  disabled = false,
  checked,
  onChange,
  ...props
}) => {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        className="cl:group cl:peer cl:w-0 cl:h-0 cl:hidden"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label
        htmlFor={id}
        className={`cl:flex cl:items-center cl:cursor-pointer cl:w-12 cl:h-fit cl:p-1 cl:rounded-full cl:peer-disabled:cursor-default
        ${
          checked
            ? "cl:bg-[#2d9ce6] cl:peer-hover:bg-[#47aaeb] cl:peer-disabled:bg-[#7CA2BC] cl:dark:bg-[#459CFF] cl:dark:peer-hover:bg-[#62a9fa] cl:dark:peer-disabled:bg-[#6595CB]"
            : "cl:bg-[#888888] cl:peer-hover:bg-[#999999] cl:peer-disabled:bg-[#555] cl:dark:bg-[#555555] cl:dark:peer-hover:bg-[#777777] cl:dark:peer-disabled:bg-[#222]"
        }
        cl:duration-150`}
      >
        <span
          className={`cl:size-5 cl:rounded-full cl:bg-white cl:group-active:bg-[#EEEEEE]
          ${checked ? "cl:translate-x-full" : "cl:translate-0"}
          cl:duration-150 cl:ease-out`}
        />
      </label>
    </>
  );
};
