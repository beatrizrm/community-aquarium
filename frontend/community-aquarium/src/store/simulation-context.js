import React from "react";

const SimulationContext = React.createContext({
    ownedFish: [],
    buyFish: (fish) => {},
    sellFish: (fish) => {}
});

export default SimulationContext;