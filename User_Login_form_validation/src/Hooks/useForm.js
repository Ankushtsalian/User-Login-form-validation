import { useState, useEffect } from "react";

const useForm = (validate, callback) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password1: "",
    password2: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmit] = useState(false);
  //whenever change it must change some value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
