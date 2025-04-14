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
        className="group peer w-0 h-0 hidden"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <label
        htmlFor={id}
        className={`flex items-center cursor-pointer w-12 h-fit p-1 rounded-full peer-disabled:cursor-default
        ${
          checked
            ? "bg-[#459CFF] peer-hover:bg-[#6FB2FF] peer-disabled:bg-[#6595CB]"
            : "bg-[#888888] peer-hover:bg-[#AAAAAA] peer-disabled:bg-[#CCC]"
        }
        duration-150`}
      >
        <span
          className={`size-5 rounded-full bg-white group-active:bg-[#EEEEEE]
          ${checked ? "translate-x-full" : "translate-0"}
          duration-150 ease-out`}
        />
      </label>
    </>
  );
};
