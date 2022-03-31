import { InvoiceDetailsHeaderStyled } from "./invoiceDetailsHeaderStyles"
import {InvoiceStatus} from "../../invoiceStatus/InvoiceStatus";
import {EditInvoice} from "../../editInvoice/EditInvoice";
import {DeleteInvoice} from "../../deleteInvoice/DeleteInvoice";
import {MarkInvoice} from "../../markInvoice/MarkInvoice";
import {StatusEnum} from "../../../types/InvoiceEntity";

export interface InvoiceDetailsHeaderProps {
    status: StatusEnum;
    markStatus: StatusEnum
}

export const InvoiceDetailsHeader = (props: InvoiceDetailsHeaderProps) => {
    return (
        <InvoiceDetailsHeaderStyled>
            <div>
                Status <InvoiceStatus status={props.status} />
            </div>
            <div />
            <EditInvoice />
            <DeleteInvoice />
            <MarkInvoice markStatus={props.markStatus} />
        </InvoiceDetailsHeaderStyled>
    )
}
