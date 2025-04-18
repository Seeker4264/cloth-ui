import React from "react";
import { Button } from "#components/button/index.tsx";
import { ToastProvider } from "#components/toast/index.tsx";
import { useToast } from "#components/toast/toastContext.tsx";

const ToastExampleInner: React.FC = () => {
  const toast = useToast();

  return (
    <Button
      disabled={false}
      text={"Submit"}
      onClick={() => toast.open("Hello World!")}
      variant="primary"
    />
  );
};

const ToastExample: React.FC = () => {
  return (
    <ToastProvider>
      <ToastExampleInner />
    </ToastProvider>
  );
};

export default ToastExample;
