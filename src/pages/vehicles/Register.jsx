import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "../../lib/vehicles/ValidatorVehicle";
import { handleChange, validate } from "../../lib/formUtils";
import FormVehicle from "../../components/vehicles/Form";
import consts from "../../consts";

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
      const postData = {
        ...inputs,
        cliente: { id: inputs.idcliente }
      };
      axios.post(`${consts.API_URL}/veiculo`, postData)
        .then((resp) => {
          if (resp.status == 200) {
            alert("Veículo inserido com sucesso");
            navigate("/veiculos")
          }
        })
        .catch((resp) => {
          alert(resp.response.data.message);
        });
      console.log("Enviou dados para a API")
    });
  }

  useEffect(() => {
    validatorFields();
  }, [inputs]);

  return (
    <>
      <h1>Cadastro de Veículo</h1>
      <hr />
      <FormVehicle handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  );
};

export default Register;
