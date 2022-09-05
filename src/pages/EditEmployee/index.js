import React, { useContext } from "react";
import EditForm from "../../components/EditForm";
import { EditContainer } from "./styles";
import { useParams } from "react-router-dom";
import { MockContext } from "../../Context";

const EditEmployee = () => {
  const [dados] = useContext(MockContext);

  //Get id from url params
  let { id } = useParams();

  const employee = dados.find((item) => item.id === id);

  return (
    <>
      <EditContainer>
        <EditForm employee={employee} />
      </EditContainer>
    </>
  );
};

export default EditEmployee;
