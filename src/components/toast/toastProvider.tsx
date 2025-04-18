import { ReactNode, useState } from "react";
import ToastContext from "./toastContext";
import { AnimatePresence, motion } from "motion/react";

type toastType = "standard" | "success" | "error";

export interface ToastProps {
  id: string;
  text: string;
  type: toastType;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const open = (
    text: string,
    type: toastType = "standard",
    timeout: number = 5000
  ) => {
    const id = Date.now().toString();
    setToasts((toasts) => [...toasts, { id, text, type }]);

    setTimeout(() => close(id), timeout);
  };

  const close = (id: string) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  const animations = {
    hidden: { transform: "translateX(200%)" },
    visible: {
      transform: "translateX(0px)",
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 33,
        stiffness: 500,
      },
    },
    exit: { transform: "translateX(200%)", transition: { duration: 0.2 } },
  };

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className="space-y-2 absolute overflow-hidden top-5 right-5 flex flex-col items-end">
        <AnimatePresence>
          {toasts.map(({ id, text, type }) => {
            console.log(type);
            return (
              <motion.div
                key={id}
                id={id}
                className={`flex flex-row-reverse justify-between gap-2 min-w-[10rem] w-fit min-h-[1.5rem] h-fit
                rounded-lg border-2
                ${type === "standard" && "border-[#888] bg-[#FFF]"}
                ${type === "success" && "border-[#43EC33] bg-[#F1FFF1CC]"}
                ${type === "error" && "border-[#EC3333] bg-[#FFF1F1AA]"}
                pl-5 pr-3 py-3 m-2`}
                initial={animations.hidden}
                animate={animations.visible}
                exit={animations.exit}
              >
                <button
                  className={`group p-1 w-fit rounded-full cursor-pointer
                  ${type === "standard" && "hover:bg-[#D4E3FF] active:bg-[#AECAFF]"}
                  ${type === "success" && "hover:bg-[#D4FFD5] active:bg-[#AEFFAF]"}
                  ${type === "error" && "hover:bg-[#FFD4D4] active:bg-[#FFAEAE]"}
                  hover:bg-[#D4E3FF]
                  active:bg-[#AECAFF]
                  duration-150`}
                  onClick={() => close(id)}
                >
                  <svg
                    className={`size-5
                    ${type === "standard" && "text-[#333333] group-hover:text-[#003EAA]"}
                    ${type === "success" && "text-[#195E13] group-hover:text-[#00AA14]"}
                    ${type === "error" && "text-[#5E1313] group-hover:text-[#AA0000]"}
                    duration-150`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <span
                  className={`font-medium
                  ${type === "standard" && "text-[#666]"}
                  ${type === "success" && "text-[#10C100]"}
                  ${type === "error" && "text-[#EC3333]"}`}
                >
                  {text}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
