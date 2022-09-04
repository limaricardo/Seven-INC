import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8vh;
  background-color: white;

  @media only screen and (max-width: 599px) {
  }

`

export const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 400px;

  @media only screen and (max-width: 599px) {
    gap: 0px;
    justify-content: space-evenly;
  }
`

export const DivNav = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 100px;

  @media only screen and (max-width: 599px) {
    gap: 50px;
  }
`

export const Image = styled.img`
  width: 150px;
`