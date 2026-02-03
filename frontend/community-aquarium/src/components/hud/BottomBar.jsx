import CircleButton from "../../ui/CircleButton";

const BottomBar = () => {
    return (
        <nav className="pointer-events-auto flex justify-center gap-6 w-full z-10 p-3">
            <CircleButton>🛒</CircleButton>
            <CircleButton>📖</CircleButton>
            <CircleButton>🤏</CircleButton>
        </nav>
    );
};

export default BottomBar;