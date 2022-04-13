export interface AddressEntity {
    streetAddress: string,
    city: string,
    postCode: string,
    country: string
}

export interface ItemEntity {
    itemName: string,
    quantity: number,
    price: number,
    id: string
}

export enum StatusEnum {
    PAID = "paid",
    PENDING = "pending",
    DRAFT = "draft"
}

export interface InvoiceEntity {
    id: string,
    ticketNumber: string,
    billFrom: AddressEntity,
    billTo: {
        clientName: string,
        clientEmail: string
        address: AddressEntity
    },
    invoiceDate: number,
    paymentTerms: string,
    projectDescription: string,
    itemList: ItemEntity[],
    status: StatusEnum,
}

export interface InvoiceEntityProps {
    item: InvoiceEntity
}
