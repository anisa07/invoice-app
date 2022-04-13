import {StatusEnum} from "../../types/InvoiceEntity";
import { MarkButtonStyled } from "./markInvoiceStyle";
import {tabletBreakpoint} from "../../themes/styleConst";
import {useAppContext} from "../../context/context";

interface MarkButtonProps {
    markStatus: StatusEnum,
    onChangeStatus: () => void
}

export const MarkInvoice = (props: MarkButtonProps) => {
    const { windowDimensions } = useAppContext();

    const markInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? props.markStatus : `Mark as ${props.markStatus}`

    return <MarkButtonStyled onClick={props.onChangeStatus}>
        {markInvoiceText()}
    </MarkButtonStyled>
}
