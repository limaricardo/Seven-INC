import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 0 80px;
  

  @media only screen and (max-width: 395px) {
    padding: 10px 0 0 80px;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: left;
  width: 320px;
  height: 50px;
  align-items: space-between;

  @media only screen and (max-width: 395px) {
    height: 40px;
  }
`;
export const Text = styled.div`
  width: 100%;
  text-align: left;
  &:first-child{
    width: 120px;
  }
`;


