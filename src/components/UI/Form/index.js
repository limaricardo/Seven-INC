import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import "./styles.js";

import Field from "../Field";
import Button from "../Button";
import ViewsDatePicker from "../DatePicker";
import { keysArrayForm } from "../../Mock";
import { FieldContainer, ButtonContainerDiv } from "./styles.js";
import { toast } from "react-toastify";
import { MockContext } from "../../../Context/index.js";


function FormComp({initialValues, legend, children, schema, toastText, ...props}) {

  const navigate = useNavigate();

  const [dados, setDados] = useContext(MockContext)

  function onSubmit(values) {
    let employeeIndex;

    if (values?.id) {
      employeeIndex = dados.findIndex(item => item.id === values.id);
      if (employeeIndex >= 0)
        setDados(prev => {
          const _dados = [...prev];
          _dados[employeeIndex] = values;
          return _dados;
        });
    }

    if (!employeeIndex && employeeIndex !== 0) {
      setDados(prev => {
        return [...prev, {
          id: (+(prev[prev.length - 1]?.id || 1) + 1) + '',
          ...values
        }]
      });
    }

    toast.success(toastText, {
        position: toast.POSITION.TOP_CENTER,
      });

    setTimeout(() => {
      navigate('/')
    }, 2000)
    
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
              style={{ width: "100%", padding: "20px", textAlign: "center" }}
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
                          dateValue={
                            key === "dataContratacao"
                              ? initialValues.dataContratacao
                              : initialValues.dataNascimento
                          }
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
