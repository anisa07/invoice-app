import React, {useState} from "react";

export default function useModal() {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState<any>();

    const toggleModal = () => {
        setIsModalOpened(!isModalOpened);
    }

    return {
        isModalOpened,
        toggleModal,
        modalContent,
        setModalContent
    }
}
