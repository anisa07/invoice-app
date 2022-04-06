import {InvoiceEntityProps} from "../../../types/InvoiceEntity";
import {InvoiceItemStyled} from "./invoiceItemStyle";
import {convertTimestampDate, fullPrice} from "../../../helpers/invoiceHelper";
import {useNavigate} from "react-router-dom";
import {InvoiceStatus} from "../../invoiceStatus/InvoiceStatus";
import useWindowDimensions from "../../../hooks/useScreenDimensions";
import {mobileBreakpoint} from "../../../themes/styleConst";

export const InvoiceItem = (props: InvoiceEntityProps) => {
    const windowDimensions = useWindowDimensions();
    const {itemList, invoiceDate, billTo, ticketNumber, status, id} = props.item;
    const navigate = useNavigate();

    const handleOpenItemDetails = () => {
        navigate(`/item/${id}`);
    }

    const isMobile = () => windowDimensions.width <= mobileBreakpoint;

    return (
        isMobile() ? <InvoiceItemStyled onClick={handleOpenItemDetails}>
                <span className='number'>#{ticketNumber}</span>
                <span className='name'>{billTo.clientName}</span>
                <div className="left-column">
                    <span className='date'>{convertTimestampDate(invoiceDate)}</span>
                    <span className='price'>&#163; {fullPrice(itemList)}</span>
                </div>
                <InvoiceStatus status={status}/>
            </InvoiceItemStyled> :
            <InvoiceItemStyled>
                <span className='number'>#{ticketNumber}</span>
                <span>{convertTimestampDate(invoiceDate)}</span>
                <span>{billTo.clientName}</span>
                <span className='price'>&#163; {fullPrice(itemList)}</span>
                <InvoiceStatus status={status}/>
                <button className='arrow' onClick={handleOpenItemDetails}>{">"}</button>
            </InvoiceItemStyled>
    )
}
