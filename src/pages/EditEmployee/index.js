import React from "react";
import Navbar from "../../components/Navbar";
import EditForm from "../../components/EditForm";
import { EditContainer } from "./styles";

const EditEmployee = () => {
  return (
    <>
      <Navbar />
      <EditContainer>
        <EditForm />
      </EditContainer>
    </>
  );
};

export default EditEmployee;
