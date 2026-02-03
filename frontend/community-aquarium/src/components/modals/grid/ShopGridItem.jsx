import GridItem from "../../../ui/GridItem";

const ShopGridItem = props => {
    return (
        <GridItem>
            <div className="flex justify-between items-center text-md">
                <span>{props.name}</span>
                <span>🟡{props.price}</span>
            </div>
        </GridItem>
    )
};

export default ShopGridItem;