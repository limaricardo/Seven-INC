import React from "react";
import { Formik, Form } from "formik";
import "./styles.js";

import Field from "../Field";
import Button from "../Button";
import ViewsDatePicker from "../DatePicker";
import { keysArrayForm } from "../../Mock";
import { FieldContainer, ButtonContainerDiv } from "./styles.js";

function FormComp({ initialValues, legend, children, schema, ...props }) {
  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={initialValues}
      >
        {({ isValid }) => (
          <FieldContainer>
            <Form
              style={{ width: "100%", padding: "25px", textAlign: "center" }}
            >
              <h2>{props.title}</h2>
              {keysArrayForm.map((key, index) => {
                return (
                  <div key={index}>
                    {key === "dataContratacao" || key === "dataNascimento" ? (
                      <>
                        <p className="label-date-picker">{key === "dataContratacao" ? key = "Data de Contratação" : key = "Data de Nascimento"}</p>
                        <ViewsDatePicker dateValue={ key === "dataContratacao" ? initialValues.dataContratacao : initialValues.dataNascimento} />
                      </>
                    ) : (
                      <Field id={key} name={key} type="text" label={key} />
                    )}
                  </div>
                );
              })}
              {legend && (
                <p style={{ fontSize: "15px", marginTop: "15px" }}>{legend}</p>
              )}
              <ButtonContainerDiv>
                <Button
                  style={{ height: "30px" }}
                  type="submit"
                >
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
