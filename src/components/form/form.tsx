import { ReactNode, useRef } from "react";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  id: string;
  children: ReactNode;
}

export const Form: React.FC<FormProps> = ({ id, children, ...props }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const form = formRef.current;
    if (form) {
      for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].tagName === "INPUT") {
          const control = form.elements[i] as HTMLInputElement;

          if (!control.value) {
            const controlLabel = control.labels;

            if (controlLabel) {
              control.classList.add("border-red-500");
              controlLabel[0].classList.add("text-red-500");
            }
          } else {
            console.log(control.value);
          }
        }
      }
    }
  };

  return (
    <form id={id} ref={formRef} onSubmit={handleSubmit} noValidate {...props}>
      {children}
    </form>
  );
};
