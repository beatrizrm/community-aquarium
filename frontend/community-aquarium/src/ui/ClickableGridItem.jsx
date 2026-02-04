const ClickableGridItem = ({ children, onClick}) => {
    return (
        <button className="rounded-lg border-4 border-stone-400 cursor-pointer p-2" onClick={onClick}>
            <div className="aspect-square rounded-lg m-1 bg-amber-100 mb-2" />
            {children}
        </button>
    );
};

export default ClickableGridItem;