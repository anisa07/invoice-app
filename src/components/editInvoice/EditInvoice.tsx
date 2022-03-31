import { EditInvoiceButton } from "./editInvoiceStyle"
import {tabletBreakpoint} from "../../themes/styleConst";
import useWindowDimensions from "../../hooks/useScreenDimensions";

export const EditInvoice = () => {
    const windowDimensions = useWindowDimensions();

    const editInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'Edit' : 'Edit Invoice'

    return <EditInvoiceButton>
        {editInvoiceText()}
    </EditInvoiceButton>
}
