export const validate = (postInputs, inputs, setErrors, validator) => {
  validator.validate(inputs, { abortEarly: false })
      .then(() => {
          setErrors({});
          if (postInputs) postInputs();
      })
      .catch((error) => {
          setErrors({});
          console.log(error)
          error.inner.forEach((err) => {
              setErrors((prevErrors) => ({ ...prevErrors, [err.path]: err.message }));
          });
      });
}

export const handleChange = (event, setInputs, inputs) => {
  const name = event.target.name;
  const value = event.target.value;
  //setInputs({ ...inputs, [name]: value });
  //opção sem necessidade da variável de estado no parâmetro
  setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
}