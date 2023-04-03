import useForm, {ensureNotEmpty, ensureNumber, FormData} from "../../../hooks/useForm";
import {FormEvent, useEffect, useState} from "react";
import {InvoiceFormStyled} from "./invoiceFormStyles";
import {FormInput} from "../../formComponents/formInput/FormInput";
import {convertDateForDatePicker} from "../../../helpers/invoiceHelper";
import {FormSelect} from "../../formComponents/formSelect/FormSelect";
import {FormItemList} from "../../formComponents/formItemList/FormItemList";
import {InvoiceEntity, ItemEntity, StatusEnum} from "../../../types/InvoiceEntity";
import {v4 as uuidv4} from 'uuid';
import {fetchInvoiceById, saveInvoice} from "../../../services/invoiceService";
import {useAppContext} from "../../../context/context";

export interface InvoiceFormProps {
    id?: string
}

export const InvoiceForm = (props: InvoiceFormProps) => {
    const {toggleModal} = useAppContext();
    const [formData, setFormData] = useState<FormData>({
        billFromStreetAddress: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billFromCity: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billFromPostCode: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billFromCountry: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billToClientName: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billToClientEmail: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billToStreetAddress: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billToCity: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billToPostCode: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        billToCountry: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        invoiceDate: {
            value: `${convertDateForDatePicker(new Date())}`,
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        paymentTerms: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        },
        projectDescription: {
            value: '',
            error: false,
            errorMessage: '',
            validation: [ensureNotEmpty]
        }
    });
    const {onChange, isFormValid, form} = useForm(formData);
    const [invoice, setInvoice] = useState<InvoiceEntity>();
    const [items, setItems] = useState<ItemEntity[]>([]);
    const [itemsListValid, setItemsListValid] = useState(false);
    const [editMode] = useState(!!props.id);

    useEffect(() => {
        if (items.length === 0) {
            setItemsListValid(true);
        } else {
            const haveError = items.some((item) => !ensureNumber(`${item.price}`)
                || !ensureNumber(`${item.quantity}`) || item.itemName.length === 0)
            setItemsListValid(!haveError);
        }
    }, [items]);

    useEffect(() => {
        if (props.id) {
            fetchInvoiceById(props.id).then(response => {
                const editInvoice: InvoiceEntity = response;
                setInvoice(response);
                setFormData({
                    billFromStreetAddress: {
                        ...formData.billFromStreetAddress,
                        value: editInvoice.billFrom.streetAddress
                    },
                    billFromCity: {
                        ...formData.billFromCity,
                        value: editInvoice.billFrom.city
                    },
                    billFromPostCode: {
                        ...formData.billFromPostCode,
                        value: editInvoice.billFrom.postCode
                    },
                    billFromCountry: {
                        ...formData.billFromCountry,
                        value: editInvoice.billFrom.country
                    },
                    billToClientName: {
                        ...formData.billToClientName,
                        value: editInvoice.billTo.clientName
                    },
                    billToClientEmail: {
                        ...formData.billToClientEmail,
                        value: editInvoice.billTo.clientEmail
                    },
                    billToStreetAddress: {
                        ...formData.billToStreetAddress,
                        value: editInvoice.billTo.address.streetAddress,
                    },
                    billToCity: {
                        ...formData.billToCity,
                        value: editInvoice.billTo.address.city,
                    },
                    billToPostCode: {
                        ...formData.billToPostCode,
                        value: editInvoice.billTo.address.postCode,
                    },
                    billToCountry: {
                        ...formData.billToCountry,
                        value: editInvoice.billTo.address.country,
                    },
                    invoiceDate: {
                        ...formData.invoiceDate,
                        value: convertDateForDatePicker(editInvoice.invoiceDate)
                    },
                    paymentTerms: {
                        ...formData.invoiceDate,
                        value: editInvoice.paymentTerms
                    },
                    projectDescription: {
                        ...formData.projectDescription,
                        value: editInvoice.projectDescription
                    }
                });
                setItems(response.itemList);
            })
        }
    }, [])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newInvoice: InvoiceEntity = {
            id: props.id || uuidv4(),
            ticketNumber: invoice?.ticketNumber || "",
            billFrom: {
                streetAddress: formData.billFromStreetAddress.value,
                country: formData.billFromCountry.value,
                city: formData.billFromCity.value,
                postCode: formData.billFromPostCode.value,
            },
            billTo: {
                clientEmail: formData.billToClientEmail.value,
                clientName: formData.billToClientName.value,
                address: {
                    streetAddress: formData.billToStreetAddress.value,
                    country: formData.billToCountry.value,
                    city: formData.billToCity.value,
                    postCode: formData.billToPostCode.value
                }
            },
            invoiceDate: (new Date(formData.invoiceDate.value)).getTime(),
            paymentTerms: formData.paymentTerms.value,
            projectDescription: formData.projectDescription.value,
            itemList: items,
            status: invoice ? invoice.status : StatusEnum.DRAFT
        };

        saveInvoice(newInvoice, editMode)
            .then(() => {
                toggleModal();
                // TODO need refresh list after adding new item
                document.location.reload();
            });
    }

    const formTitle = editMode ? `Edit #${invoice?.ticketNumber}` : 'New Invoice';

    const formSubmitTitle = editMode ? `Save Changes` : 'Create Invoice';

    const handleAddItems = () => {
        const id = uuidv4();
        const newItems = [...items];
        newItems.push({id, price: 0, itemName: '', quantity: 1});
        setItems(newItems);
    }

    const handleChangeItems = (newItems: ItemEntity[]) => {
        setItems(newItems);
    }

    return (
        <InvoiceFormStyled onSubmit={handleSubmit}>
            <h3>{formTitle}</h3>
            <p className="text">Bill From</p>
            <FormInput
                name="billFromStreetAddress"
                error={form.billFromStreetAddress.error}
                errorMessage={form.billFromStreetAddress.errorMessage}
                value={form.billFromStreetAddress.value}
                label="Street Address"
                onChange={onChange}
            />
            <div className="fromInputs">
                <FormInput
                    error={form.billFromCity.error}
                    errorMessage={form.billFromCity.errorMessage}
                    value={form.billFromCity.value}
                    label="City"
                    name="billFromCity"
                    onChange={onChange}
                />
                <FormInput
                    error={form.billFromPostCode.error}
                    errorMessage={form.billFromPostCode.errorMessage}
                    value={form.billFromPostCode.value}
                    label="Post Code"
                    name="billFromPostCode"
                    onChange={onChange}
                />
                <FormInput
                    error={form.billFromCountry.error}
                    errorMessage={form.billFromCountry.errorMessage}
                    value={form.billFromCountry.value}
                    label="Country"
                    name="billFromCountry"
                    onChange={onChange}
                />
            </div>
            <p className="text">Bill To</p>
            <FormInput
                error={form.billToClientName.error}
                errorMessage={form.billToClientName.errorMessage}
                value={form.billToClientName.value}
                label="Client's Name"
                name="billToClientName"
                onChange={onChange}
            />
            <FormInput
                error={form.billToClientEmail.error}
                errorMessage={form.billToClientEmail.errorMessage}
                value={form.billToClientEmail.value}
                label="Client's Email"
                name="billToClientEmail"
                onChange={onChange}
            />
            <FormInput
                error={form.billToStreetAddress.error}
                errorMessage={form.billToStreetAddress.errorMessage}
                value={form.billToStreetAddress.value}
                label="Street Address"
                name="billToStreetAddress"
                onChange={onChange}
            />
            <div className="fromInputs">
                <FormInput
                    error={form.billToCity.error}
                    errorMessage={form.billToCity.errorMessage}
                    value={form.billToCity.value}
                    label="City"
                    name="billToCity"
                    onChange={onChange}
                />
                <FormInput
                    error={form.billToPostCode.error}
                    errorMessage={form.billToPostCode.errorMessage}
                    value={form.billToPostCode.value}
                    label="Post Code"
                    name="billToPostCode"
                    onChange={onChange}
                />
                <FormInput
                    error={form.billToCountry.error}
                    errorMessage={form.billToCountry.errorMessage}
                    value={form.billToCountry.value}
                    label="Country"
                    name="billToCountry"
                    onChange={onChange}
                />
            </div>
            <div className="date-payment">
                <FormInput
                    type='date'
                    error={form.invoiceDate.error}
                    errorMessage={form.invoiceDate.errorMessage}
                    value={form.invoiceDate.value}
                    label="Invoice Date"
                    name="invoiceDate"
                    onChange={onChange}
                />
                <FormSelect
                    error={form.paymentTerms.error}
                    errorMessage={form.paymentTerms.errorMessage}
                    value={form.paymentTerms.value}
                    label="Payment Terms"
                    options={[
                        {label: "Net 30 days", value: "net30"},
                        {label: "Net 10 days", value: "net10"},
                        {label: "Net 1 days", value: "net1"}
                    ]}
                    name="paymentTerms"
                    onChange={onChange}
                />
            </div>
            <FormInput
                error={form.projectDescription.error}
                errorMessage={form.projectDescription.errorMessage}
                value={form.projectDescription.value}
                label="Project Description"
                name="projectDescription"
                onChange={onChange}
            />
            <FormItemList
                items={items}
                onAddItems={handleAddItems}
                onChangeItems={handleChangeItems}
            />

            <div className="action">
                <button
                    type="submit"
                    className="submit"
                    disabled={!isFormValid() || !itemsListValid}>
                    {formSubmitTitle}
                </button>
            </div>
        </InvoiceFormStyled>
    )
}
