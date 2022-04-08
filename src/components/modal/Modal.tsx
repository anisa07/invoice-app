import { ModalContainer } from "./modalStyle"
import {useAppContext} from "../../context/context";

export const Modal = () => {
    const {toggleModal, modalContent} = useAppContext();

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
