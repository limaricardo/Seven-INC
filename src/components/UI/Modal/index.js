import React, { useRef } from "react";
import { ModalWrapper, ModalContainer } from "./styles"


const Modal = ({ children, showModal, setShowModal }) => {

    const modalRef = useRef()

    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setShowModal(false);
        }
    }

    return (
        showModal &&
        <ModalWrapper ref={modalRef} onClick={closeModal}>
            <ModalContainer>
                {children}
            </ModalContainer>
        </ModalWrapper>
    )
}

export default Modal;