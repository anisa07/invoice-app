import useForm, {ensureNotEmpty, FormData} from "../../../hooks/useForm";
import {FormEvent, useState} from "react";
import {InvoiceFormStyled} from "./invoiceFormStyles";
import {FormInput} from "../../formComponents/FormInput";

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
                type="text"
                error={formData["billFromStreetAddress"].error}
                errorMessage={formData["billFromStreetAddress"].errorMessage}
                value={formData["billFromStreetAddress"].value}
                label="Street Address"
                onChange={onChange("billFromStreetAddress")}
                onBlur={onValidate("billFromStreetAddress")}
            />
            <p className="text">Bill To</p>
            <button
                type="submit"
                className="submit"
                disabled={!isValid}>
                {formSubmitTitle}
            </button>
        </InvoiceFormStyled>
    )
}
