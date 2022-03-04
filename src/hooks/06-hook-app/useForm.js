import { useState } from "react";

export const useForm = (formStateValue = {}) => {
  const [formState, setFormState] = useState(formStateValue);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return {
    formState,
    handleInputChange,
  };
};
