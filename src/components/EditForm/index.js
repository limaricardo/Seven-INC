import React from "react";
import FormComp from "../UI/Form";
import schema from "./schema";

const EditForm = ({ employee }) => {
  return (
    <div>
      <FormComp
        initialValues={employee}
        legend={"* - Preencher campo obrigatório."}
        title={"Editar informações do funcionário"}
        schema={schema}
        toastText={"Informação de funcionário alterada com sucesso!"}
      >
        Editar
      </FormComp>
    </div>
  );
};

export default EditForm;
