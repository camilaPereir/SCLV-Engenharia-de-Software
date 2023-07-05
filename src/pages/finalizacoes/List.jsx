import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css";
import { useState } from "react";
import consts from "../../consts";

const List = () => {
  const [finalizacoes, setFinalizacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFinalizacoes = () => {
    axios.get(`${consts.API_URL}/finalizacao/`)
    .then((resp) => {
      setFinalizacoes(resp.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchFinalizacoes();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Finalizacoes</h1>
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
              <th>DATA SAIDA</th>
              <th>OBSERVAÇÕES</th>
              <th>PAGAMENTO</th>
              <th>AGENDAMENTO</th>
              <th>VALOR TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {finalizacoes.map((finalizacao) => (
              <tr key={finalizacao.id}>
                <td>{finalizacao.id}</td>
                <td>{finalizacao.data_saida}</td>
                <td>{finalizacao.observacoes_saida}</td>
                <td>{finalizacao.conf_pag}</td>
                <td>{finalizacao.id_agendamento}</td>
                <td>{finalizacao.idforma_pagamento}</td>
                <td>{finalizacao.valor_total}</td>
                <td>
                  <>
                    <Link className="btn btn-sm btn-success me-1" to={`/finalizacoes/alterar/${finalizacao.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/finalizacoes/excluir/${finalizacao.id}`}>
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