import SimulationContext from "./simulation-context";
import { useState, useEffect } from "react";
import { OWNED_FISH_DATA } from '../data/fishData';

const SimulationProvider = props => {
    const [ownedFish, setOwnedFish] = useState([]);

    useEffect(() => {
        setOwnedFish(OWNED_FISH_DATA);
    }, []);

    const buyFishHandler = fish => {
        setOwnedFish(prevFish =>
            [...prevFish, {...fish, id: Math.random().toString()}]
        );
    }

    const sellFishHandler = fish => {
        setOwnedFish(prevFish => 
            prevFish.filter(f => f.id !== fish.id)
        );
    }

    const simulationContext = {
        ownedFish: ownedFish,
        buyFish: buyFishHandler,
        sellFish: sellFishHandler
    }

    return (
        <SimulationContext.Provider value={simulationContext}>
            {props.children}
        </SimulationContext.Provider>
    );
};

export default SimulationProvider;