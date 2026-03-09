import { useContext } from "react";
import Pill from "../../ui/Pill";
import SimulationContext from "../../store/simulation-context";

const TopBar = () => {
    const simCtx = useContext(SimulationContext);

    return (
        <div className="pointer-events-auto flex justify-between w-full z-10 p-3">
            <Pill>Login</Pill>
            <Pill>🟡 {Math.floor(simCtx.coins)}</Pill>
        </div>
    );
};

export default TopBar;