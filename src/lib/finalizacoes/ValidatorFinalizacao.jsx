import * as yup from "yup";

const validator = yup.object().shape({
  id_forma_pagamento: yup.number("Somente números.").required("Forma de pagamento é obrigatório."),
  data_saida: yup.string().required("Data de saída é obrigatória."),
});

export default validator;