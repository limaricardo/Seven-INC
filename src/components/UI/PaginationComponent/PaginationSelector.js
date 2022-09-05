import React from "react";
import { DivSelectorContainer, Select, Option } from "./pagSelector.styles";

const PaginationSelector = ({ itensPerPage, setItensPerPage }) => {
  return (
    <DivSelectorContainer>
      Itens por página:
      <Select
        value={itensPerPage}
        onChange={(e) => setItensPerPage(Number(e.target.value))}
      >
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
        <Option value={15}>15</Option>
      </Select>
    </DivSelectorContainer>
  );
};

export default PaginationSelector;
