export const requiredVal =
  (message = "This field is required") =>
  (value: string) => {
    if (!value || value.trim() === "") return message;
    return undefined;
  };

export const minLengthVal =
  (length: number, message?: string) => (value: string) => {
    if (value.length < length) {
      return message || `Must be at least ${length} characters`;
    }
    return undefined;
  };

export const maxLengthVal =
  (length: number, message?: string) => (value: string) => {
    if (value.length > length) {
      return message || `Must be no more than ${length} characters`;
    }
    return undefined;
  };

export const emailVal =
  (message = "Please enter a valid email") =>
  (value: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(value)) return message;
    return undefined;
  };
