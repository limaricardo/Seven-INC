import React from 'react'
import FormComp from '../UI/Form';
import schema from './schema';

const CreateForm = () => {
  return (
    <div>
      <FormComp title={"Cadastro de funcionário"} legend={"* - Preencher campo obrigatório."} schema={schema}>Criar</FormComp>
    </div>
  )
}

export default CreateForm;
