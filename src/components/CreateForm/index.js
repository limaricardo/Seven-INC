import React from 'react'
import FormComp from '../UI/Form';
import schema from './schema';

const initialValues = {
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    salario: "",
    dataContratacao: "",
}

const CreateForm = () => {
  return (
    <div>
      <FormComp initialValues={initialValues} title={"Cadastro de funcionário"}  legend={"* - Preencher campo obrigatório."} schema={schema}>Criar</FormComp>
    </div>
  )
}

export default CreateForm;
