import {StatusEnum} from "../../types/InvoiceEntity";
import { MarkButtonStyled } from "./markInvoiceStyle";
import {tabletBreakpoint} from "../../themes/styleConst";
import {useContext} from "react";
import {Context} from "../../context/context";

interface MarkButtonProps {
    markStatus: StatusEnum
}

export const MarkInvoice = (props: MarkButtonProps) => {
    const { windowDimensions } = useContext(Context);

    const markInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? props.markStatus : `Mark as ${props.markStatus}`

    return <MarkButtonStyled>
        {markInvoiceText()}
    </MarkButtonStyled>
}
