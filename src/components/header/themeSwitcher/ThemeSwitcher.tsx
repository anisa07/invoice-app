import moon from './png/moon.png';
import sun from './png/sun.png';
import { StyledThemeSwitcher, ThemeImage } from './themeSwitcherStyle';
import {useAppContext} from "../../../context/context";

export const ThemeSwitcher = () => {
    const { theme, handleChangeTheme } = useAppContext();

    const pickupThemeImage = () => theme?.name === "dark" ? sun : moon;

    return <StyledThemeSwitcher onClick={handleChangeTheme}>
        <ThemeImage src={pickupThemeImage()}/>
    </StyledThemeSwitcher>
}
