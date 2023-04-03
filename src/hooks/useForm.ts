import {useCallback, useState} from "react";

export interface ValidationResult {
    error: boolean,
    errorMessage: string,
}

export type FormValidationFunction = (v: string) => ValidationResult;

export interface FormDataElement {
    value: string,
    error: boolean,
    errorMessage: string,
    validation: Array<FormValidationFunction>
}

export interface FormData {
    [key: string]: FormDataElement
}

export const toProperCase = (str: string) => {
    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();
}

export const ensureNumber = (value: string) => {
    return !!value.toLowerCase().match(/^[0-9]*$/);
}

// TODO separate file
export const ensureNotEmpty = (value: string) => {
    if (value.length === 0) {
        return {
            error: true,
            errorMessage: `Required.`,
        }
    }

    return {
        error: false,
        errorMessage: '',
    }
};

export default function useForm(formData: FormData) {
    const [form, setForm] = useState(formData);

    const validateField = useCallback(
        (inputField) => {
            for (const validate of inputField.validation) {
                const validationResult = validate(inputField.value);
                if (validationResult.error) {
                    return validationResult;
                }
            }
            return {
                error: false,
                errorMessage: '',
            }
        },
        [form]
    );

    const onChange = useCallback(
        (event) => {
            const {name, value} = event.target;
            const inputObj = {...form[name]};
            inputObj.value = value;
            const isValidInput = validateField(inputObj);
            inputObj.error = isValidInput.error;
            inputObj.errorMessage = isValidInput.errorMessage;

            setForm({...form, [name]: inputObj});
        },
        [form, validateField]
    );

    const isFormValid = useCallback(() => {
        return !Object.entries(form).some(([_, field]) =>validateField(field).error);
    }, [form]);

    return {onChange, isFormValid, form};
}
