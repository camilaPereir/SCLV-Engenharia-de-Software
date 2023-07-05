import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import validator from "../../lib/funcionarios/ValidatorFuncionario";
import { validate, handleChange } from "../../lib/formUtils";
import FormFuncionario from "../../components/funcionarios/Form";
import consts from "../../consts";

const Update = () => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const id = useParams().id;

  if (!id) {
    navigate("/listagem");
  }

  function fetchData() {
    axios
      .get(`${consts.API_URL}/funcionario/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          setInputs(resp.data);
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  function validateFields(postInputs) {
    validate(postInputs, inputs, setErrors, validator);
  }

  function handleChangeLocal(e) {
    handleChange(e, setInputs, inputs);
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateFields(() => {
      axios.put(`${consts.API_URL}/funcionario/${id}`, inputs).then((resp) => {
        if (resp.status == 200) {
          alert("funcionario alterado com sucesso");
          navigate("/funcionarios");
        }
      });
      console.log("Enviou dados para a API");
    });
  }

  useEffect(() => {
    validateFields();
  }, [inputs]);

  return (
    <>
      <h1>Alteração de funcionario</h1>
      <hr />
      <FormFuncionario handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  );
};

export default Update;
