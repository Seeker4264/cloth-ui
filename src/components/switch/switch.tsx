export interface SwitchProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  checked: boolean;
  onClick: () => void;
}

export const Switch: React.FC<SwitchProps> = ({
  disabled = false,
  checked,
  onClick,
  ...props
}) => {
  return (
    <button
      className="group p-0.5 cursor-pointer"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <div
        className={`flex w-12 h-fit p-1 rounded-full ${checked ? "bg-[#459CFF]" : "bg-[#888888]"} duration-150`}
      >
        <span
          className={`size-5 bg-white rounded-full ${checked ? "translate-x-full" : "translate-0"} duration-150 ease-out`}
        />
      </div>
    </button>
  );
};
