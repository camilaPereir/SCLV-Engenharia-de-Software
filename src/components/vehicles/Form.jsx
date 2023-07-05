/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import FormButtons from "../utils/FormButtons";
import FormInput from "../utils/FormInput";
import { useEffect, useState } from "react";
import FormSelect from "../utils/FormSelect";
import axios from "axios";
import consts from "../../consts";

const FormVehicles = ({ handleSubmit, handleChange, errors, inputs }) => {

  const [optionsVehicles, setOptionsVehicles] = useState([]);

    const navigate = useNavigate();

    function fetchVehicles() {
        axios.get(`${consts.API_URL}/cliente`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsVehicles(dados);
                } else if (resp.status === 404) {
                    navigate("/veiculos");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchVehicles();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormSelect field="idcliente" label="Cliente" placeholder="Selecione o Cliente..." error={errors?.idcliente} onChange={handleChange} value={inputs?.idcliente} options={optionsVehicles} />
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