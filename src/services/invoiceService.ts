import {InvoiceEntity, StatusEnum} from "../types/InvoiceEntity";
import {makeTicketNum} from "../helpers/invoiceHelper";

const serverApiUrl = "http://localhost:3001";

export const fetchInvoices = () =>
    fetch(`${serverApiUrl}/invoices`).then(response => response.json())

export const fetchInvoiceById = (id: string) =>
    fetch(`${serverApiUrl}/invoices/${id}`).then(response => response.json())

export const saveInvoice = (invoice: InvoiceEntity, edit: boolean = false) => {
    if (edit)
        return editInvoice(invoice);
    return  createInvoice(invoice);
}

export const createInvoice = (invoice: InvoiceEntity) => {
    invoice.ticketNumber = makeTicketNum();
    return fetch(`${serverApiUrl}/invoices`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
    });
}

export const editInvoice = (invoice: InvoiceEntity) => {
    return fetch(`${serverApiUrl}/invoices/${invoice.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(invoice)
    });
}


export const deleteInvoice = (id: string) =>
    fetch(`${serverApiUrl}/invoices/${id}`, {
    method: 'DELETE',
})

export const filterByStatus = (filter: StatusEnum) => {
    if (!filter) {
        return fetchInvoices();
    }
    return fetch(`${serverApiUrl}/invoices?status=${filter}`).then(response => response.json())
}
