import styled from "styled-components";


export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 200;
  text-align: right;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 25%;
  left: 50%;
  height: 60vh;
  width: 400px;
  transform: translate(-50%, -25%);
  background: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px var(--primary);
  padding: 10px 10px 0 0;

  @media only screen and (max-width: 395px) {
    width: 300px; 
    font-size: .9rem;
  }
`