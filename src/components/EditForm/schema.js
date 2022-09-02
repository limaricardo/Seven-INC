import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string(),
  cpf: Yup.number(),
  email: Yup.string(),
  telefone: Yup.number(),
  dataNascimento: Yup.date(),
  salario: Yup.number(),
});