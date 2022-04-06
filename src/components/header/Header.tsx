import { HeaderContainer, InternalContainer } from "./headerStyle"
import {Logo} from "./logo/Logo";
import {ThemeSwitcher} from "./themeSwitcher/ThemeSwitcher";

export const Header = () => {
    return <HeaderContainer>
        <Logo />
        <InternalContainer>
            <ThemeSwitcher />
        </InternalContainer>
    </HeaderContainer>
}
