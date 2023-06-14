import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css";
import { useState } from "react";

const List = () => {
  const [vehicles, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVehicles = () => {
    axios.get("http://localhost:3001/veiculos")
    .then((resp) => {
      setVeiculos(resp.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Veiculos</h1>
        <Link className="btn btn-primary" to="cadastrar">
          Novo
        </Link>
      </div>
      <hr />
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"> Carregando...</span>
          </div>
        </div>
      )}

      {!loading && (
        <table className={`table table-striped ${estilos.tabela}`}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Placa</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Cor</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td>{vehicle.id}</td>
                <td>{vehicle.placa}</td>
                <td>{vehicle.marca}</td>
                <td>{vehicle.modelo}</td>
                <td>{vehicle.cor}</td>
                <td>{vehicle.ano}</td>
                <td>
                  <>
                    <Link className="btn btn-sm btn-success me-1" to={`/veiculos/alterar/${vehicle.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/veiculos/excluir/${vehicle.id}`}>
                      <i className="bi bi-trash" title="Excluir"></i>
                    </Link>
                  </>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default List;