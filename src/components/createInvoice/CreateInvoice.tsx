import { StyledCreateInvoice } from "./createInvoiceStyle"
import useWindowDimensions from "../../hooks/useScreenDimensions";
import {mobileBreakpoint, tabletBreakpoint} from "../../themes/styleConst";
import plus from './png/plus.png';

export const CreateInvoice = () => {
    const windowDimensions = useWindowDimensions();

    const createInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'New' : 'New Invoice'

    return (
        <StyledCreateInvoice>
            <button>
                <img src={plus} />
                {createInvoiceText()}
            </button>
        </StyledCreateInvoice>
    )
}
