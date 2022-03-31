import { InvoiceHeaderContainer, InvoiceTitle, InvoiceAction } from "./invoiceListHeaderStyle"
import {InvoiceFilter, InvoiceFilterProps} from "../invoiceFilter/InvoiceFilter";
import {CreateInvoice} from "../../createInvoice/CreateInvoice";

interface InvoiceListHeaderProps extends InvoiceFilterProps {
    invoicesCount: number,
}

export const InvoiceListHeader = (props: InvoiceListHeaderProps) => {
    return (
        <InvoiceHeaderContainer>
            <InvoiceTitle>
                <h1>Invoices</h1>
                <p>{`There are ${props.invoicesCount} total invoices`}</p>
            </InvoiceTitle>
            <InvoiceAction>
                <InvoiceFilter
                    statuses={props.statuses}
                    filterValue={props.filterValue}
                    onSelectFilterValue={props.onSelectFilterValue} />
                <CreateInvoice />
            </InvoiceAction>
        </InvoiceHeaderContainer>
    )
}
