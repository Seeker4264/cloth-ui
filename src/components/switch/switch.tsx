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
        className={`flex w-12 h-fit p-1 rounded-full ${checked ? "bg-[#459CFF] group-hover:bg-[#6FB2FF]" : "bg-[#888888] group-hover:bg-[#AAAAAA]"} duration-150`}
      >
        <span
          className={`size-5 rounded-full bg-white group-active:bg-[#EEEEEE] ${checked ? "translate-x-full" : "translate-0"} duration-150 ease-out`}
        />
      </div>
    </button>
  );
};
