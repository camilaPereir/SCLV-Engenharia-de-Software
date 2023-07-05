import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/utils/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";
import consts from "../../consts";

const Delete = () => {
  const [typeService, setTypeService] = useState({});
  const id = useParams().id;

  const navigate = useNavigate();

  function carregarDados() {
    // setInputs({ ...inputs, id: id });
    axios
      .get(`${consts.API_URL}/tiposervico/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          setTypeService(resp.data);
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    carregarDados();
  }, [id]);

  function handleDelete() {
    axios
      .delete(`${consts.API_URL}/tiposervico/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          alert("Tipo de Serviço excluído com sucesso!");
          navigate("/tiposervicos");
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <h1>Exclusão de Tipo de Serviço</h1>
      <hr />
      <p className="lead">Deseja realmente excluir o Tipo de Serviço {typeService.nome}?</p>
      <FormButtons cancelTarget="/tiposervicos" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} />
    </>
  );
};

export default Delete;
