export const validate = (postInputs, inputs, setErrors, validator) => {
  validator
    .validate(inputs, { abortEarly: false })
    .then(() => {
      setErrors({});
      if (postInputs) postInputs();
    })
    .catch((error) => {
      setErrors({});
      error.inner.forEach((err) => {
        setErrors((prevErrors) => ({ ...prevErrors, [err.path]: err.message }));
      });
    });
}

export const handleChange = (e, setInputs, inputs) => {
  const name = e.target.name;
  const value = e.target.value;
  setInputs({ ...inputs, [name]: value });
  validate();
}
