import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css";
import { useState } from "react";
import consts from "../../consts";

const List = () => {
  const [scheduling, setScheduling] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchScheduling = () => {
    axios
      .get(`${consts.API_URL}/agendamento?_expand=funcionario&_expand=tiposervico&_expand=veiculo`)
      .then((resp) => {
        setScheduling(resp.data);
        setLoading(false);
      });
    // axios.get(`${consts.API_URL}/agendamento`)
    // .then((resp) => {
    //   setScheduling(resp.data);
    //   setLoading(false);
    // });
  }

  useEffect(() => {
    fetchScheduling();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de agendamentos</h1>
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
              <th>Entrada</th>
              <th>Funcionário</th>
              <th>Veículo</th>
              <th>Tipo de Serviço</th>
              <th>Observações</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {scheduling.map((scheduling) => (
              <tr key={scheduling.id}>
                <td>{scheduling.id}</td>
                <td>{scheduling.data_entrada}</td>
                <td>{scheduling.funcionario.nome}</td>
                <td>{scheduling.veiculo.placa}</td>
                <td>{scheduling.tipo_servico.nome}</td>
                <td>{scheduling.observacoes_entrada}</td>
                <td>{scheduling.status}</td>
                <td>
                  <>
                    <Link className="btn btn-sm btn-success me-1" to={`/agendamentos/alterar/${scheduling.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/agendamentos/excluir/${scheduling.id}`}>
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