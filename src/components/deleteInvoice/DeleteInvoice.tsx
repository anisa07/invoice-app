import {DeleteInvoiceButton} from "./deleteInvoiceStyle"
import useWindowDimensions from "../../hooks/useScreenDimensions";
import {tabletBreakpoint} from "../../themes/styleConst";

export const DeleteInvoice = () => {
    const windowDimensions = useWindowDimensions();

    const deleteInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'Delete' : 'Delete Invoice'

    return <DeleteInvoiceButton>{deleteInvoiceText()}</DeleteInvoiceButton>
}
