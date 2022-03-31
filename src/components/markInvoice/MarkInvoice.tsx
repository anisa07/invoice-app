import {StatusEnum} from "../../types/InvoiceEntity";
import { MarkButtonStyled } from "./markInvoiceStyle";

interface MarkButtonProps {
    markStatus: StatusEnum
}

export const MarkInvoice = (props: MarkButtonProps) => {

    return <MarkButtonStyled>
        {`Mark as ${props.markStatus}`}
    </MarkButtonStyled>
}
