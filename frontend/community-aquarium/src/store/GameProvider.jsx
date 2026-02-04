import GameContext from "./game-context";
import { useState, useEffect } from "react";
import { DUMMY_FISH } from '../data/dummyData';

const GameProvider = props => {
    const [ownedFish, setOwnedFish] = useState([]);

    useEffect(() => {
        setOwnedFish(DUMMY_FISH);
    });

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

    const gameContext = {
        ownedFish: ownedFish,
        buyFish: buyFishHandler,
        sellFish: sellFishHandler
    }

    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameProvider;