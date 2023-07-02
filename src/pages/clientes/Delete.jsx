import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/utils/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";
import consts from "../../consts";

const Exclusao = () => {
  const [aluno, setAluno] = useState({});
  const id = useParams().id;

  const navigate = useNavigate();

  function carregarDados() {
    // setInputs({ ...inputs, id: id });
    axios
      .get(`${consts.API_URL}/cliente/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          setAluno(resp.data);
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
      .delete(`${consts.API_URL}/cliente/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          alert("Cliente excluído com sucesso!");
          navigate("/clientes");
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
      <h1>Exclusão de Aluno</h1>
      <hr />
      <p className="lead">Deseja realmente excluir o aluno {aluno.nome}?</p>
      <FormButtons cancelTarget="/clientes" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} />
    </>
  );
};

export default Exclusao;
