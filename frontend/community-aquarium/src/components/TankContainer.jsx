import { useEffect, useRef } from "react";
import { Tank } from "../simulation/Tank";

const TankContainer = () => {
    const canvasRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;

        const tank = new Tank(canvas);
        tank.start();

        const resizeCanvas = () => {
            const container = containerRef.current;
            
            // Match parent div's dimensions
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            tank.stop();
            window.removeEventListener('resize', resizeCanvas);
        }
    }, []);

    return (
        <div ref={containerRef} className="w-full flex-1 min-h-0">
            <canvas ref={canvasRef} />
        </div>
    )
};

export default TankContainer;