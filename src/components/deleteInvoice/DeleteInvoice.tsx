import {DeleteInvoiceButton} from "./deleteInvoiceStyle"
import {tabletBreakpoint} from "../../themes/styleConst";
import {useContext} from "react";
import {Context} from "../../context/context";

export const DeleteInvoice = () => {
    const { windowDimensions } = useContext(Context);

    const deleteInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'Delete' : 'Delete Invoice'

    return <DeleteInvoiceButton>{deleteInvoiceText()}</DeleteInvoiceButton>
}
