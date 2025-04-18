import React from "react";
import { Button, ToastProvider, useToast } from "#main";

const ToastExampleInner: React.FC = () => {
  const toast = useToast();

  return (
    <>
      <div className="flex flex-col gap-2 w-48">
        <Button
          disabled={false}
          text={"Hello World!"}
          onClick={() => toast.open("This is a toast notification")}
          variant="primary"
        />
        <Button
          disabled={false}
          text={"Success"}
          onClick={() => toast.open("Task completed successfully", "success")}
          variant="primary"
        />
        <Button
          disabled={false}
          text={"Failed"}
          onClick={() => toast.open("Task failed with a fatal error", "error")}
          variant="primary"
        />
      </div>
    </>
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
