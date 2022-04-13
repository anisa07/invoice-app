import { EditInvoiceButton } from "./editInvoiceStyle"
import {tabletBreakpoint} from "../../themes/styleConst";
import {useAppContext} from "../../context/context";

interface EditInvoiceProps {
    onEditInvoice: () => void
}

export const EditInvoice = (props: EditInvoiceProps) => {
    const { windowDimensions } = useAppContext();

    const editInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'Edit' : 'Edit Invoice'

    return <EditInvoiceButton onClick={props.onEditInvoice}>
        {editInvoiceText()}
    </EditInvoiceButton>
}
