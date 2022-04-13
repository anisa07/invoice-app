import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {deleteInvoice, editInvoice, fetchInvoiceById} from "../../services/invoiceService";
import {InvoiceEntity, StatusEnum} from "../../types/InvoiceEntity";
import {InvoiceDetailsHeader} from "./invoiceDetailsHeader/InvoiceDetailsHeader";
import {InvoiceDetailsStyled} from "./invoiceDetailsStyle";
import {InvoiceInfo} from "./invoiceInfo/InvoiceInfo";
import {InvoiceForm} from "../forms/invoiceForm/InvoiceForm";
import {useAppContext} from "../../context/context";

export const InvoiceDetails = () => {
    const {setModalContent, toggleModal} = useAppContext();
    const {id: invoiceId} = useParams();
    const [invoice, setInvoice] = useState<InvoiceEntity>();
    const [markStatus, setMarkStatus] = useState<StatusEnum|undefined>(StatusEnum.PENDING);
    const navigate = useNavigate();

    const getInvoiceById = (id: string) => {
        fetchInvoiceById(id).then((response) => {
            setInvoice(response);
        })
    }

    useEffect(() => {
        if (invoiceId) {
            getInvoiceById(invoiceId);
        }
    }, [invoiceId]);

    useEffect(() => {
        if (invoice) {
            invoice.status === StatusEnum.PENDING
                ? setMarkStatus(StatusEnum.PAID) : invoice.status === StatusEnum.PAID
                ? setMarkStatus(undefined) : setMarkStatus(StatusEnum.PENDING)
        }
    }, [invoice])

    if (!invoice)
        return <div>Loading...</div>

    const handleDeleteInvoice = () => {
        deleteInvoice(invoice.id).then(() => {
            navigate('/');
        })
    }

    const handleEditInvoice = () => {
        setModalContent(<InvoiceForm id={invoiceId} />)
        toggleModal();
    }

    const handleChangeStatus = () => {
        if (markStatus && invoiceId) {
            editInvoice({
                ...invoice,
                status: markStatus
            }).then(() => {
                getInvoiceById(invoiceId);
            })
        }
    }

    return <InvoiceDetailsStyled>
        <Link className='back' to='/'>Go Back</Link>
        <InvoiceDetailsHeader
            markStatus={markStatus}
            status={invoice.status}
            onDeleteInvoice={handleDeleteInvoice}
            onEditInvoice={handleEditInvoice}
            onChangeStatus={handleChangeStatus}
        />
        <InvoiceInfo item={invoice}/>
    </InvoiceDetailsStyled>
}
