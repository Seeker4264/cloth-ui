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
        damping: 30,
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
            return (
              <motion.div
                key={id}
                id={id}
                className={`flex flex-row justify-between items-stretch gap-2 m-2 min-w-[10rem] w-fit max-w-[24rem] min-h-[1.5rem] h-fit
                rounded-lg border-2
                ${type === "standard" && "border-[#3380EC] bg-[#F1F9FFCC]"}
                ${type === "success" && "border-[#3AB37C] bg-[#F1FFF1CC]"}
                ${type === "error" && "border-[#EC3333] bg-[#FFF1F1AA]"}`}
                initial={animations.hidden}
                animate={animations.visible}
                exit={animations.exit}
              >
                <div
                  className={`w-fit p-3
                  ${type === "standard" && "bg-[#3380EC]"}
                  ${type === "success" && "bg-[#3AB37C]"}
                  ${type === "error" && "bg-[#EC3333]"}
                  `}
                >
                  {type === "standard" && (
                    <svg
                      className="size-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  )}
                  {type === "success" && (
                    <svg
                      className="size-6 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  {type === "error" && (
                    <svg
                      className="size-6 text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <line x1="18" y1="6" x2="6" y2="18" />{" "}
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  )}
                </div>
                <span
                  className={`font-medium p-3
                  ${type === "standard" && "text-[#666]"}
                  ${type === "success" && "text-[#00c113]"}
                  ${type === "error" && "text-[#EC3333]"}`}
                >
                  {text}
                </span>
                <button
                  className={`group p-1 size-fit rounded-full cursor-pointer m-3
                  ${type === "standard" && "hover:bg-[#D4E3FF] active:bg-[#AECAFF]"}
                  ${type === "success" && "hover:bg-[#D5FFEC] active:bg-[#AFFFDB]"}
                  ${type === "error" && "hover:bg-[#FFD4D4] active:bg-[#FFAEAE]"}
                  duration-150`}
                  onClick={() => close(id)}
                >
                  <svg
                    className={`size-5
                    ${type === "standard" && "text-[#112F5D] group-hover:text-[#003EAA]"}
                    ${type === "success" && "text-[#115D3B] group-hover:text-[#00894b]"}
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
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
