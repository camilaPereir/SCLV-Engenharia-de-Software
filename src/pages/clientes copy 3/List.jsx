import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css";
import { useState } from "react";

const List = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClientes = () => {
    axios.get("http://localhost:3333/cliente/")
    .then((resp) => {
      setClientes(resp.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Clientes</h1>
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
              <th>CPF</th>
              <th>Telefone</th>
              <th>Senha</th>
              <th>Rua</th>
              <th>Numero</th>
              <th>Cidade</th>
              <th>Bairro</th>
              <th>Data de Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.senha}</td>
                <td>{cliente.rua}</td>
                <td>{cliente.numero}</td>
                <td>{cliente.cidade}</td>
                <td>{cliente.bairro}</td>
                <td>{cliente.data_nascimento}</td>
                <td>
                  <>
                    <Link className="btn btn-sm btn-success me-1" to={`/clientes/alterar/${cliente.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/clientes/excluir/${cliente.id}`}>
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