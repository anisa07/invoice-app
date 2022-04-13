export const saveToStorage = (name: string, data: any) => {
    localStorage.setItem(name, JSON.stringify(data));
}

export const getFromStorage = (name: string) => {
    try {
        const data = localStorage.getItem(name);

        if (data) {
            return JSON.parse(data);
        }

        return;
    } catch (e) {
        return null;
    }
}

