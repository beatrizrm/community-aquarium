import SimulationContext from "./simulation-context";
import { useState, useEffect } from "react";
import { OWNED_FISH_DATA } from '../data/fishData';

const SimulationProvider = props => {
    const [coins, setCoins] = useState(0);
    const [ownedFish, setOwnedFish] = useState([]);

    useEffect(() => {
        setOwnedFish(OWNED_FISH_DATA);
    }, []);

    useEffect(() => {
        const coinInterval = setInterval(() => {
            setCoins(prevCoins => prevCoins + 10);
        }, 5000);

        return () => clearInterval(coinInterval);
    }, [])

    const buyFishHandler = (fish, price) => {
        if (coins >= price) {
            setCoins(prevCoins => prevCoins - price);

            setOwnedFish(prevFish =>
                [...prevFish, {...fish, id: Math.random().toString()}]
            );
        }
    }

    const sellFishHandler = fish => {
        setOwnedFish(prevFish => 
            prevFish.filter(f => f.id !== fish.id)
        );
    }

    const simulationContext = {
        coins: coins,
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