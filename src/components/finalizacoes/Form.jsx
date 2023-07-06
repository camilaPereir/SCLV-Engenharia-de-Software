/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import FormButtons from "../utils/FormButtons";
import FormInput from "../utils/FormInput";
import { useEffect, useState } from "react";
import FormSelect from "../utils/FormSelect";
import axios from "axios";
import consts from "../../consts";

const FormFinalizacao = ({ handleSubmit, handleChange, errors, inputs, pagamentoConfirmado, setPagamentoConfirmado }) => {

  const [optionsScheduling, setOptionsScheduling] = useState([]);
  const [optionsFormPayments, setOptionsFormPayments] = useState([]);

  const navigate = useNavigate();

  function fetchScheduling() {
    axios.get(`${consts.API_URL}/agendamento`)
      .then((resp) => {
        if (resp.status === 200) {
          const dados = resp.data.map((obj) => {
            return {
              value: obj.id,
              label: obj.id
            };
          });
          setOptionsScheduling(dados);
        } else if (resp.status === 404) {
          navigate("/finalizacoes");
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchFormPayments() {
    axios.get(`${consts.API_URL}/formapagamento`)
      .then((resp) => {
        if (resp.status === 200) {
          const dados = resp.data.map((obj) => {
            return {
              value: obj.id,
              label: obj.forma_pag
            };
          });
          setOptionsFormPayments(dados);
        } else if (resp.status === 404) {
          navigate("/finalizacoes");
        } else {
          console.log(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchScheduling();
    fetchFormPayments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormSelect field="id_agendamento" label="Agendamento" placeholder="Selecione o Agendamento..." error={errors?.id_agendamento} onChange={handleChange} value={inputs?.id_agendamento} options={optionsScheduling} />
      <FormSelect field="id_forma_pagamento" label="Forma de Pagamento" placeholder="Selecione a Forma de Pagamento..." error={errors?.id_forma_pagamento} onChange={handleChange} value={inputs?.id_forma_pagamento} options={optionsFormPayments} />
      <FormInput type="date" field="data_saida" label="Data Saída" placeholder="Data de Saída" error={errors?.data_saida} onChange={handleChange} value={inputs?.data_saida} />
      <FormInput type="text" field="observacoes_saida" label="Observações" placeholder="Observações" error={errors?.observacoes_saida} onChange={handleChange} value={inputs?.observacoes_saida} />
      <div class="form-check form-switch">
        <label class="form-check-label">
          <input class="form-check-input"
            type="checkbox"
            name="pagamento_confirmado"
            checked={pagamentoConfirmado}
            onChange={(e) => setPagamentoConfirmado(e.target.checked)}
          />
          Pagamento Confirmado
        </label>
      </div>
      <FormButtons cancelTarget="/finalizacoes" />
    </form>
  );
}

export default FormFinalizacao