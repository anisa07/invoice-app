import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {fetchInvoiceById} from "../../services/invoiceService";
import {InvoiceEntity, StatusEnum} from "../../types/InvoiceEntity";
import {InvoiceDetailsHeader} from "./invoiceDetailsHeader/InvoiceDetailsHeader";
import { InvoiceDetailsStyled } from "./invoiceDetailsStyle";

export const InvoiceDetails = () => {
    const {id: invoiceId} = useParams();
    const [invoice, setInvoice] = useState<InvoiceEntity>();
    const [markStatus, setMarkStatus] = useState<StatusEnum>(StatusEnum.PENDING);

    useEffect(() => {
        if (invoiceId) {
            fetchInvoiceById(invoiceId).then((response) => {
                setInvoice(response);
                console.log(response)
            })
        }
    }, [invoiceId]);

    useEffect(() => {
        if (invoice) {
            invoice.status === StatusEnum.PENDING
                ? setMarkStatus(StatusEnum.PAID) : invoice.status === StatusEnum.PAID
                ? setMarkStatus(StatusEnum.DRAFT) : setMarkStatus(StatusEnum.PENDING)
        }
    }, [invoice])

    if(!invoice)
        return <div>Loading...</div>

    return <InvoiceDetailsStyled>
        <Link className='back' to='/'>Go Back</Link>
        <InvoiceDetailsHeader
            markStatus={markStatus}
            status={invoice.status}
        />
    </InvoiceDetailsStyled>
}
