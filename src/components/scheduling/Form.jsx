/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import FormButtons from "../utils/FormButtons";
import FormInput from "../utils/FormInput";
import { useEffect, useState } from "react";
import FormSelect from "../utils/FormSelect";
import axios from "axios";
import consts from "../../consts";

const FormScheduling = ({ handleSubmit, handleChange, errors, inputs }) => {

  const [optionsVehicles, setOptionsVehicles] = useState([]);
  const [optionsTypeServices, setOptionsTypeServices] = useState([]);
    const [optionsEmployees, setOptionsEmployees] = useState([]);


    const navigate = useNavigate();

    function fetchVehicles() {
        axios.get(`${consts.API_URL}/veiculo`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.placa
                        };
                    });
                    setOptionsVehicles(dados);
                } else if (resp.status === 404) {
                    navigate("/agendamentos");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function fetchTypeServices() {
        axios.get(`${consts.API_URL}/tiposervico`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsTypeServices(dados);
                } else if (resp.status === 404) {
                    navigate("/agendamentos");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function fetchEmployees() {
        axios.get(`${consts.API_URL}/funcionario`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsEmployees(dados);
                } else if (resp.status === 404) {
                    navigate("/agendamentos");
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
        fetchTypeServices();
        fetchEmployees();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormSelect field="idfuncionario" label="Funcionário" placeholder="Selecione o Funcionário..." error={errors?.idfuncionario} onChange={handleChange} value={inputs?.idfuncionario} options={optionsEmployees} />
            <FormSelect field="idveiculo" label="Veículo" placeholder="Selecione o Veículo..." error={errors?.idveiculo} onChange={handleChange} value={inputs?.idveiculo} options={optionsVehicles} />
            <FormSelect field="idtipo_servico" label="Tipo de Serviço" placeholder="Selecione o Tipo de Serviço..." error={errors?.idtipo_servico} onChange={handleChange} value={inputs?.idtipo_servico} options={optionsTypeServices} />
            <FormInput type="date" field="data_entrada" label="Data Entrada" placeholder="Data de Entrada" error={errors?.data_entrada} onChange={handleChange} value={inputs?.data_entrada} />
            <FormInput type="text" field="observacoes_entrada" label="Observações" placeholder="Observações" error={errors?.observacoes_entrada} onChange={handleChange} value={inputs?.observacoes_entrada} />
            <FormButtons cancelTarget="/agendamentos" />
        </form>
    );
}

export default FormScheduling