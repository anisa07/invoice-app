import moon from './png/moon.png';
import sun from './png/sun.png';
import { StyledThemeSwitcher, ThemeImage } from './themeSwitcherStyle';
import {ThemeProps} from "../Header";

export const ThemeSwitcher = (props: ThemeProps) => {
    const pickupThemeImage = () => props.theme.name === "dark" ? sun : moon;

    return <StyledThemeSwitcher onClick={props.onSwitchTheme}>
        <ThemeImage src={pickupThemeImage()}/>
    </StyledThemeSwitcher>
}
