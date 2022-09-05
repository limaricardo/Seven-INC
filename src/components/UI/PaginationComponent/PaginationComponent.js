import React from "react";
import Button from "../Button";
import { DivCompContainer } from "./pagComponent.styles";

const PaginationComponent = ({ setCurrentPage, pages, currentPage }) => {
  return (
    <DivCompContainer>
      {Array.from(Array(pages), (item, index) => {
        return (
          <Button
            style={
              index === currentPage
                ? {
                    backgroundColor: "var(--primary)",
                    color: "white",
                    fontSize: "1.1rem",
                  }
                : { backgroundColor: "transparent" }
            }
            className="paginationButton"
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
            key={index}
          >
            {index + 1}
          </Button>
        );
      })}
    </DivCompContainer>
  );
};

export default PaginationComponent;
