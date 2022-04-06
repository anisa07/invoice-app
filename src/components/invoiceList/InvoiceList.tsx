import {InvoiceItem} from "./invoiceListItem/InvoiceItem";
import {fetchInvoices} from "../../services/invoiceService";
import {useContext, useEffect, useState} from "react";
import {InvoiceEntity, StatusEnum} from "../../types/InvoiceEntity";
import {InvoiceListHeader} from "./invoiceListHeader/InvoiceListHeader";
import { InvoiceListStyled } from "./invoiceListStyle";
import {Context} from "../../context/context";
import {InvoiceForm} from "../forms/invoiceForm/InvoiceForm";

export const InvoiceList = () => {
    const {setModalContent, toggleModal} = useContext(Context);
    const [invoiceList, setInvoiceList] = useState<InvoiceEntity[]>([]);
    const [filter, setFilter] = useState<StatusEnum>('' as StatusEnum);
    const filterValues = [ StatusEnum.PAID, StatusEnum.PENDING, StatusEnum.DRAFT ];

    useEffect(() => {
        fetchInvoices().then(response => {
            console.log(response)
            setInvoiceList(response);
        })
    }, [])

    const handleOpenCreateInvoiceModal = () => {
        setModalContent(<InvoiceForm />)
        toggleModal();
    }

    return (
        <InvoiceListStyled>
            <InvoiceListHeader
                filterValue={filter}
                statuses={filterValues}
                invoicesCount={invoiceList.length}
                onOpenCreateInvoice={handleOpenCreateInvoiceModal}
                onSelectFilterValue={setFilter} />
            {invoiceList.map(item =>
                <InvoiceItem item={item} key={item.id} />
            )}
        </InvoiceListStyled>
    )
}
