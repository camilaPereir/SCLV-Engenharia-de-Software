import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "../../lib/typeService/ValidatorTypeService";
import { handleChange, validate } from "../../lib/formUtils";
import consts from "../../consts";
import FormTypeService from "../../components/typeService/Form";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validatorFields(postInputs) {
    validate(postInputs, inputs, setErrors, validator)
  }

  function handleChangeLocal(e) {
    handleChange(e, setInputs, inputs, validatorFields)
  }

  function handleSubmit(e) {
    e.preventDefault();
    validatorFields(() => {
      axios.post(`${consts.API_URL}/tiposervico`, inputs)
      .then((resp) => {
        if (resp.status == 200) {
          alert("Tipo de Serviço inserido com sucesso");
          navigate("/tiposervicos")
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
      <h1>Cadastro de Tipo de Serviço</h1>
      <hr />
      <FormTypeService handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  );
};

export default Register;
