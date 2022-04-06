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
