import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import dayjs from "dayjs";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInFullIcon from '@mui/icons-material/OpenInFull'

import MoreInfo from "../MoreInfo";
import PaginationSelector from "../UI/PaginationComponent/PaginationSelector";
import PaginationComponent from "../UI/PaginationComponent/PaginationComponent";
import { keysArrayTable, keysArrayTableFormatted } from "../Mock";
import { STable, STHead, STHeadTR, STH, STBody, STBodyTR, STD } from "./styles";


const EmployeeTable = ({ data }) => {
  const [dados, setDados] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [emailId, setEmailId] = useState('')

  const [dataPerPage, setDataPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(dados.length / dataPerPage)
  const startIndex = currentPage * dataPerPage
  const endIndex = startIndex + dataPerPage
  const currentDados = dados.slice(startIndex, endIndex)
  const customIndex = currentPage * dataPerPage + 1

  useEffect(() => {
    setCurrentPage(0)
  }, [dataPerPage])


  const handleDelete = (index) => {
    if (index >= 0) {
      setDados(dados.filter((item, i) =>  i !== customIndex + index - 1));
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
            {["#", ...keysArrayTableFormatted, "Mais Info", "Editar", "Deletar"].map(
              (item, index) => (
                <STH key={index}>{item}</STH>
              )
            )}
          </STHeadTR>
        </STHead>
        <STBody>
          {currentDados.map((obj, index) => (
            <STBodyTR key={index} id={obj["email"]}>
              <STD>{index + customIndex}</STD>
              {keysArrayTable.map((item, index) => {
                const value = obj[item];
                return <STD key={index}>{value instanceof dayjs ? value.format('DD/MM/YYYY') : value}</STD>;
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
                <Link to={`/edit/${obj.id}`} className="edit">
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
      <PaginationSelector setItensPerPage={setDataPerPage} itensPerPage={dataPerPage} />
      <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    </>
  );
};

export default EmployeeTable;
