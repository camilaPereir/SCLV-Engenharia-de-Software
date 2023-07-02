import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "../../lib/filiais/ValidatorFilial";
import { handleChange, validate } from "../../lib/formUtils";
import FormFilial from "../../components/filiais/Form";
import consts from "../../consts";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validatorFields(postInputs) {
    validate(postInputs, inputs, setErrors, validator)
  }

  function handleChangeLocal(e) {
    handleChange(e, setInputs, inputs)
  }

  function handleSubmit(e) {
    e.preventDefault();
    validatorFields(() => {
      axios.post(`${consts.API_URL}/filial/`, inputs)
      .then((resp) => {
        if (resp.status == 201) {
          alert("Filial inserida com sucesso");
          navigate("/filiais")
        }
      });
      console.log("Enviou dados para a API")
    });
  }

  useEffect(() => {
    validatorFields();
  }, [inputs]);

  return (
    <>
      <h1>Cadastro de Filial</h1>
      <hr />
      <FormFilial handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  );
};

export default Register;
