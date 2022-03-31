import {InvoiceEntity} from "../../../types/InvoiceEntity";
import { InvoiceItemStyled } from "./invoiceItemStyle";
import {fullPrice} from "../../../helpers/invoiceHelper";
import {useNavigate} from "react-router-dom";
import {InvoiceStatus} from "../../invoiceStatus/InvoiceStatus";

export interface InvoiceEntityProps {
    item: InvoiceEntity
}

export const InvoiceItem = (props: InvoiceEntityProps) => {
    const {itemList, invoiceDate, billTo, ticketNumber, status, id} = props.item;
    const navigate = useNavigate();

    const handleOpenItemDetails = () => {
        navigate(`/item/${id}`);
    }

    return (
        <InvoiceItemStyled>
            <span className='number'>#{ticketNumber}</span>
            <span>{invoiceDate}</span>
            <span>{billTo.clientName}</span>
            <span className='price'>&#163; {fullPrice(itemList)}</span>
            <InvoiceStatus status={status} />
            <button className='arrow' onClick={handleOpenItemDetails}>{">"}</button>
        </InvoiceItemStyled>
    )
}
