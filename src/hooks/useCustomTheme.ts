import {useEffect, useState} from "react";
import {getFromStorage, saveToStorage} from "../services/storageService";
import themes from '../themes/schema.json';
import {ThemeType} from "../types/themeTypes";

export default function useCustomTheme() {
    const [theme, setTheme] = useState<ThemeType>({} as unknown as ThemeType);

    useEffect(() => {
        const savedTheme = getFromStorage("__invoice-app-theme");
        if (savedTheme?.name) {
            setTheme(savedTheme)
        } else {
            setTheme(themes.data['light'] as unknown as ThemeType);
            saveToStorage("__invoice-app-theme", themes.data['light']);
        }
    }, [])

    const handleChangeTheme = () => {
        const newThemeName = theme?.name === "dark" ? "light" : "dark";
        const newTheme = themes.data[newThemeName];
        saveToStorage("__invoice-app-theme", newTheme);
        setTheme(newTheme as unknown as ThemeType);
    }

    return {
        theme,
        handleChangeTheme
    }
}
