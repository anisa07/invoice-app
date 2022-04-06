import { createContext } from 'react';
import {ThemeType} from "../types/themeTypes";

export const Context = createContext({
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
