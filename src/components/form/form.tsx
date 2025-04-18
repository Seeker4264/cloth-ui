import { createContext, Dispatch, ReactNode, useRef, useState } from "react";

export type FormValues = Record<string, string>;

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  id: string;
  submit: (data: Record<string, string>) => void | Promise<void>;
  children: ReactNode;
}

export const FormContext = createContext<{
  values: Record<string, string>;
  setValues: Dispatch<React.SetStateAction<Record<string, string>>>;
  errors: Record<string, string>;
  setErrors: Dispatch<React.SetStateAction<Record<string, string>>>;
  handleChange: (name: string, value: string) => void;
}>({
  values: {},
  setValues: () => {},
  errors: {},
  setErrors: () => {},
  handleChange: () => {},
});

export const Form: React.FC<FormProps> = ({
  id,
  children,
  submit,
  ...props
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errorsFound = 0;

    if (formRef.current) {
      const inputs = Array.from(formRef.current.querySelectorAll("input"));

      for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];

        if (element.required && element.value === "") {
          setErrors((prev) => ({
            ...prev,
            [element.id]: "This field is required",
          }));
          errorsFound++;
        }
      }
    }

    if (Object.keys(errors).length === 0 && errorsFound === 0) submit(values);
  };

  return (
    <FormContext.Provider
      value={{ values, setValues, errors, setErrors, handleChange }}
    >
      <form id={id} ref={formRef} onSubmit={handleSubmit} noValidate {...props}>
        {children}
      </form>
    </FormContext.Provider>
  );
};
