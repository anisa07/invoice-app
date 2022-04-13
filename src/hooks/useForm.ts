import {Dispatch, SetStateAction, useEffect, useMemo, useState} from "react";

export interface ValidationResult {
    error: boolean,
    errorMessage: string,
}

export type FormValidationFunction = (fieldName?: keyof FormData) => (value: string) => ValidationResult;

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
export const ensureNotEmpty = () => (value: string) => {
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

export default function useForm(formData: FormData, setter: Dispatch<SetStateAction<FormData>>) {
    const [isValid, setIsValid] = useState(false);

    const onChange = (fieldName: string) => (value: string) => {
        const validationResult = validateField(fieldName, value);

        setter({
            ...formData,
            [fieldName]: {
                ...formData[fieldName],
                value,
                error: validationResult.error,
                errorMessage: validationResult.errorMessage
            }
        });
    };

    const validateForm = () => {
        return !Object.entries(formData).some(([fieldName]) => validateField(fieldName).error)
    };

    const validateField = (fieldName: string, value?: string) => {
        const currentFormData = formData[fieldName];
        const valueToCheck = typeof value === 'string' ? value : currentFormData.value;
        const validations = formData[fieldName].validation;
        let validationResult = {
            error: false,
            errorMessage: ''
        };
        for (const validation of validations) {
            validationResult = validation(fieldName)(valueToCheck);

            if (validationResult.error) {
                setIsValid(false);
                break;
            }
        }
        return validationResult;
    };

    const validate = (fieldName: string) => {
        const validationResult = validateField(fieldName);

        setter({
            ...formData,
            [fieldName]: {
                ...formData[fieldName],
                error: validationResult.error,
                errorMessage: validationResult.errorMessage
            }
        });

        return validationResult.error;
    };

    const onValidate = (fieldName: string) => () => {
        validate(fieldName);
    };

    const clearForm = () => {
        const formCopy = { ...formData };
        Object.keys(formCopy).forEach((item) => {
            formCopy[item].value = '';
            formCopy[item].error = false;
            formCopy[item].errorMessage = '';
        });
        setter(formCopy);
    };

    const formValid = useMemo(() => validateForm(), [formData]);

    useEffect(() => {
        formValid !== isValid && setIsValid(formValid);
    }, [formValid])


    return { isValid, onChange, onValidate, clearForm };
}
