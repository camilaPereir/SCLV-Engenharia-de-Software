/* eslint-disable react/prop-types */
import FormButtons from "../utils/FormButtons";
import FormInput from "../utils/FormInput";

const FormFuncionario = ({ handleSubmit, handleChange, errors, inputs }) => {
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="nome" label="Nome do Funcionario" placeholder="Nome do Funcionario" error={errors?.placa} onChange={handleChange} value={inputs?.nome} />
      <FormInput type="text" field="cpf" label="CPF" placeholder="CPF do Funcionario" error={errors?.cpf} onChange={handleChange} value={inputs?.cpf} />
      <FormInput type="text" field="telefone" label="Telefone" placeholder="Telefone do Funcionario" error={errors?.telefone} onChange={handleChange} value={inputs?.telefone} />
      <FormInput type="text" field="email" label="Email" placeholder="Email do Funcionario" error={errors?.email} onChange={handleChange} value={inputs?.email} />
      <FormInput type="password" field="senha" label="Senha" placeholder="Senha do Funcionario" error={errors?.senha} onChange={handleChange} value={inputs?.senha} />
      <FormInput type="text" field="rua" label="Rua" placeholder="Rua do Funcionario" error={errors?.rua} onChange={handleChange} value={inputs?.rua} />
      <FormInput type="number" field="numero" label="Numero" placeholder="Numero" error={errors?.numero} onChange={handleChange} value={inputs?.numero} />
      <FormInput type="text" field="cidade" label="Cidade" placeholder="Cidade do Veículo" error={errors?.cidade} onChange={handleChange} value={inputs?.cidade} />
      <FormInput type="text" field="bairro" label="Bairro" placeholder="Bairro do Funcionario" error={errors?.bairro} onChange={handleChange} value={inputs?.bairro} />
      <FormInput type="date" field="data_nascimento" label="Data de Nascimento" placeholder="Data de Nascimento" error={errors?.data_nascimento} onChange={handleChange} value={inputs?.data_nascimento} />
      <FormButtons cancelTarget="/funcionarios" />
    </form>
  );
}

export default FormFuncionario