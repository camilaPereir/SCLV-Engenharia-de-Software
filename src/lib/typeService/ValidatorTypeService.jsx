import * as yup from "yup";

const validator = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório."),
  preco: yup.number("Somente números.").required("Preço é obrigatório."),
  tempo_medio: yup.number("Somente números.").required("Tempo Médio é obrigatório."),
});

export default validator;