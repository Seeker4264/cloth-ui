import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export type FormValue = string | number | boolean;
export type FormValues = Record<string, FormValue>;
export type FormErrors = Record<string, string>;

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  id: string;
  submit: (data: FormValues) => void | Promise<void>;
  children: ReactNode;
}

export interface FormContextProps {
  values: FormValues;
  setValues: Dispatch<React.SetStateAction<FormValues>>;
  errors: FormErrors;
  setErrors: Dispatch<React.SetStateAction<FormErrors>>;
  handleChange: (
    name: string,
    value: FormValue,
    type?: "string" | "number" | "boolean"
  ) => void;
}

export const FormContext = createContext<FormContextProps>({
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
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (formRef.current) {
      const inputs = Array.from(formRef.current.querySelectorAll("input"));

      for (let i = 0; i < inputs.length; i++) {
        const element = inputs[i];

        switch (element.type) {
          case "checkbox":
            setValues((prev) => ({ ...prev, [element.id]: element.checked }));
            break;
          default:
            setValues((prev) => ({ ...prev, [element.id]: element.value }));
            break;
        }
      }
    }
  }, []);

  const handleChange = (name: string, value: FormValue, type = "string") => {
    let processedValue: FormValue = value;

    if (typeof value !== "boolean") {
      switch (type) {
        case "number":
          processedValue = value === "" ? "" : Number(value);
          break;
        default:
          processedValue = value;
      }
    }

    setValues((prev) => ({ ...prev, [name]: processedValue }));

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
