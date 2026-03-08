import ClickableGridItem from "../../../ui/ClickableGridItem";

const ShopGridItem = ({ name, price, image, onClick }) => {
    return (
        <ClickableGridItem image={image} onClick={onClick}>
            <div className="flex justify-between items-center text-md">
                <span>{name}</span>
                <span>🟡{price}</span>
            </div>
        </ClickableGridItem>
    )
};

export default ShopGridItem;