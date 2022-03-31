import {StatusEnum} from "../../types/InvoiceEntity";
import { Status } from "./invoiceStatusStyle";

export interface InvoiceStatusProps {
    status: StatusEnum
}

export const InvoiceStatus = (props: InvoiceStatusProps) => {
    return (
        <Status status={props.status}>
            <span>&#9679;</span>
            {props.status}
        </Status>
    )
}
