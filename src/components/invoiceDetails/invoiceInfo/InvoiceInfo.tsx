import { InvoiceInfoStyled } from "./invoiceInfoStyle"
import {convertTimestampDate} from "../../../helpers/invoiceHelper";
import {InvoiceDetailsList} from "../invoiceDetailsList/InvoiceDetailsList";
import {InvoiceEntityProps} from "../../../types/InvoiceEntity";

export const InvoiceInfo = (props: InvoiceEntityProps) => {
    const {ticketNumber, billFrom, invoiceDate, billTo, itemList} = props.item;
    return <InvoiceInfoStyled>
        <div className="data-row">
            <span className="number bold">#{ticketNumber}</span>
            <div className="data-column">
                <span>{billFrom.streetAddress}</span>
                <span>{billFrom.city}</span>
                <span>{billFrom.postCode}</span>
                <span>{billFrom.country}</span>
            </div>
        </div>
        <div className="data-row">
            <div className="data-half-row">
                <div className="data-column">
                    <span>Date</span>
                    <span className="bold">{convertTimestampDate(invoiceDate)}</span>
                </div>
                <div className="data-column">
                    <span>Bill To</span>
                    <span className="bold">{billTo.clientName}</span>
                    <span>{billTo.address.streetAddress}</span>
                    <span>{billTo.address.city}</span>
                    <span>{billTo.address.postCode}</span>
                    <span>{billTo.address.country}</span>
                </div>
            </div>
            <div className="data-column">
                <span>Send To</span>
                <span className="bold">{billTo.clientEmail}</span>
            </div>
        </div>
        <InvoiceDetailsList list={itemList} />
    </InvoiceInfoStyled>
}
