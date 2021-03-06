import { StyledCreateInvoice } from "./createInvoiceStyle"
import {tabletBreakpoint} from "../../themes/styleConst";
import plus from './png/plus.png';
import {useAppContext} from "../../context/context";

export interface CreateInvoiceProps {
    onClick: () => void;
}

export const CreateInvoice = (props: CreateInvoiceProps) => {
    const { windowDimensions } = useAppContext();

    const createInvoiceText = () => windowDimensions.width <= tabletBreakpoint ? 'New' : 'New Invoice'

    return (
        <StyledCreateInvoice>
            <button onClick={props.onClick}>
                <img src={plus}  alt="add-icon"/>
                {createInvoiceText()}
            </button>
        </StyledCreateInvoice>
    )
}
