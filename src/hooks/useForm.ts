import {Dispatch, SetStateAction, useState} from "react";

export interface ValidationResult {
    error: boolean,
    errorMessage: string,
}

export type FormValidationFunction = (fieldName: keyof FormData) => (value: string) => ValidationResult;

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

// TODO separate file
export const ensureNotEmpty = (fieldName: keyof FormData) => (value: string) => {
    if (value.length === 0) {
        return {
            error: true,
            errorMessage: `${toProperCase(fieldName as string)} is required.`,
        }
    }

    return {
        error: false,
        errorMessage: '',
    }
};

export default function useForm(formData: FormData, setter: Dispatch<SetStateAction<FormData>>) {
    const [isValid, setIsValid] = useState(false);

    const onChange = (fieldName: keyof FormData) => (value: string) => {
        setter({
            ...formData,
            [fieldName] : {
                ...formData[fieldName],
                value
            }
        })
    }

    const validateForm = () => {
        const formErrors = Object.entries(formData).reduce((accu, [fieldName, value]) => {
            const {error} = validateField(fieldName as keyof FormData);
            return error ? [...accu, error] : [...accu];
        }, [] as Array<boolean>);
        setIsValid(!formErrors.length);
    }

    const validateField = (fieldName: keyof FormData) => {
        const currentFormData = formData[fieldName];
        const validations = formData[fieldName].validation;
        let validationResult = {
            error: false,
            errorMessage: '',
        };
        for (const validation of validations) {
            validationResult = validation(fieldName)(currentFormData.value);

            if (validationResult.error) {
                break;
            }
        }
        return validationResult;
    }

    const validate = (fieldName: keyof FormData) => {
        const validationResult = validateField(fieldName);

        setter({
            ...formData,
            [fieldName]: {
                ...formData[fieldName],
                error: validationResult.error,
                errorMessage: validationResult.errorMessage,
            }
        });

        return validationResult.error;
    }

    const onValidate = (fieldName: keyof FormData) => () => {
        const validationFieldResult = validate(fieldName);

        if (!validationFieldResult) {
            validateForm();
        }
    }

    return {isValid, onChange, onValidate}
}
