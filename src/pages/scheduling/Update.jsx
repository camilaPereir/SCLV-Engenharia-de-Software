import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import validator from "../../lib/scheduling/ValidatorScheduling";
import { validate, handleChange } from "../../lib/formUtils";
import consts from "../../consts";
import FormScheduling from "../../components/scheduling/Form";

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
      .get(`${consts.API_URL}/agendamento/${id}`)
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
      axios.put(`${consts.API_URL}/agendamento/${id}`, inputs).then((resp) => {
        if (resp.status == 200) {
          alert("Agendamento alterado com sucesso");
          navigate("/agendamentos");
        }
      })
        .catch((resp) => {
          alert(resp.response.data.message);
        });
      console.log("Enviou dados para a API");
    });
  }

  useEffect(() => {
    validateFields();
  }, [inputs]);

  return (
    <>
      <h1>Alteração de Agendamento</h1>
      <hr />
      <FormScheduling handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  );
};

export default Update;
