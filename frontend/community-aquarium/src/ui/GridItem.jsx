const GridItem = props => {
    return (
        <div className="rounded-lg border-4 border-stone-400 cursor-pointer p-2">
            <div className="aspect-square rounded-lg m-1 bg-amber-100 mb-2" />
            {props.children}
        </div>
    );
};

export default GridItem;