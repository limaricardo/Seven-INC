import React from 'react'
import { useField } from 'formik'

const Field = ({ label, component: InputComponent, ...props }) => {
  
  const [inputProps, meta] = useField(props);
  const id = props.id || props.name
  
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <InputComponent id={id} {...inputProps} {...props} />
      {meta.error && meta.touched && <div>{meta.error.toString()}</div>}
    </>
  );
};

Field.defaultProps = {
  component: 'input'
};

export default Field;
