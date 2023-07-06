import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "../../lib/scheduling/ValidatorScheduling";
import { handleChange, validate } from "../../lib/formUtils";
import consts from "../../consts";
import FormScheduling from "../../components/scheduling/Form";

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
        veiculo: { id: inputs.idveiculo },
        funcionario: { id: inputs.idfuncionario },
        tipo_servico: { id: inputs.idtipo_servico }
      };
      axios.post(`${consts.API_URL}/agendamento`, postData)
        .then((resp) => {
          if (resp.status == 200) {
            alert("Agendamento inserido com sucesso");
            navigate("/agendamentos")
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
      <h1>Cadastro de Agendamento</h1>
      <hr />
      <FormScheduling handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  );
};

export default Register;
