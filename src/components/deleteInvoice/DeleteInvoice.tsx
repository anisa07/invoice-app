import {DeleteInvoiceButton} from "./deleteInvoiceStyle"
import {tabletBreakpoint} from "../../themes/styleConst";
import {useAppContext} from "../../context/context";

interface DeleteInvoiceProps {
    onDeleteInvoice: () => void
}

export const DeleteInvoice = (props: DeleteInvoiceProps) => {
    const { windowDimensions } = useAppContext();

    const deleteInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'Delete' : 'Delete Invoice'

    return <DeleteInvoiceButton onClick={props.onDeleteInvoice}>{deleteInvoiceText()}</DeleteInvoiceButton>
}
