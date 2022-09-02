import React from 'react'
import FormComp from '../UI/Form';
import schema from './schema'

const CreateForm = () => {
  return (
    <div>
      <FormComp schema={schema}>Editar</FormComp>
    </div>
  )
}

export default CreateForm;
