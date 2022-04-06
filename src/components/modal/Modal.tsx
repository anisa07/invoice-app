import { ModalContainer } from "./modalStyle"
import {useContext} from "react";
import {Context} from "../../context/context";

export const Modal = () => {
    const {toggleModal, modalContent} = useContext(Context);

    const handleCloseModal = () => {
        toggleModal();
    }

    return <ModalContainer>
        <div className="content">
            <button className="close" onClick={handleCloseModal}>X</button>
            {modalContent}
        </div>
    </ModalContainer>
}
