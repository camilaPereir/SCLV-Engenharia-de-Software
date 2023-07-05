/* eslint-disable react/prop-types */
import FormButtons from "../utils/FormButtons";
import FormInput from "../utils/FormInput";

const FormTypeService = ({ handleSubmit, handleChange, errors, inputs }) => {

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="number" field="preco" label="Preço" placeholder="Preço" error={errors?.preco} onChange={handleChange} value={inputs?.preco} />
            <FormInput type="text" field="descricao" label="Descrição" placeholder="Descrição" error={errors?.descricao} onChange={handleChange} value={inputs?.descricao} />
            <FormInput type="number" field="tempo_medio" label="Tempo Médio" placeholder="Tempo Médio do Serviço" error={errors?.tempo_medio} onChange={handleChange} value={inputs?.tempo_medio} />
            <FormButtons cancelTarget="/veiculos" />
        </form>
    );
}

export default FormTypeService