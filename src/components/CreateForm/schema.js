import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string().required('*'),
  cpf: Yup.number().typeError("Permitido apenas números").required('*'),
  email: Yup.string().email().required('*'),
  telefone: Yup.number().required('*'),
  dataNascimento: Yup.string().required('*'),
  salario: Yup.number().required('*'),
});