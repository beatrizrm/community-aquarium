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

        const initTank = async () => {
            await tankInstance.start();
            setTank(tankInstance);
        }

        const resizeCanvas = () => {
            const container = containerRef.current;
            
            // Match parent div's dimensions
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        }

        initTank();
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            tankInstance.stop();
            window.removeEventListener('resize', resizeCanvas);
        }
    }, []);

    useEffect(() => {
        if (!tank) return;  // wait until tank has been created

        const difference = simCtx.ownedFish.length - tank.fishObjs.length;

        if (difference > 0) {
            const fishToAdd = simCtx.ownedFish.slice(-difference);    // get the fish at the end of the arr
            for (const fish of fishToAdd) {
                tank.addFish(fish);
            }
        }
    }, [simCtx.ownedFish, tank]);

    return (
        <div ref={containerRef} className="w-full flex-1 min-h-0">
            <canvas ref={canvasRef} />
        </div>
    )
};

export default TankContainer;