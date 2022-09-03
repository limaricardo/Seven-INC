import React from "react";
import Navbar from "../../components/Navbar";
import CreateForm from "../../components/CreateForm";
import { CreateContainer } from "./styles";

const CreateEmployee = () => {
  return (
    <>
      <Navbar />
      <CreateContainer>
        <CreateForm />
      </CreateContainer>
    </>
  );
};

export default CreateEmployee;
