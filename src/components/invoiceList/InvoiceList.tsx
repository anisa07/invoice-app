import {InvoiceItem} from "./invoiceListItem/InvoiceItem";
import {fetchInvoices} from "../../services/invoiceService";
import {useEffect, useState} from "react";
import {InvoiceEntity, StatusEnum} from "../../types/InvoiceEntity";
import {InvoiceListHeader} from "./invoiceListHeader/InvoiceListHeader";
import { InvoiceListStyled } from "./invoiceListStyle";

export const InvoiceList = () => {
    const [invoiceList, setInvoiceList] = useState<InvoiceEntity[]>([]);
    const [filter, setFilter] = useState<StatusEnum>('' as StatusEnum);
    const filterValues = [ StatusEnum.PAID, StatusEnum.PENDING, StatusEnum.DRAFT ];

    useEffect(() => {
        fetchInvoices().then(response => {
            console.log(response)
            setInvoiceList(response);
        })
    }, [])

    return (
        <InvoiceListStyled>
            <InvoiceListHeader
                filterValue={filter}
                statuses={filterValues}
                invoicesCount={invoiceList.length}
                onSelectFilterValue={setFilter} />
            {invoiceList.map(item =>
                <InvoiceItem item={item} key={item.id} />
            )}
        </InvoiceListStyled>
    )
}
