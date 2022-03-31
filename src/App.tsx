import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./globalStyle";
import useCustomTheme from "./hooks/useCustomTheme";
import {Header} from "./components/header/Header";
import {AppContainer} from './appStyles';
import AppRoutes from "./AppRoutes";

function App() {
    const {
        theme,
        handleChangeTheme
    } = useCustomTheme();

    if (!theme.name)
        return <div>Loading...</div>

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                position: 'relative',
                height: '100%'
            }}>
                <GlobalStyle/>
                <AppContainer>
                    <Header theme={theme} onSwitchTheme={handleChangeTheme}/>
                    <AppRoutes />
                </AppContainer>
            </div>
        </ThemeProvider>
    );
}

export default App;
