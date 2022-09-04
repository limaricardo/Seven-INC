import React from 'react'
import { useField } from 'formik'
import { FieldContainer, FieldInput, LabelInput, FieldInputContainer } from './styles';

const Field = ({ children, isValid, label, ...props }) => {
  
  const [inputProps, meta] = useField(props);
  const id = props.id || props.name

 if(label === "salario") {
    label = "Salário"
  }
  
  const firstLetterLabelCap = (label[0].toUpperCase() + label.slice(1)) 
 
  return (
    <FieldContainer>
      <LabelInput>
          {label && <label htmlFor={id}>{firstLetterLabelCap}</label>}
          {meta.error && <div style={{fontSize: "10px", color: "red", marginLeft: "5px"}}>{meta.error.toString()}</div>}
      </LabelInput>
      <FieldInputContainer>
        <FieldInput id={id} placeholder={firstLetterLabelCap} {...inputProps} {...props} />
      </FieldInputContainer>
    </FieldContainer>
  );
};

Field.defaultProps = {
  component: 'input'
};

export default Field;
