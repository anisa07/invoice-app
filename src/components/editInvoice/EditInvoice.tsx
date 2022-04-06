import { EditInvoiceButton } from "./editInvoiceStyle"
import {tabletBreakpoint} from "../../themes/styleConst";
import {useContext} from "react";
import {Context} from "../../context/context";

export const EditInvoice = () => {
    const { windowDimensions } = useContext(Context);

    const editInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'Edit' : 'Edit Invoice'

    return <EditInvoiceButton>
        {editInvoiceText()}
    </EditInvoiceButton>
}
