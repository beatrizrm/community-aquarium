import CircleButton from "../../ui/CircleButton";

const BottomBar = props => {
    return (
        <nav className="pointer-events-auto flex justify-center gap-6 w-full z-10 p-3">
            <CircleButton onClick={() => props.onOpen('shop')}>🛒</CircleButton>
            <CircleButton onClick={() => props.onOpen('book')}>📖</CircleButton>
            <CircleButton>🤏</CircleButton>
        </nav>
    );
};

export default BottomBar;