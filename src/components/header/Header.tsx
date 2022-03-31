import { HeaderContainer, InternalContainer } from "./headerStyle"
import {Logo} from "./logo/Logo";
import {ThemeSwitcher} from "./themeSwitcher/ThemeSwitcher";

export interface ThemeProps {
    theme: Record<any, any>,
    onSwitchTheme: () => void
}

export const Header = (props: ThemeProps) => {
    return <HeaderContainer>
        <Logo />
        <InternalContainer>
            <ThemeSwitcher {...props} />
        </InternalContainer>
    </HeaderContainer>
}
