import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/utils/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";
import consts from "../../consts";

const Exclusao = () => {
  const [finalizacao, setFinalizacao] = useState({});
  const id = useParams().id;

  const navigate = useNavigate();

  function carregarDados() {
    // setInputs({ ...inputs, id: id });
    axios
      .get(`${consts.API_URL}/finalizacao/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          setFinalizacao(resp.data);
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
      .delete(`${consts.API_URL}/finalizacao/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          alert("Finalizacao excluída com sucesso!");
          navigate("/finalizacoes");
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
      <h1>Exclusão de Finalizacao</h1>
      <hr />
      <p className="lead">Deseja realmente excluir o finalizacao {finalizacao.nome}?</p>
      <FormButtons cancelTarget="/finalizacoes" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} />
    </>
  );
};

export default Exclusao;
