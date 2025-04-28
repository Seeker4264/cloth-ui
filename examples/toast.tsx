import React from "react";
import { Button, ToastProvider, useToast } from "#main";

export interface ToastExampleProps {
  dark?: boolean;
}

const ToastExampleInner: React.FC<ToastExampleProps> = ({ dark }) => {
  const toast = useToast();

  return (
    <>
      <div
        className={`${dark ? "dark" : ""} cl:flex cl:flex-col cl:gap-2 cl:w-48`}
      >
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

const ToastExample: React.FC<ToastExampleProps> = ({ dark = false }) => {
  return (
    <ToastProvider>
      <ToastExampleInner dark={dark} />
    </ToastProvider>
  );
};

export default ToastExample;
