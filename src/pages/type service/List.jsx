import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css";
import { useState } from "react";
import consts from "../../consts";

const List = () => {
  const [typeServices, setTypeServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVehicles = () => {
    axios.get(`${consts.API_URL}/tiposervico`)
    .then((resp) => {
      setTypeServices(resp.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Tipos de Serviços</h1>
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
              <th>Nome</th>
              <th>Preço</th>
              <th>Tempo Médio</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {typeServices.map((typeService) => (
              <tr key={typeService.id}>
                <td>{typeService.id}</td>
                <td>{typeService.nome}</td>
                <td>{typeService.preco}</td>
                <td>{typeService.tempo_medio}</td>
                <td>{typeService.descricao}</td>
                <td>
                  <>
                    <Link className="btn btn-sm btn-success me-1" to={`/tiposervicos/alterar/${typeService.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/tiposervicos/excluir/${typeService.id}`}>
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