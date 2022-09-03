import React from "react";
import { Formik, Form } from "formik";
import "./styles.js";

import Field from '../../UI/Field'
import Button from '../../UI/Button'
import { FieldContainer, ButtonContainerDiv } from "./styles.js";

const keysArrayForm = [
  "nome",
  "cpf",
  "email",
  "telefone",
  "dataNascimento",
  "salario",
];

const typesArrayForm = [
  "nome",
  "cpf",
  "email",
  "telefone",
  "dataNascimento",
  "salario",
];

function FormComp({ legend, children, schema, ...props }) {
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          nome: "",
          cpf: "",
          email: "",
          telefone: "",
          dataNascimento: "",
          salario: "",
        }}
      >
        {({ isValid }) => (
          <FieldContainer>
            <Form style={{width: "100%", padding: "25px", textAlign: "center"}}>
            <h2>{props.title}</h2>
            {keysArrayForm.map((key, index) => {
              return (
                <div key={index}>
                  <Field
                    id={key}
                    name={key}
                    type="text"
                    label={key}
                  />
                </div>
              );
            })}
            {legend && <p style={{fontSize: "12px", marginTop: "15px"}}>{legend}</p>}
            <ButtonContainerDiv> 
              <Button style={{height: "30px"}} type="submit" disabled={!isValid}>
                {children}
              </Button>
            </ButtonContainerDiv>            
          </Form>
          </FieldContainer>
        )}
      </Formik>
    </div>
  );
}

export default FormComp;
