import React from "react";
import { Formik, Form } from "formik";
import "./styles.js";

import Field from '../../UI/Field'
import Button from '../../UI/Button'
import { ContainerField } from "./styles.js";

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

function FormComp({ children, schema, ...props }) {
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
        {({ values, errors, touched, isValid }) => (
          <ContainerField>
            <Form>
            {keysArrayForm.map((key) => {
              return (
                <div>
                  <Field
                    id={key}
                    name={key}
                    type="text"
                    label={key}
                  />
                </div>
              );
            })}
            <Button type="submit" disabled={!isValid}>
              {children}
            </Button>
          </Form>
          </ContainerField>
        )}
      </Formik>
    </div>
  );
}

export default FormComp;
