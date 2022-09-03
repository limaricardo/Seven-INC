import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string(),
  cpf: Yup.number().typeError("Permitido apenas números"),
  email: Yup.string().email(),
  telefone: Yup.number().typeError("Permitido apenas números"),
  dataNascimento: Yup.string(),
  salario: Yup.number().typeError("Permitido apenas números")
});