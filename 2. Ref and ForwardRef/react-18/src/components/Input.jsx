import { forwardRef } from "react";

const Input = forwardRef(({ label, ...props }, ref) => {
  return (
    <div>
      <label>{label} : </label>
      <input ref={ref} {...props} />
    </div>
  );
});

export default Input;
