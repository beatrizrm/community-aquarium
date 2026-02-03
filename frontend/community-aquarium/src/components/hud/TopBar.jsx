import Pill from "../../ui/Pill";

const TopBar = () => {
    return (
        <div className="pointer-events-auto flex justify-between w-full z-10 p-3">
            <Pill>Login</Pill>
            <Pill>5</Pill>
        </div>
    );
};

export default TopBar;