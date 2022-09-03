import React from 'react'
import FormComp from '../UI/Form';
import schema from './schema'

const EditForm = () => {
  return (
    <div>
      <FormComp title={"Editar informações do funcionário"} schema={schema}>Editar</FormComp>
    </div>
  )
}

export default EditForm;
