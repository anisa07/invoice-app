import {ItemEntity} from "../types/InvoiceEntity";

export const fullPrice = (itemList: ItemEntity[]) => itemList.reduce(
    (acc, curVal) => {
        return acc + curVal.price * curVal.quantity
    }, 0
)
