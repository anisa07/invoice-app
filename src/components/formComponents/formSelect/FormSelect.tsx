import {FormInputContainer, StyledInput, StyledWarning, StyleSelect} from "../formInput/formInputStyles";
import {FormInputProps} from "../formInput/FormInput";
import {ChangeEvent} from "react";

export interface FormSelectProps extends FormInputProps {
    options: Record<string, string|number>[],
}

export const FormSelect = (props: FormSelectProps) => {

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.target.value);
    }

    return <FormInputContainer>
        <span className="label">{props.label}</span>
        <StyleSelect value={props.value} onChange={handleChange} error={props.error}>
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
