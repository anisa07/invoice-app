import {ChangeEvent} from "react";
import { FormInputContainer, StyledInput, StyledWarning } from "./formInputStyles";

export interface FormInputProps {
    placeholder?: string,
    type?: string,
    error: boolean,
    errorMessage: string,
    value: string,
    label: string,
    onChange: (v: string) => void,
    onBlur?: () => void
}

// export interface StyledInputProps {
//     placeholder: string,
//     type: string,
//     error: boolean,
//     value: string,
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void,
//     onBlur?: () => void
// }

export const FormInput = (props: FormInputProps) => {
    const handleBlur = () => {
        if (props.onBlur) {
            props.onBlur();
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target?.value || '');
    }

    return <FormInputContainer>
        <span className="label">{props.label}</span>
        <StyledInput
            error={props.error}
            placeholder={props.placeholder}
            type={props.type || "text"}
            value={props.value}
            onBlur={handleBlur}
            onChange={handleChange}
        />
        <StyledWarning>
            {props.error && <>{props.errorMessage}</>}
        </StyledWarning>
    </FormInputContainer>
}
