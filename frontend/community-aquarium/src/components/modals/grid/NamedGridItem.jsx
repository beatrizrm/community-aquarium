import GridItem from "../../../ui/GridItem";

const NamedGridItem = props => {
    return (
        <GridItem>
            <div className="flex align-center items-center text-md">
                <span>{props.name}</span>
            </div>
        </GridItem>
    )
};

export default NamedGridItem;