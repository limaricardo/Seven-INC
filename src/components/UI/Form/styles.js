import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  padding-top: 45px;
  flex-direction: column;
  align-items: center;
  border: none;
  width: 450px;
  height: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 2px black;
  background-color: white;

  @media only screen and (max-width: 599px) {
    width: 90vw; 
    padding-top: 10px;
  }
`

export const ButtonContainerDiv = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: flex-start;
`

