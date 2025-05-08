import React, { ReactNode, useState } from "react";
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
      <div className="cl:space-y-2 cl:fixed cl:overflow-hidden cl:top-0 cl:md:top-5 cl:right-0 cl:md:right-5 cl:flex cl:flex-col cl:items-end cl:z-[99999] cl:pointer-events-none">
        <AnimatePresence>
          {toasts.map(({ id, text, type }) => {
            return (
              <motion.div
                key={id}
                id={id}
                className={`cl:flex cl:flex-row cl:justify-between cl:items-stretch cl:gap-2 cl:z-[99999] cl:m-2 cl:min-w-[10rem] cl:w-fit cl:max-w-[24rem] cl:min-h-[1.5rem] cl:h-fit
                cl:rounded-lg cl:border-2 cl:pointer-events-auto
                ${type === "standard" && "cl:border-[#3380EC] cl:bg-[#F1F9FFCC]"}
                ${type === "success" && "cl:border-[#3AB37C] cl:bg-[#F1FFF1CC]"}
                ${type === "error" && "cl:border-[#EC3333] cl:bg-[#FFF1F1CC]"}`}
                initial={animations.hidden}
                animate={animations.visible}
                exit={animations.exit}
              >
                <div
                  className={`cl:w-fit cl:p-3
                  ${type === "standard" && "cl:bg-[#3380EC]"}
                  ${type === "success" && "cl:bg-[#3AB37C]"}
                  ${type === "error" && "cl:bg-[#EC3333]"}
                  `}
                >
                  {type === "standard" && (
                    <svg
                      className="cl:size-6 cl:text-white"
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
                      className="cl:size-6 cl:text-white"
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
                      className="cl:size-6 cl:text-white"
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
                  className={`cl:font-medium cl:p-3
                  ${type === "standard" && "cl:text-[#666]"}
                  ${type === "success" && "cl:text-[#00c113]"}
                  ${type === "error" && "cl:text-[#EC3333]"}`}
                >
                  {text}
                </span>
                <button
                  className={`cl:group cl:p-1 cl:size-fit cl:rounded-full cl:cursor-pointer cl:m-3
                  ${type === "standard" && "cl:hover:bg-[#D4E3FF] cl:active:bg-[#AECAFF]"}
                  ${type === "success" && "cl:hover:bg-[#D5FFEC] cl:active:bg-[#AFFFDB]"}
                  ${type === "error" && "cl:hover:bg-[#FFD4D4] cl:active:bg-[#FFAEAE]"}
                  cl:duration-150`}
                  onClick={() => close(id)}
                >
                  <svg
                    className={`cl:size-5
                    ${type === "standard" && "cl:text-[#112F5D] cl:group-hover:text-[#003EAA]"}
                    ${type === "success" && "cl:text-[#115D3B] cl:group-hover:text-[#00894b]"}
                    ${type === "error" && "cl:text-[#5E1313] cl:group-hover:text-[#AA0000]"}
                    cl:duration-150`}
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
