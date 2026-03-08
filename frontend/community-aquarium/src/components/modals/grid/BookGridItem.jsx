import ClickableGridItem from "../../../ui/ClickableGridItem";

const BookGridItem = ({ name, image, onClick }) => {
    return (
        <ClickableGridItem image={image} onClick={onClick}>
            <div className="flex align-center items-center text-md">
                <span>{name}</span>
            </div>
        </ClickableGridItem>
    )
};

export default BookGridItem;