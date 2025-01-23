import React, { useEffect, useState } from "react";
import * as CONFIG from '../../../config/config';

import './initialLoading.css';

const InitialLoading = ()=>{
    const [progress, setProgress] = useState(0);
    const [isAccelerating, setIsAccelerating] = useState(false);
    const totalFrames = 39; // Total number of frames
    const frames = Array.from({ length: totalFrames }, (_, i) => `${CONFIG.IMAGE_URL}loader/${i + 1}.webp`);

    useEffect(()=>{
        document.querySelector('body').classList.add('in_loading');

        const simulateProgress = () => {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 100) {
                        return prev + 1; // Simulate slow progress
                    } else {
                        clearInterval(interval);
                        accelerateToCompletion(); // Trigger acceleration
                        return 100;
                    }
                });
            }, 100); // Adjust for slower progress simulation
        };


        const accelerateToCompletion = () => {
            setIsAccelerating(true);
            let currentFrame = Math.floor((progress / 100) * totalFrames);
            const interval = setInterval(() => {
                currentFrame += 1;
                setProgress((currentFrame / totalFrames) * 100);
                if (currentFrame >= totalFrames - 1) {
                    clearInterval(interval);
                    finalizeLoading();
                }
            }, 100); // Speed up frame changes
        };

        const finalizeLoading = () => {
            setTimeout(() => {
                document.querySelector('body').classList.remove('in_loading');
                if (onComplete) onComplete();
            }, 300); // Allow slight delay for the last frame
        };

        simulateProgress();

        return () => {
            document.querySelector('body').classList.remove('in_loading');
        };
    }, [progress]);

    const currentFrame = Math.min(Math.floor((progress / 100) * totalFrames), totalFrames - 1);

    return(
        <div className="initial_loading">
            <img src={frames[currentFrame]} alt={`Loading frame ${currentFrame + 1}`} className="img-fluid logo"  />
            {/* <video src={CONFIG.IMAGE_URL + 'loader.mp4'} muted autoPlay loop controls={false}  playsInline ></video> */}
        </div>
    )
}

export default InitialLoading;