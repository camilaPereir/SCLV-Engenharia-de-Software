import * as yup from "yup";

const validator = yup.object().shape({
  idcliente: yup.number("Somente números.").required("Cliente é obrigatório."),
  placa: yup.string().min(7, "Placa deve conter no mínimo 7 caracteres.").max(8, "Placa deve conter no máximo 8 caracteres.").required("Placa é obrigatório."),
  marca: yup.string().required("Marca é obrigatório."),
  modelo: yup.string().required("Modelo é obrigatório."),
  cor: yup.string().required("Cor é obrigatório."),
  ano: yup.number("Campo numérico.").required("Ano é obrigatório."),
});

export default validator;