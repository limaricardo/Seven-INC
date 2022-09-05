import React from "react";
import EditForm from "../../components/EditForm";
import { EditContainer } from "./styles";
import { useParams } from "react-router-dom";
import { dataMock } from "../../components/Mock";

const EditEmployee = () => {

  let { id } = useParams();

  const employee = dataMock.find(item => item.id === id);

  
  return (
    <>
      <EditContainer>
        <EditForm employee={employee} />
      </EditContainer>
    </>
  );
};

export default EditEmployee;
