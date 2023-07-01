/* eslint-disable react/prop-types */ 
import FormButtons from "../utils/FormButtons";
import FormInput from "../utils/FormInput";

const FormFinalizacao = ({ handleSubmit, handleChange, errors, inputs }) => {
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="data_saida" label="data_saida da Finalizacao" placeholder="data_saida da Finalizacao" error={errors?.placa} onChange={handleChange} value={inputs?.data_saida} />
      <FormInput type="text" field="observacoes_saida" label="observacoes_saida" placeholder="observacoes_saida da Finalizacao" error={errors?.observacoes_saida} onChange={handleChange} value={inputs?.observacoes_saida} />
      <FormInput type="text" field="conf_pag" label="conf_pag" placeholder="conf_pag da Finalizacao" error={errors?.conf_pag} onChange={handleChange} value={inputs?.conf_pag} />
      <FormInput type="text" field="id_agendamento" label="id_agendamento" placeholder="id_agendamento da Finalizacao" error={errors?.id_agendamento} onChange={handleChange} value={inputs?.id_agendamento} />
      <FormInput type="text" field="idforma_pagamento" label="idforma_pagamento" placeholder="idforma_pagamento da Finalizacao" error={errors?.idforma_pagamento} onChange={handleChange} value={inputs?.idforma_pagamento} />
      <FormInput type="text" field="valor_total" label="valor_total" placeholder="valor_total da Finalizacao" error={errors?.valor_total} onChange={handleChange} value={inputs?.valor_total} />
      <FormButtons cancelTarget="/finalizacoes" />
    </form>
  );
}

export default FormFinalizacao