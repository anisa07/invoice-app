import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./globalStyle";
import useCustomTheme from "./hooks/useCustomTheme";
import {Header} from "./components/header/Header";
import {AppContainer} from './appStyles';
import AppRoutes from "./AppRoutes";
import {Modal} from "./components/modal/Modal";
import useModal from "./hooks/useModal";
import {BrowserRouter} from "react-router-dom";
import { Context } from './context/context';
import useWindowDimensions from "./hooks/useScreenDimensions";

function App() {
    const {
      isModalOpened,
      toggleModal, modalContent, setModalContent
    } = useModal();
    const {
        theme,
        handleChangeTheme
    } = useCustomTheme();
    const windowDimensions = useWindowDimensions();

    if (!theme.name)
        return <div>Loading...</div>

    return (
        <Context.Provider value={{
            theme,
            handleChangeTheme,
            isModalOpened,
            toggleModal,
            windowDimensions,
            modalContent,
            setModalContent
        }}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <div style={{
                        position: 'relative',
                        height: '100%'
                    }}>
                        <GlobalStyle/>
                        <AppContainer>
                            <Header />
                            <AppRoutes/>
                            {isModalOpened && <Modal/>}
                        </AppContainer>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;
