import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup.string().required('*'),
  cpf: Yup.number().typeError("Permitido apenas números").required('*'),
  email: Yup.string().email().required('*'),
  telefone: Yup.number().typeError("Permitido apenas números").required('*'),
  dataNascimento: Yup.date().required('*'),
  salario: Yup.number().typeError("Permitido apenas números").required('*'),
  dataContratacao: Yup.date().required('*')
});