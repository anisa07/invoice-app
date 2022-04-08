import React, {createContext, useContext} from 'react';
import {ThemeType} from "../types/themeTypes";
import useModal from "../hooks/useModal";
import useCustomTheme from "../hooks/useCustomTheme";
import useWindowDimensions from "../hooks/useScreenDimensions";

const AppContext = createContext({
    theme: {} as ThemeType,
    handleChangeTheme: () => {},
    isModalOpened: false,
    toggleModal: () => {},
    modalContent: undefined,
    setModalContent: (v: JSX.Element) => {},
    windowDimensions: {
        width: 0,
        height: 0
    }
});

interface AppContextProviderProps {
    children: React.ReactNode
}

export const AppContextProvider = ({children}: AppContextProviderProps) => {
    const {
        isModalOpened,
        toggleModal, modalContent, setModalContent
    } = useModal();
    const {
        theme,
        handleChangeTheme
    } = useCustomTheme();
    const windowDimensions = useWindowDimensions();

    return <AppContext.Provider
        value={{theme,
            handleChangeTheme,
            isModalOpened,
            toggleModal,
            windowDimensions,
            modalContent,
            setModalContent
    }}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);
