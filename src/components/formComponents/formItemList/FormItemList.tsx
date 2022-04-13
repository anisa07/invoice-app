import {StyledFormItemList} from "./FormItemListStyle"
import {ItemEntity} from "../../../types/InvoiceEntity";
import {FormItem} from "../formItem/FormItem";
import {SyntheticEvent} from "react";

interface FormItemListProps {
    items: ItemEntity[];
    onAddItems: () => void;
    onChangeItems: (items: ItemEntity[]) => void;
}

export const FormItemList = (props: FormItemListProps) => {

    const handleChangeItem = (id: string) => (fieldName: keyof ItemEntity, value: string | number) => {
        const itemIndex = props.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            const copyItems = [...props.items];
            copyItems[itemIndex] = {...copyItems[itemIndex], [fieldName]: value};
            props.onChangeItems(copyItems);
        }
    }

    const handleDeleteItem = (id: string) => {
        const itemIndex = props.items.findIndex(item => item.id === id);
        if (itemIndex > -1) {
            const copyItems = [...props.items];
            copyItems.splice(itemIndex, 1);
            props.onChangeItems(copyItems);
        }
    }

    const handleAddItem = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onAddItems();
    }

    const displayList = () => props.items.length > 0;

    return <StyledFormItemList>
        <h4>Item List</h4>
        <div className="headerList">
            <span>Item Name</span>
            <span>QTY</span>
            <span>Price</span>
            <span>Total</span>
        </div>
        {displayList() && props.items.map(
            (item) =>
                <FormItem
                    key={item.id}
                    item={item}
                    onDeleteItem={handleDeleteItem}
                    onChangeItemEntity={handleChangeItem(item.id)}
                />)}
        <button className="addItem" onClick={handleAddItem}>+ Add New Item</button>
    </StyledFormItemList>
}
