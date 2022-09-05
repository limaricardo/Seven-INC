import styled from "styled-components";

import { v } from "../../components/UI/StylesGeneral/variables";

export const STable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: ${v.borderRadius};
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    border-radius: 0px;
  }
`;


export const STHead = styled.thead`
  position: sticky;
  z-index: 100;

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;


export const STHeadTR = styled.tr`
  background: ${({ theme }) => theme.bg};

  @media only screen and (max-width: 900px) {
    display: block;
    margin: 0 0 1rem 0;

    /* Hide table headers (but not display: none;, for accessibility) */
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
`;


export const STH = styled.th`
  padding: ${v.smSpacing};
  color: ${({ theme }) => theme.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;

  &:not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.bg2};
  }

  &:first-of-type {
    width: 30px;
    white-space: nowrap;
  }

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;


export const STBody = styled.tbody`

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;


export const STBodyTR = styled.tr`
  background: ${({ theme }) => theme.white};

  @media only screen and (max-width: 900px) {
    display: block;
    margin: 0 0 1rem 0;
  }
`;


export const STD = styled.td`
  padding: ${v.smSpacing};
  border: 1px solid ${({ theme }) => theme.bg2};
  font-size: 14px;

  @media only screen and (max-width: 900px) {
    display: block;
    font-size: .9rem;

    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 150px;
    height: 40px;

    &:nth-of-type(1):before{
      content: "#";
    }
    &:nth-of-type(2):before{
      content: "Nome";
    }
    &:nth-of-type(3):before{
      content: "Email";
    }
    &:nth-of-type(4):before{
      content: "Telefone";
    }
    &:nth-of-type(5):before{
      content: "Data de Contratação";
    }
    &:nth-of-type(6):before{
      content: "Mais Informações";
    }
    &:nth-of-type(7):before{
      content: "Editar";
    }
    &:nth-of-type(8):before{
      content: "Deletar";
    }

    &:before{
      /* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}

    }

  @media only screen and (max-width: 395px) {
    font-size: .75rem;
  }
  
 
`;
