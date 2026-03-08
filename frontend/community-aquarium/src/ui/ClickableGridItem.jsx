const ClickableGridItem = ({ image, children, onClick }) => {
    return (
        <button className="rounded-lg border-4 border-stone-400 cursor-pointer p-2" onClick={onClick}>
            <img src={image} className="aspect-square rounded-lg m-1 mb-2 object-contain" />
            {children}
        </button>
    );
};

export default ClickableGridItem;