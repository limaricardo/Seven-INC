import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { InfoContainer, InfoDiv, Text } from "./styles";
import { keysArrayFormFormatted } from '../Mock'

const MoreInfo = ({ data, emailId, showModal, setShowModal }) => {
  const renderedList = data
    .filter((item) => {
      return emailId === item.email;
    })
    .map((item) => {
      return item;
    });

  let dataKeys = [];

  data.map((item) => {
    return dataKeys.push(Object.keys(item));
  });

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Button
          style={{ color: "red", backgroundColor: "white", fontSize: "20px" }}
          onClick={() => setShowModal(false)}
        >
          X
        </Button>
        <h2 style={{ textAlign: "center" }}>
          Informações detalhadas do Funcionário
        </h2>
        <InfoContainer>
          {renderedList[0] &&
            keysArrayFormFormatted.map((item, index) => {
              const value = renderedList[0][dataKeys[0][index]];
              return (
                <InfoDiv key={index}>
                  <Text>{keysArrayFormFormatted[index]}:</Text>
                  <Text>{value}</Text>
                </InfoDiv>
              );
            })}
        </InfoContainer>
      </Modal>
    </div>
  );
};

export default MoreInfo;
