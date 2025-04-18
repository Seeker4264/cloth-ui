import { ReactNode, useState } from "react";
import ToastContext from "./toastContext";
import { AnimatePresence, motion } from "motion/react";

export interface ToastProps {
  id: string;
  text: string;
}

export interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const open = (text: string, timeout: number = 5000) => {
    const id = Date.now().toString();
    setToasts((toasts) => [...toasts, { id, text }]);

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
      <div className="space-y-2 absolute overflow-hidden top-5 right-5">
        <AnimatePresence>
          {toasts.map(({ id, text }) => {
            return (
              <motion.div
                key={id}
                id={id}
                className="relative min-w-[10rem] w-fit min-h-[2rem] h-fit rounded-2xl border border-[#888] p-3 m-2"
                initial={animations.hidden}
                animate={animations.visible}
                exit={animations.exit}
              >
                <button
                  className="group absolute top-2 right-2 p-1 w-fit rounded-full cursor-pointer bg-[#FFFFFF]
                    hover:bg-[#D4E3FF]
                    active:bg-[#AECAFF]
                    duration-150"
                  onClick={() => close(id)}
                >
                  <svg
                    className="size-5 text-[#333333]
                  group-hover:text-[#003EAA]
                  duration-150"
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
                <span>{text}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
