import { createContext, useContext } from "react";

export interface ContextProps {
  open: (text: string, timeout?: number) => void;
  close: (id: string) => void;
}

const ToastContext = createContext<ContextProps | null>(null);

export const useToast = () => {
  const currentToastContext = useContext(ToastContext);

  if (!currentToastContext) {
    throw new Error("useToast has to be used within <ToastProvider />");
  }

  return currentToastContext;
};

export default ToastContext;
