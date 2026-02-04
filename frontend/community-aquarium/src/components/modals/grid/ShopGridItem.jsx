import ClickableGridItem from "../../../ui/ClickableGridItem";

const ShopGridItem = props => {
    return (
        <ClickableGridItem>
            <div className="flex justify-between items-center text-md">
                <span>{props.name}</span>
                <span>🟡{props.price}</span>
            </div>
        </ClickableGridItem>
    )
};

export default ShopGridItem;