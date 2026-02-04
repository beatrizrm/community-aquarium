import ClickableGridItem from "../../../ui/ClickableGridItem";

const BookGridItem = ({ name, onClick }) => {
    return (
        <ClickableGridItem onClick={onClick}>
            <div className="flex align-center items-center text-md">
                <span>{name}</span>
            </div>
        </ClickableGridItem>
    )
};

export default BookGridItem;