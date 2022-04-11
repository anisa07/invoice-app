import {StyledFormItem, StyledInput} from "./formItemStyle"
import {ItemEntity} from "../../../types/InvoiceEntity";
import {ChangeEvent} from "react";

interface FormItemProps {
    item: ItemEntity,
    onChangeItemEntity: (fieldName: keyof ItemEntity, value: string|number) => void,
    onDeleteItem: (id: string) => void,
}

export const FormItem = (props: FormItemProps) => {
    const fullPrice = () => props.item.quantity * props.item.price;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeItemEntity(e.target.name as keyof ItemEntity, e.target.value);
    }

    const handleDelete = () => {
        props.onDeleteItem(props.item.id);
    }

    return (
        <StyledFormItem>
            <StyledInput
                name="itemName"
                value={props.item.itemName} onChange={handleChange} />
            <StyledInput name="quantity" value={props.item.quantity} onChange={handleChange} />
            <StyledInput name="price" value={props.item.price} onChange={handleChange} />
            <span>{fullPrice()}</span>
            <button className="deleteItem" onClick={handleDelete}>X</button>
        </StyledFormItem>
    )
}
