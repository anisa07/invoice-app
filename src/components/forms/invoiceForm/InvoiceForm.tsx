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
    const {isValid, onValidate, onChange} = useForm(formData, setFormData);
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
                error={formData.billFromStreetAddress.error}
                errorMessage={formData.billFromStreetAddress.errorMessage}
                value={formData.billFromStreetAddress.value}
                label="Street Address"
                onChange={onChange("billFromStreetAddress")}
                onBlur={onValidate("billFromStreetAddress")}
            />
            <div className="fromInputs">
                <FormInput
                    error={formData.billFromCity.error}
                    errorMessage={formData.billFromCity.errorMessage}
                    value={formData.billFromCity.value}
                    label="City"
                    onChange={onChange("billFromCity")}
                    onBlur={onValidate("billFromCity")}
                />
                <FormInput
                    error={formData.billFromPostCode.error}
                    errorMessage={formData.billFromPostCode.errorMessage}
                    value={formData.billFromPostCode.value}
                    label="Post Code"
                    onChange={onChange("billFromPostCode")}
                    onBlur={onValidate("billFromPostCode")}
                />
                <FormInput
                    error={formData.billFromCountry.error}
                    errorMessage={formData.billFromCountry.errorMessage}
                    value={formData.billFromCountry.value}
                    label="Country"
                    onChange={onChange("billFromCountry")}
                    onBlur={onValidate("billFromCountry")}
                />
            </div>
            <p className="text">Bill To</p>
            <FormInput
                error={formData.billToClientName.error}
                errorMessage={formData.billToClientName.errorMessage}
                value={formData.billToClientName.value}
                label="Client's Name"
                onChange={onChange("billToClientName")}
                onBlur={onValidate("billToClientName")}
            />
            <FormInput
                error={formData.billToClientEmail.error}
                errorMessage={formData.billToClientEmail.errorMessage}
                value={formData.billToClientEmail.value}
                label="Client's Email"
                onChange={onChange("billToClientEmail")}
                onBlur={onValidate("billToClientEmail")}
            />
            <FormInput
                error={formData.billToStreetAddress.error}
                errorMessage={formData.billToStreetAddress.errorMessage}
                value={formData.billToStreetAddress.value}
                label="Street Address"
                onChange={onChange("billToStreetAddress")}
                onBlur={onValidate("billToStreetAddress")}
            />
            <div className="fromInputs">
                <FormInput
                    error={formData.billToCity.error}
                    errorMessage={formData.billToCity.errorMessage}
                    value={formData.billToCity.value}
                    label="City"
                    onChange={onChange("billToCity")}
                    onBlur={onValidate("billToCity")}
                />
                <FormInput
                    error={formData.billToPostCode.error}
                    errorMessage={formData.billToPostCode.errorMessage}
                    value={formData.billToPostCode.value}
                    label="Post Code"
                    onChange={onChange("billToPostCode")}
                    onBlur={onValidate("billToPostCode")}
                />
                <FormInput
                    error={formData.billToCountry.error}
                    errorMessage={formData.billToCountry.errorMessage}
                    value={formData.billToCountry.value}
                    label="Country"
                    onChange={onChange("billToCountry")}
                    onBlur={onValidate("billToCountry")}
                />
            </div>
            <div className="date-payment">
                <FormInput
                    type='date'
                    error={formData.invoiceDate.error}
                    errorMessage={formData.invoiceDate.errorMessage}
                    value={formData.invoiceDate.value}
                    label="Invoice Date"
                    onChange={onChange("invoiceDate")}
                    onBlur={onValidate("invoiceDate")}
                />
                <FormSelect
                    error={formData.paymentTerms.error}
                    errorMessage={formData.paymentTerms.errorMessage}
                    value={formData.paymentTerms.value}
                    label="Payment Terms"
                    options={[
                        {label: "Net 30 days", value: "net30"},
                        {label: "Net 10 days", value: "net10"},
                        {label: "Net 1 days", value: "net1"}
                    ]}
                    onChange={onChange("paymentTerms")}
                    onBlur={onValidate("paymentTerms")}
                />
            </div>
            <FormInput
                error={formData.projectDescription.error}
                errorMessage={formData.projectDescription.errorMessage}
                value={formData.projectDescription.value}
                label="Project Description"
                onChange={onChange("projectDescription")}
                onBlur={onValidate("projectDescription")}
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
                    disabled={!isValid || !itemsListValid}>
                    {formSubmitTitle}
                </button>
            </div>
        </InvoiceFormStyled>
    )
}
