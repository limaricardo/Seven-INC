import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { InfoContainer, InfoDiv, Text } from "./styles";


const MoreInfoButton = ({ data, emailId, showModal, setShowModal }) => {
  const renderedList = data
    .filter((item) => {
      return emailId === item.email;
    })
    .map((item) => {
      return item;
    });

  let dataKeys = []

  data.map((item) => {
    dataKeys.push(Object.keys(item))
  })
  
  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Button style={{color: "red", backgroundColor: "white", fontSize: "20px"}} onClick={() => setShowModal(false)}>X</Button>
        <h2 style={{textAlign: "center"}}>Informações detalhadas do Funcionário</h2>
        <InfoContainer>
          {renderedList[0] && data.map((item, index) => {
            const value = renderedList[0][dataKeys[0][index]];
            return (
              <InfoDiv key={index}>
                <Text>{dataKeys[0][index]}</Text>
                <Text>{value}</Text>
              </InfoDiv>
            );
          })}
        </InfoContainer>
      </Modal>
    </div>
  );
};

export default MoreInfoButton;
