export const lengthMsg = (length: number, type: string = "min") => {
  const starting = type === "min" ? "Minimum" : "Maximum";
  return `${starting} of ${length} characters`;
};

export const requiredMsg = "Required";
export const invalidEmailMsg = "Invalid Email";
