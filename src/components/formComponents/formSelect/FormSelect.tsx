import {FormInputContainer, StyledInput, StyledWarning, StyleSelect} from "../formInput/formInputStyles";
import {FormInputProps} from "../formInput/FormInput";
import {ChangeEvent} from "react";

export interface FormSelectProps extends FormInputProps {
    options: Record<string, string|number>[],
}

export const FormSelect = (props: FormSelectProps) => {
    const handleChange = (e: ChangeEvent) => {
        props.onChange(e);
    }

    return <FormInputContainer>
        <span className="label">{props.label}</span>
        <StyleSelect name={props.name} value={props.value} onChange={handleChange} error={props.error}>
            <option disabled value=""> -- select an option -- </option>
            {props.options.map(o => (
                <option key={o.value}>{o.label}</option>
            ))}
        </StyleSelect>
        <StyledWarning>
            {props.error && <>{props.errorMessage}</>}
        </StyledWarning>
    </FormInputContainer>
}
