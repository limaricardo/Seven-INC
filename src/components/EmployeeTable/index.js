import React, { useState, useEffect, useContext } from "react";
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

import { MockContext } from "../../Context";


const EmployeeTable = () => {
  const [dados, setDados] = useContext(MockContext);
  const [showModal, setShowModal] = useState(false);
  const [infoId, setInfoID] = useState('')


  // Table Pagination 
  const [dataPerPage, setDataPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(dados.length / dataPerPage)
  const startIndex = currentPage * dataPerPage
  const endIndex = startIndex + dataPerPage
  const currentDados = dados.slice(startIndex, endIndex)
  const customIndex = currentPage * dataPerPage + 1


  // Start page everytime change the quantity of data per page
  useEffect(() => {
    setCurrentPage(0)
  }, [dataPerPage])


  // Function to delete the row selected
  const handleDelete = (index) => {
    if (index >= 0) {
      setDados(dados.filter((item, i) =>  i !== customIndex + index - 1));
    }

  };

  // Function to open the modal with more details about the employee
  const onExpandClick = (obj) => {
    setShowModal(true)
    setInfoID(obj.id)
  }

  return (
    <>
      <STable>
        <STHead>
          <STHeadTR>
            {["#", ...keysArrayTableFormatted, "Detalhes", "Editar", "Deletar"].map(
              (item, index) => (
                <STH key={index}>{item}</STH>
              )
            )}
          </STHeadTR>
        </STHead>
        <STBody>
          {currentDados.map((obj, index) => (
            <STBodyTR key={index}>
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
      <MoreInfo data={dados} infoId={infoId} showModal={showModal} setShowModal={setShowModal} />
      <PaginationSelector setItensPerPage={setDataPerPage} itensPerPage={dataPerPage} />
      <PaginationComponent currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    </>
  );
};

export default EmployeeTable;
