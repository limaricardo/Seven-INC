import React from "react";
import { Formik, Form } from "formik";
import "./styles.js";

import Field from "../Field";
import Button from "../Button";
import ViewsDatePicker from "../DatePicker";
import { keysArrayForm, dataMock } from "../../Mock";
import { FieldContainer, ButtonContainerDiv } from "./styles.js";

function FormComp({ initialValues, legend, children, schema, ...props }) {
  
  function onSubmit(values, actions) {
    console.log(values)
    let employeeIndex;

    if (values?.id) {
      employeeIndex = dataMock.findIndex(item => item.id === values.id);
      if (employeeIndex)
        dataMock[employeeIndex] = values;
    }

    if (!employeeIndex) {
      dataMock.push({
        id: +(dataMock[dataMock.length - 1]?.id || 1) + 1,
        ...values
      });
    }
  }

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={initialValues}
        enableReinitialize
      >
        {({ isValid, setFieldValue }) => (
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
                        <p className="label-date-picker">
                          {key === "dataContratacao"
                            ? "Data de Contratação"
                            : "Data de Nascimento"}
                        </p>
                        <ViewsDatePicker
                          field={key}                          
                          dateValue={ key === "dataContratacao" ? initialValues.dataContratacao : initialValues.dataNascimento }
                          setFieldValue={setFieldValue}
                        />
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
                  disabled={!isValid}
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
