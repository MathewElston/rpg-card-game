import React, { useEffect, useRef, useState } from 'react'

const mainFrameLoop = (timestamp: number) => {
    const frameIdRef = useRef<number | null>(null);
    const [frameCount, setframeCount] = useState(0);

    const currentTime = Date.now();
    const deltaTime = currentTime - timestamp

    const loop = () => {
        if (deltaTime >= 12.6) {
            setframeCount((prevframeCount) => prevframeCount +1);

        }

        frameIdRef.current = requestAnimationFrame(loop);
    };

    useEffect(() => {

            frameIdRef.current = requestAnimationFrame(loop);

        return () => {

            if (frameIdRef.current)
            cancelAnimationFrame(frameIdRef.current)
        }

    }, []);


    console.log(frameCount);
    return {frameCount};
}

export default mainFrameLoop