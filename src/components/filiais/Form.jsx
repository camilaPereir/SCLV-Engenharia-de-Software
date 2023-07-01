/* eslint-disable react/prop-types */
import FormButtons from "../utils/FormButtons";
import FormInput from "../utils/FormInput";

const FormFilial = ({ handleSubmit, handleChange, errors, inputs }) => {
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="nome" label="Nome da Filial" placeholder="Nome do Filial" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
      <FormInput type="number" field="limite_diario" label="Limite Diario" placeholder="Limite Diario" error={errors?.limite_diario} onChange={handleChange} value={inputs?.limite_diario} />
      <FormInput type="text" field="rua" label="Rua" placeholder="Rua do Filial" error={errors?.rua} onChange={handleChange} value={inputs?.rua} />
      <FormInput type="number" field="numero" label="Numero" placeholder="Numero" error={errors?.numero} onChange={handleChange} value={inputs?.numero} />
      <FormInput type="text" field="cidade" label="Cidade" placeholder="Cidade da Filial" error={errors?.cidade} onChange={handleChange} value={inputs?.cidade} />
      <FormInput type="text" field="bairro" label="Bairro" placeholder="Bairro da Filial" error={errors?.bairro} onChange={handleChange} value={inputs?.bairro} />
      <FormInput type="text" field="cnpj" label="CNPJ" placeholder="CNPJ" error={errors?.cnpj} onChange={handleChange} value={inputs?.cnpj} />
      <FormButtons cancelTarget="/filiais" />
    </form>
  );
}

export default FormFilial