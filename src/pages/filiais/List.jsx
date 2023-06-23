import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css";
import { useState } from "react";

const List = () => {
  const [filiais, setFiliais] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiliais = () => {
    axios.get("http://localhost:3333/filial/")
    .then((resp) => {
      setFiliais(resp.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchFiliais();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Filiais</h1>
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
              <th>Limite Diario</th>
              <th>Rua</th>
              <th>Bairro</th>
              <th>Cidade</th>
              <th>Numero</th>
              <th>CNPJ</th>
            </tr>
          </thead>
          <tbody>
            {filiais.map((filial) => (
              <tr key={filial.id}>
                <td>{filial.id}</td>
                <td>{filial.nome}</td>
                <td>{filial.limite_diario}</td>
                <td>{filial.rua}</td>
                <td>{filial.bairro}</td>
                <td>{filial.cidade}</td>
                <td>{filial.numero}</td>
                <td>{filial.cnpj}</td>
                <td>
                  <>
                    <Link className="btn btn-sm btn-success me-1" to={`/filiais/alterar/${filial.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/filiais/excluir/${filial.id}`}>
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