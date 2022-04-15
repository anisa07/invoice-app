import {ChangeEvent} from "react";
import { FormInputContainer, StyledInput, StyledWarning } from "./formInputStyles";

export interface FormInputProps {
    placeholder?: string,
    type?: string,
    error: boolean,
    errorMessage: string,
    value: string,
    label: string,
    name: string,
    onChange: (v: ChangeEvent) => void,
}

export const FormInput = (props: FormInputProps) => {
    const handleChange = (e: ChangeEvent) => {
        props.onChange(e);
    }

    return <FormInputContainer>
        <span className="label">{props.label}</span>
        <StyledInput
            name={props.name}
            error={props.error}
            placeholder={props.placeholder}
            type={props.type || "text"}
            value={props.value}
            onChange={handleChange}
        />
        <StyledWarning>
            {props.error && <>{props.errorMessage}</>}
        </StyledWarning>
    </FormInputContainer>
}
