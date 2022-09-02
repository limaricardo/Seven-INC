import styled from "styled-components";

export const ButtonComp = styled.button`
  margin: 20px 0;
  padding: 7px;
  justify-self: flex-end;
  background-color: var(--primary);
  color: white;
  border-radius: 5px;
  border: none;
  width: 50px;
  &:disabled {
    background-color: lightgray;
    color: white;
  }
  &:hover:not(:disabled) {
    background-color: var(--button-hover);
    transition: all 0.3s ease-in-out 0s;
  
  }
`