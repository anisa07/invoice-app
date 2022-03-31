
const serverApiUrl = "http://localhost:3001";

export const fetchInvoices = () =>
    fetch(`${serverApiUrl}/invoices`).then(response => response.json())

export const fetchInvoiceById = (id: string) =>
    fetch(`${serverApiUrl}/invoices/${id}`).then(response => response.json())
