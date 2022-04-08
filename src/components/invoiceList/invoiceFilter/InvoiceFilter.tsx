import {StatusEnum} from "../../../types/InvoiceEntity";
import {ChangeEvent} from "react";
import { InvoiceFilterStyled } from "./invoiceFilterStyle";
import {tabletBreakpoint} from "../../../themes/styleConst";
import {useAppContext} from "../../../context/context";

export interface InvoiceFilterProps {
    statuses: StatusEnum[],
    filterValue: string,
    onSelectFilterValue: (v: StatusEnum) => void,
}

export const InvoiceFilter = (props: InvoiceFilterProps) => {
    const { windowDimensions } = useAppContext();

    const handleSelectFilter = (v: ChangeEvent<HTMLSelectElement>) => {
        props.onSelectFilterValue(v.target.value as StatusEnum)
    }

    const filterText = () => windowDimensions.width <= tabletBreakpoint ? 'Filter' : 'Filter by status'

    return (
        <InvoiceFilterStyled>
            <select
                value={props.filterValue}
                onChange={handleSelectFilter}>
                <option key={'empty'} value=''>{filterText()}</option>
                {props.statuses.map(status =>
                    <option key={status} value={status}>{status}</option>)}
            </select>
        </InvoiceFilterStyled>
    )
}
