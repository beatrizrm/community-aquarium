import { useContext, useEffect, useRef, useState } from "react";
import { Tank } from "../simulation/Tank";
import SimulationContext from "../store/simulation-context";

const TankContainer = () => {
    const canvasRef = useRef();
    const containerRef = useRef();
    const simCtx = useContext(SimulationContext);

    const [tank, setTank] = useState();

    useEffect(() => {
        const canvas = canvasRef.current;
        const tankInstance = new Tank(canvas);
        tankInstance.start();

        setTank(tankInstance);

        const resizeCanvas = () => {
            const container = containerRef.current;
            
            // Match parent div's dimensions
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            tankInstance.stop();
            window.removeEventListener('resize', resizeCanvas);
        }
    }, []);

    useEffect(() => {
        if (!tank) return;  // wait until tank has been created

        if (simCtx.ownedFish.length > tank.fishObjs.length) {
            const newFish = simCtx.ownedFish[simCtx.ownedFish.length - 1];
            tank.addFish(newFish);
        }
    }, [simCtx.ownedFish, tank]);

    return (
        <div ref={containerRef} className="w-full flex-1 min-h-0">
            <canvas ref={canvasRef} />
        </div>
    )
};

export default TankContainer;