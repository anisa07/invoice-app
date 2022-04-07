export interface ThemeType {
    name: string,
    colors: {
        background: string,
        text: string,
        pendingLabel: {
            background: string,
            text: string,
        },
        editButton: {
            background: string,
            text: string,
        },
        "label": {
            "text": string
        },
        "item": {
            "background": string
        },
        "itemDetailsList": {
            "background": string
        },
        "link": {
            "background": string
        },
        formInput: {
            background: string,
            text: string,
            border: string
        },
    }
}
