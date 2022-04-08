import { EditInvoiceButton } from "./editInvoiceStyle"
import {tabletBreakpoint} from "../../themes/styleConst";
import {useAppContext} from "../../context/context";

export const EditInvoice = () => {
    const { windowDimensions } = useAppContext();

    const editInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'Edit' : 'Edit Invoice'

    return <EditInvoiceButton>
        {editInvoiceText()}
    </EditInvoiceButton>
}
