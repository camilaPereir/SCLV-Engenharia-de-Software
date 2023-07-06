import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css";
import { useState } from "react";
import consts from "../../consts";

const List = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFuncionarios = () => {
    axios.get(`${consts.API_URL}/funcionario/`)
    .then((resp) => {
      setFuncionarios(resp.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchFuncionarios();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Funcionarios</h1>
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
              <th>Nome</th>
              <th>Filial</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Rua</th>
              <th>Numero</th>
              <th>Cidade</th>
              <th>Bairro</th>
              <th>Data de Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((funcionario) => (
              <tr key={funcionario.id}>
                <td>{funcionario.nome}</td>
                <td>{funcionario.filial.nome}</td>
                <td>{funcionario.cpf}</td>
                <td>{funcionario.telefone}</td>
                <td>{funcionario.rua}</td>
                <td>{funcionario.numero}</td>
                <td>{funcionario.cidade}</td>
                <td>{funcionario.bairro}</td>
                <td>{funcionario.data_nascimento}</td>
                <td>
                  <>
                    <Link className="btn btn-sm btn-success me-1" to={`/funcionarios/alterar/${funcionario.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/funcionarios/excluir/${funcionario.id}`}>
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