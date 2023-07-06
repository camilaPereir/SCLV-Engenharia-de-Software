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
  const [pagamentoConfirmado, setPagamentoConfirmado] = useState(false);

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
      const postData = {
        ...inputs,
        agendamento: { id: inputs.id_agendamento },
        forma_pagamento: { id: inputs.id_forma_pagamento },
        conf_pag: pagamentoConfirmado
      };
      console.log(postData);
      axios.post(`${consts.API_URL}/finalizacao`, postData)
      .then((resp) => {
        if (resp.status == 200) {
          alert("finalizacao inserido com sucesso");
          navigate("/finalizacoes")
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
      <h1>Cadastro de Finalizacoes</h1>
      <hr />
      <FormFinalizacao handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors}  pagamentoConfirmado={pagamentoConfirmado} // Passa o estado para o componente FormFinalizacao
        setPagamentoConfirmado={setPagamentoConfirmado} />
    </>
  );
};

export default Register;
