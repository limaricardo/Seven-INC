import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0 80px;
  

  @media only screen and (max-width: 395px) {
    padding: 10px 0 0 80px;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: left;
  width: 500px;
  height: 40px;
  align-items: space-between;
  font-size: 0.95rem;

  @media only screen and (max-width: 599px) {
    height: 35px;
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 395px) {
    height: 35px;
    font-size: 0.6rem;
  }
`;

export const Text = styled.div`
  width: 100%;
  text-align: left;
  &:first-child{
    width: 350px;
    text-align: center;
  }
`;


