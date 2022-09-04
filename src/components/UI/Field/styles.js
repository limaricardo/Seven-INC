import styled from "styled-components";


export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FieldInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const FieldInput = styled.input`
  margin: 5px 0;
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 3px;
  height: 40px;
  text-indent: 10px;
  &:focus {
    outline: 1px solid black;
  }

  @media only screen and (max-width: 599px) {
    height: 35px;
  }

  @media only screen and (max-width: 395px) {
    font-size: 0.6rem;
  }
`

export const LabelInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-top: 15px;

  @media only screen and (max-width: 599px) {
    margin-top: 5px;
  }

  @media only screen and (max-width: 395px) {
    font-size: 0.6rem;
  }
`

