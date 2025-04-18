import React from "react";
import { Button, ToastProvider, useToast } from "#main";

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
