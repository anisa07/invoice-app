import {InvoiceDetailsListStyled} from "./invoiceDetailsListStyle"
import {ItemEntity} from "../../../types/InvoiceEntity";
import {mobileBreakpoint} from "../../../themes/styleConst";
import {fullPrice} from "../../../helpers/invoiceHelper";
import {useAppContext} from "../../../context/context";

interface InvoiceDetailsListProps {
    list: ItemEntity[]
}

export const InvoiceDetailsList = (props: InvoiceDetailsListProps) => {
    const { windowDimensions } = useAppContext();

    const isMobile = () => windowDimensions.width <= mobileBreakpoint;

    return <InvoiceDetailsListStyled>
        <div className="list">
            {!isMobile()
                ? <>
                    <div className="header items">
                        <span>Item Name</span>
                        <span>QTY</span>
                        <span>Price</span>
                        <span>Total</span>
                    </div>
                    {props.list.map(item => (
                        <div className="items" key={item.id}>
                            <span>{item.itemName}</span>
                            <span>{item.quantity}</span>
                            <span>&#163;{item.price}</span>
                            <span>&#163;{item.price * item.quantity}</span>
                        </div>
                    ))}
                </> :
                props.list.map(item => (
                    <div className="items" key={item.id}>
                        <span className="column">
                            {item.itemName}
                            <span>{item.quantity} x &#163;{item.price}</span>
                        </span>
                        <span className="bold">&#163;{item.price * item.quantity}</span>
                    </div>
                ))
            }
        </div>
        <div className="footer">
            <span>Total</span>
            <span className="big-bold-font">&#163; {fullPrice(props.list)}</span>
        </div>
    </InvoiceDetailsListStyled>
}
