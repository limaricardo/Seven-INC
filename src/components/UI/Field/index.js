import React from 'react'
import { useField } from 'formik'
import { FieldContainer, FieldInput, LabelInput, FieldInputContainer } from './styles';

const Field = ({ children, isValid, label, ...props }) => {
  
  const [inputProps, meta] = useField(props);
  const id = props.id || props.name

  if(label === "dataNascimento") {
    label = "Data de Nascimento"
  }
  
  const firstLetterLabelCap = (label[0].toUpperCase() + label.slice(1)) 

  return (
    <FieldContainer>
      <LabelInput>
        {label && <label htmlFor={id}>{firstLetterLabelCap}</label>}
        <FieldInputContainer>
          <FieldInput id={id} placeholder={firstLetterLabelCap} {...inputProps} {...props} />
          {meta.error && <div style={{color: "red"}}>{meta.error.toString()}</div>}
        </FieldInputContainer>
      </LabelInput>
      
    </FieldContainer>
  );
};

Field.defaultProps = {
  component: 'input'
};

export default Field;
