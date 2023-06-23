import * as yup from "yup";

const validator = yup.object().shape({
  idcliente: yup.number("Somente números.").required("Cliente é obrigatório."),
  placa: yup.string().length(7, "Placa deve conter 7 caracteres.").required("Placa é obrigatório."),
  marca: yup.string().required("E-mail é obrigatório."),
  modelo: yup.string().required("Modelo é obrigatório."),
  cor: yup.string().required("Cor é obrigatório."),
  ano: yup.number("Campo numérico.").required("Ano é obrigatório."),
});

export default validator;