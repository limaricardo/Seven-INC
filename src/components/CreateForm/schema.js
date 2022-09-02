import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string().required('*'),
  cpf: Yup.number().required('*'),
  email: Yup.string().email().required('*'),
  telefone: Yup.number().required('*'),
  dataNascimento: Yup.date().required('*'),
  salario: Yup.number().required('*'),
});