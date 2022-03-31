import {useEffect, useState} from "react";
import {getFromStorage, saveToStorage} from "../services/storageService";
import themes from '../themes/schema.json';

export default function useCustomTheme() {
    const [theme, setTheme] = useState<Record<any, any>>({});

    useEffect(() => {
        const savedTheme = getFromStorage("__invoice-app-theme");
        if (savedTheme?.name) {
            setTheme(savedTheme)
        } else {
            setTheme(themes.data['light']);
            saveToStorage("__invoice-app-theme", themes.data['light']);
        }
    }, [])

    const handleChangeTheme = () => {
        const newThemeName = theme.name === "dark" ? "light" : "dark";
        const newTheme = themes.data[newThemeName];
        saveToStorage("__invoice-app-theme", newTheme);
        setTheme(newTheme);
    }

    return {
        theme,
        handleChangeTheme
    }
}
