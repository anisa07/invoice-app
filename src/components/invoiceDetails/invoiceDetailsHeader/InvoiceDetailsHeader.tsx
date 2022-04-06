import {InvoiceDetailsHeaderStyled} from "./invoiceDetailsHeaderStyles"
import {InvoiceStatus} from "../../invoiceStatus/InvoiceStatus";
import {EditInvoice} from "../../editInvoice/EditInvoice";
import {DeleteInvoice} from "../../deleteInvoice/DeleteInvoice";
import {MarkInvoice} from "../../markInvoice/MarkInvoice";
import {StatusEnum} from "../../../types/InvoiceEntity";
import {mobileBreakpoint} from "../../../themes/styleConst";
import useWindowDimensions from "../../../hooks/useScreenDimensions";

export interface InvoiceDetailsHeaderProps {
    status: StatusEnum;
    markStatus?: StatusEnum;
}

export const InvoiceDetailsHeader = (props: InvoiceDetailsHeaderProps) => {
    const windowDimensions = useWindowDimensions();

    const isMobile = () => windowDimensions.width <= mobileBreakpoint;

    return (
        <InvoiceDetailsHeaderStyled>
            <div>
                Status <InvoiceStatus status={props.status}/>
            </div>
            {!isMobile() && <div/>}
            <EditInvoice/>
            <DeleteInvoice/>
            {props.markStatus && <MarkInvoice markStatus={props.markStatus}/>}
        </InvoiceDetailsHeaderStyled>
    )
}
