import {DeleteInvoiceButton} from "./deleteInvoiceStyle"
import {tabletBreakpoint} from "../../themes/styleConst";
import {useAppContext} from "../../context/context";

export const DeleteInvoice = () => {
    const { windowDimensions } = useAppContext();

    const deleteInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'Delete' : 'Delete Invoice'

    return <DeleteInvoiceButton>{deleteInvoiceText()}</DeleteInvoiceButton>
}
