import SimulationContext from "./simulation-context";
import { useState, useEffect } from "react";
import { OWNED_FISH_DATA } from '../data/fishData';
import { VARIANT_DATA } from '../data/variantData';

const SimulationProvider = props => {
    const [coins, setCoins] = useState(0);
    const [ownedFish, setOwnedFish] = useState([]);

    const coinsYield = ownedFish.reduce((sum, fish) => {
        const base = VARIANT_DATA[fish.variant].baseYield;
        const ageBonus = 1 + (Math.floor(fish.age / 100) * 0.1);
        return sum + (base * ageBonus);
    }, 0);

    useEffect(() => {
        setOwnedFish(OWNED_FISH_DATA);
    }, []);

    useEffect(() => {
        const coinInterval = setInterval(() => {
            setCoins(prevCoins => prevCoins + coinsYield);
        }, 5000);

        return () => clearInterval(coinInterval);
    }, [coinsYield])

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