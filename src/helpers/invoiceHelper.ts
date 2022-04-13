import {ItemEntity} from "../types/InvoiceEntity";

export const fullPrice = (itemList: ItemEntity[]) => itemList.reduce(
    (acc, curVal) => {
        return acc + curVal.price * curVal.quantity
    }, 0
)

export const getMonthName = (m: number) => {
    switch (m) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        default:
            return 'Dec'
    }
}

export const convertTimestampDate = (t: number) => {
    const d = new Date(t);
    const date = d.getDate() > 10 ? d.getDate() : '0'+d.getDate();
    const month = getMonthName(d.getMonth());
    return `${date} ${month} ${d.getFullYear()}`;
}

export const convertDateForDatePicker = (t: number | Date) => {
    let date = t;
    if (typeof date === "number") {
        date = new Date(t);
    }
    const day = date.getDate() > 10 ? date.getDate() : '0'+date.getDate();
    const month = date.getMonth()+1 > 10 ? date.getMonth()+1 : '0'+(date.getMonth()+1);
    return `${date.getFullYear()}-${month}-${day}`;
}

export function makeTicketNum() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
