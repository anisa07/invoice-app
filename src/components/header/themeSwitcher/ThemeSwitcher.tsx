import moon from './png/moon.png';
import sun from './png/sun.png';
import { StyledThemeSwitcher, ThemeImage } from './themeSwitcherStyle';
import {useContext} from "react";
import {Context} from "../../../context/context";

export const ThemeSwitcher = () => {
    const { theme, handleChangeTheme } = useContext(Context);

    const pickupThemeImage = () => theme?.name === "dark" ? sun : moon;

    return <StyledThemeSwitcher onClick={handleChangeTheme}>
        <ThemeImage src={pickupThemeImage()}/>
    </StyledThemeSwitcher>
}
