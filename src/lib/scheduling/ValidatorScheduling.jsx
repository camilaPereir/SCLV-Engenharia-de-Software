import * as yup from "yup";

const validator = yup.object().shape({
  idveiculo: yup.number("Somente números.").required("Veículo é obrigatório."),
  idtipo_servico: yup.number("Somente números.").required("Tipo de Serviço é obrigatório."),
  data_entrada: yup.string().required("Data de entrada é obrigatória."),
});

export default validator;