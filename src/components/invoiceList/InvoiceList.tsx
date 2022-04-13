import {InvoiceItem} from "./invoiceListItem/InvoiceItem";
import {filterByStatus} from "../../services/invoiceService";
import {useEffect, useState} from "react";
import {InvoiceEntity, StatusEnum} from "../../types/InvoiceEntity";
import {InvoiceListHeader} from "./invoiceListHeader/InvoiceListHeader";
import { InvoiceListStyled } from "./invoiceListStyle";
import {InvoiceForm} from "../forms/invoiceForm/InvoiceForm";
import {useAppContext} from "../../context/context";

export const InvoiceList = () => {
    const {setModalContent, toggleModal} = useAppContext();
    const [invoiceList, setInvoiceList] = useState<InvoiceEntity[]>([]);
    const [filter, setFilter] = useState<StatusEnum>('' as StatusEnum);
    const filterValues = [ StatusEnum.PAID, StatusEnum.PENDING, StatusEnum.DRAFT ];

    const findByFilter = (v: StatusEnum) => {
        filterByStatus(v).then(response => {
            setInvoiceList(response);
        });
    }

    useEffect(() => {
        findByFilter("" as StatusEnum);
    }, [])

    const handleOpenCreateInvoiceModal = () => {
        setModalContent(<InvoiceForm />)
        toggleModal();
    }

    const handleSetFilter = (v: StatusEnum) => {
        setFilter(v);
        findByFilter(v);
    }

    return (
        <InvoiceListStyled>
            <InvoiceListHeader
                filterValue={filter}
                statuses={filterValues}
                invoicesCount={invoiceList.length}
                onOpenCreateInvoice={handleOpenCreateInvoiceModal}
                onSelectFilterValue={handleSetFilter} />
            {invoiceList.map(item =>
                <InvoiceItem item={item} key={item.id} />
            )}
        </InvoiceListStyled>
    )
}
