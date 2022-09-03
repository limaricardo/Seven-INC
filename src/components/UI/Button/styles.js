import styled from "styled-components";

export const ButtonComp = styled.button`
  justify-self: flex-end;
  background-color: var(--primary);
  color: white;
  border-radius: 5px;
  border: none;
  width: fit-content;
  cursor: pointer;
  
  &:disabled {
    background-color: lightgray;
    color: white;
  }
  &:hover:not(:disabled) {
    background-color: var(--light-blue-hover);
    transition: all 0.3s ease-in-out 0s;
  
  }
`