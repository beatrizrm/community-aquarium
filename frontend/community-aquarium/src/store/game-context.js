import React from "react";

const GameContext = React.createContext({
    ownedFish: [],
    buyFish: (fish) => {},
    sellFish: (fish) => {}
});

export default GameContext;