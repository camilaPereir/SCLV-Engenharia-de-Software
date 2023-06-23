import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/utils/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
  const [filial, setFilial] = useState({});
  const id = useParams().id;

  const navigate = useNavigate();

  function carregarDados() {
    // setInputs({ ...inputs, id: id });
    axios
      .get(`http://localhost:3333/filial/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          setFilial(resp.data);
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
      .delete(`http://localhost:3333/filial/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          alert("Filial excluído com sucesso!");
          navigate("/filiais");
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
      <h1>Exclusão de Filial</h1>
      <hr />
      <p className="lead">Deseja realmente excluir a Filial {filial.nome}?</p>
      <FormButtons cancelTarget="/filiais" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} />
    </>
  );
};

export default Exclusao;
