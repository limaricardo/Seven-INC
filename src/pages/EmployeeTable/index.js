import React from "react";
import { useState } from "react";
import {STable, STHead, STHeadTR, STH, STBody, STBodyTR, STD } from './styles'

import EditButton from "../../components/UI/EditButton";
import Button from '../../components/UI/Button'

const keysArray = ["nome", "email", "telefone", "contratacao"]

const EmployeeTable = ({data}) => {

  const [dados, setDados] = useState(data)

  const handleDelete = (index) => {
    if(index>=0){
      setDados(dados.filter((item, i) => i !== index))
    }
  }

  return (
    <STable>
      <STHead>
        <STHeadTR>
          {["#", ...keysArray,"Mais Info", "Editar", "Deletar"].map((item, index) => (
            <STH key={index}>
              {item}
            </STH>
          ))}
        </STHeadTR>

      </STHead>
      <STBody>
        {dados.map((obj, index) => (
          <STBodyTR key={index}>
            <STD>{index + 1}</STD>
            {keysArray.map ((item, index) => {
              const value = obj[item];
              return <STD key={index}>{value}</STD>
            })}
            <STD><Button>+ info</Button></STD>
            <STD><EditButton></EditButton></STD>
            <STD><Button onClick={(e) => handleDelete(index)}>Delete</Button></STD>
          </STBodyTR>
        ))}
      </STBody>
    </STable>
  );
};

export default EmployeeTable;
