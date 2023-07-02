import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "../../lib/finalizacoes/ValidatorFinalizacao";
import { handleChange, validate } from "../../lib/formUtils";
import FormFinalizacao from "../../components/finalizacoes/Form";
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
      axios.post(`${consts.API_URL}/finalizacao`, inputs)
      .then((resp) => {
        if (resp.status == 201) {
          alert("finalizacao inserido com sucesso");
          navigate("/finalizacoes")
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
      <h1>Cadastro de Finalizacoes</h1>
      <hr />
      <FormFinalizacao handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  );
};

export default Register;
