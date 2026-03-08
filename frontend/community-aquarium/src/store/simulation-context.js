import React from "react";

const SimulationContext = React.createContext({
    coins: 0,
    ownedFish: [],
    buyFish: (fish) => {},
    sellFish: (fish) => {}
});

export default SimulationContext;