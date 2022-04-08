import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./globalStyle";
import {Header} from "./components/header/Header";
import {AppContainer} from './appStyles';
import AppRoutes from "./AppRoutes";
import {Modal} from "./components/modal/Modal";
import {BrowserRouter} from "react-router-dom";
import {useAppContext} from "./context/context";

function App() {
    const {theme, isModalOpened} = useAppContext();

    if (!theme.name)
        return <div>Loading...</div>

    return (
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
    );
}

export default App;
