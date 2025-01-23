import React, { useState, useEffect, useRef } from "react";
import * as CONFIG from "../../../config/config";
import "./initialLoading.css";
import { useLocation } from "react-router-dom";

const InitialLoading = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const location = useLocation();
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [fastForward, setFastForward] = useState(false);
    const totalFrames = 120; // Total number of frames
    const frames = Array.from({ length: totalFrames }, (_, i) => `${CONFIG.IMAGE_URL}loader/${i + 1}.webp`);
    const progressRef = useRef(progress);
    const intervalRef = useRef(null);

    useEffect(() => {
        document.body.classList.add("in_loading");

        const handlePageLoad = () => {
            setLoadingComplete(true);

            // Delay the unmounting and trigger onComplete after delay
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 200); // Adjust the delay as needed
        };

        const simulateProgress = () => {
            intervalRef.current = setInterval(() => {
                setProgress((prev) => {
                    const increment = fastForward ? 3 : 1; // Increase by a larger step during fast forward
                    const nextProgress = prev + increment;
                    progressRef.current = nextProgress; // Update ref
                    return Math.min(nextProgress, totalFrames - 1); // Prevent exceeding totalFrames
                });

                if (progressRef.current >= totalFrames - 1) {
                    clearInterval(intervalRef.current);
                    handlePageLoad();
                }
            }, fastForward ? 20 : 100); // Adjust speed for fast forward and normal mode
        };

        simulateProgress();

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [fastForward, onComplete, location]);

    useEffect(() => {
        if (progress >= totalFrames - 1 && !fastForward) {
            setFastForward(true); // Trigger fast forward when near completion
        }
    }, [progress, fastForward, location]);

    const currentFrame = Math.min(progress, totalFrames - 1);

    return (
        <div className="initial_loading">
            <img
                src={frames[currentFrame]}
                alt={`Loading frame ${currentFrame + 1}`}
                className="img-fluid logo"
            />
        </div>
    );
};

export default InitialLoading;
