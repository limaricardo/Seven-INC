import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import schema from "./schema";
import "./styles.js";

import Field from '../UI/Field'

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

function FormComp({ labelQuantity, ...props }) {
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  return (
    <div className="Form">
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
                  {/* <label htmlFor={key}>{key}</label>
                  <Field id={key} name={key} type="text" />
                  <ErrorMessage name={key} /> */}
                </div>
              );
            })}
            <button type="submit" disabled={!isValid}>
              Editar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormComp;
