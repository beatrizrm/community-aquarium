import { useEffect, useRef } from "react";

const TankContainer = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const resizeCanvas = () => {
            canvasRef.width = window.innerWidth;
            canvasRef.height = window.innerHeight;
        }
        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        }
    })

    return (
        <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full bg-black"/>
    )
};

export default TankContainer;