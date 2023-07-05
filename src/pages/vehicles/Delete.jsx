import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/utils/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";
import consts from "../../consts";

const Delete = () => {
  const [vehicle, setVehicle] = useState({});
  const id = useParams().id;

  const navigate = useNavigate();

  function fetchData() {
    // setInputs({ ...inputs, id: id });
    axios
      .get(`${consts.API_URL}/veiculo/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          setVehicle(resp.data);
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

  function handleDelete() {
    axios
      .delete(`${consts.API_URL}/veiculo/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          alert("Veículo excluído com sucesso!");
          navigate("/veiculos");
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
      <h1>Exclusão de Veículo</h1>
      <hr />
      <p className="lead">Deseja realmente excluir o Veículo {vehicle.placa}?</p>
      <FormButtons cancelTarget="/veiculos" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} />
    </>
  );
};

export default Delete;
