import React from 'react'
import { useField } from 'formik'
import { ContainerField, InputField, LabelInput } from '../Field/styles';

const Field = ({ children, isValid, label, ...props }) => {
  
  const [inputProps, meta] = useField(props);
  const id = props.id || props.name
  
  return (
    <ContainerField>
      <LabelInput>
        {label && <label htmlFor={id}>{label}</label>}
        <InputField id={id} {...inputProps} {...props} />
      </LabelInput>
      {meta.error && <div>{meta.error.toString()}</div>}
    </ContainerField>
  );
};

Field.defaultProps = {
  component: 'input'
};

export default Field;
