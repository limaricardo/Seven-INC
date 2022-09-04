import React from "react";
import { useState } from "react";
import { STable, STHead, STHeadTR, STH, STBody, STBodyTR, STD } from "./styles";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Link } from "react-router-dom";
import MoreInfo from "../MoreInfo";

const keysArray = ["nome", "email", "telefone", "dataContratacao"];

const EmployeeTable = ({ data }) => {
  const [dados, setDados] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const [emailId, setEmailId] = useState('')

  const handleDelete = (index) => {
    if (index >= 0) {
      setDados(dados.filter((item, i) => i !== index));
    }
  };

  const onExpandClick = (obj) => {
    setShowModal(true)
    setEmailId(obj.email)
  }

  return (
    <>
      <STable>
        <STHead>
          <STHeadTR>
            {["#", ...keysArray, "Mais Info", "Editar", "Deletar"].map(
              (item, index) => (
                <STH key={index}>{item}</STH>
              )
            )}
          </STHeadTR>
        </STHead>
        <STBody>
          {dados.map((obj, index) => (
            <STBodyTR key={index} id={obj["email"]}>
              <STD>{index + 1}</STD>
              {keysArray.map((item, index) => {
                const value = obj[item];
                return <STD key={index}>{value}</STD>;
              })}
              <STD>
                <Link to="#">
                  <OpenInFullIcon
                    onClick={() => onExpandClick(obj)}
                    style={{ height: "20px" }}
                  />
                </Link>
              </STD>
              <STD>
                <Link to="/edit" className="edit">
                  <EditIcon style={{ height: "20px" }} />
                </Link>
              </STD>
              <STD>
                <Link to="#" className="trash">
                  <DeleteIcon
                    onClick={(e) => handleDelete(index)}
                    style={{ height: "20px" }}
                  />
                </Link>
              </STD>
            </STBodyTR>
          ))}
        </STBody>
      </STable>
      <MoreInfo data={data} emailId={emailId} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default EmployeeTable;
