import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

   // Reset function to clear the input
   const reset = () => {
    setValue(initialValue);
  };

  return {
    value: value, 
    onChange: handleChange,
    reset
};
}