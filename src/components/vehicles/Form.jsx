/* eslint-disable react/prop-types */
import FormButtons from "../utils/FormButtons";
import FormInput from "../utils/FormInput";

const FormVehicles = ({ handleSubmit, handleChange, errors, inputs }) => {
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <FormInput type="text" field="placa" label="Placa" placeholder="Placa do Veículo" error={errors?.placa} onChange={handleChange} value={inputs?.placa} />
      <FormInput type="text" field="marca" label="Marca" placeholder="Marca do Veículo" error={errors?.marca} onChange={handleChange} value={inputs?.marca} />
      <FormInput type="text" field="modelo" label="Modelo" placeholder="Modelo do Veículo" error={errors?.modelo} onChange={handleChange} value={inputs?.modelo} />
      <FormInput type="text" field="cor" label="Cor" placeholder="Cor do Veículo" error={errors?.cor} onChange={handleChange} value={inputs?.cor} />
      <FormInput type="number" field="ano" label="Ano" placeholder="Ano do Veículo" error={errors?.ano} onChange={handleChange} value={inputs?.ano} />
      <FormButtons cancelTarget="/veiculos" />
    </form>
  );
}

export default FormVehicles