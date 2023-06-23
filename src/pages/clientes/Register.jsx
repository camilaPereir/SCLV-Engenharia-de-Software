import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "../../lib/clientes/ValidatorCliente";
import { handleChange, validate } from "../../lib/formUtils";
import FormCliente from "../../components/clientes/Form";

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
      axios.post("http://localhost:3333/cliente", inputs)
      .then((resp) => {
        if (resp.status == 201) {
          alert("Cliente inserido com sucesso");
          navigate("/clientes")
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
      <h1>Cadastro de Clientes</h1>
      <hr />
      <FormCliente handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  );
};

export default Register;
