import useForm, {ensureNotEmpty, FormData} from "../../../hooks/useForm";
import {FormEvent, useState} from "react";
import {InvoiceFormStyled} from "./invoiceFormStyles";
import {FormInput} from "../../formComponents/formInput/FormInput";
import {convertDateForDatePicker} from "../../../helpers/invoiceHelper";

export interface InvoiceFormProps {
    id?: string
}

export const InvoiceForm = (props: InvoiceFormProps) => {
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
        }
    });

    const {isValid, onValidate, onChange} = useForm(formData, setFormData);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const formTitle = props.id ? `Edit #${props.id}` : 'New Invoice';

    const formSubmitTitle = props.id ? `Save Changes` : 'Create Invoice';

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
            </div>
            <div className="action">
                <button
                    type="submit"
                    className="submit"
                    disabled={!isValid}>
                    {formSubmitTitle}
                </button>
            </div>
        </InvoiceFormStyled>
    )
}
