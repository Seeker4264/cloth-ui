import { ReactNode, useRef } from "react";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  id: string;
  submit: () => unknown;
  children: ReactNode;
}

export const Form: React.FC<FormProps> = ({
  id,
  children,
  submit,
  ...props
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let invalidations = 0;

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

            invalidations++;
          }
        }
      }
    }

    if (invalidations === 0) submit();
  };

  return (
    <form id={id} ref={formRef} onSubmit={handleSubmit} noValidate {...props}>
      {children}
    </form>
  );
};
