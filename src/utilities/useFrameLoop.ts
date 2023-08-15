import { useRef, useEffect } from 'react';

const useFrameLoop = (callback: (progress: number) => void) => {
  const requestIdRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const progressRef = useRef<number>(0);

  const frameLoop = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const currentTime = timestamp - startTimeRef.current;
    const totalTime = 6000;

  
    // Calculate the progress value between 0 and 1 based on the current time and total time
    progressRef.current = Math.min(currentTime / totalTime, 1);

    // Call the provided callback with the current progress value
    callback(progressRef.current);

      requestIdRef.current = requestAnimationFrame(frameLoop);
  
  };


  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(frameLoop);

    return () => {
      // Clean up by canceling the frame loop when the component unmounts
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, [callback]);

  // Return an object with progress and resetProgress
  return { progressState: progressRef.current };
};

export default useFrameLoop;
