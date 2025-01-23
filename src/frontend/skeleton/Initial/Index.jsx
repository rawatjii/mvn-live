import React, { useState, useEffect, useRef } from "react";
import * as CONFIG from "../../../config/config";
import "./initialLoading.css";
import { useLocation } from "react-router-dom";

const InitialLoading = ({ loadingCount, setLoadingCount, onComplete, fast, second, videoUrl, test}) => {
    const intervalRef = useRef(null);
    const onCompleteRef = useRef(onComplete);
    const { pathname } = useLocation();

    useEffect(() => {
        // Update the onCompleteRef to ensure it references the latest function
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        const intervalDuration = fast == "true" ? 20 : 300;
    
        intervalRef.current = setInterval(() => {
            setLoadingCount((prevState) => {
                const nextCount = Math.min(100, Math.floor(prevState + 1)); // Ensure integer and cap at 100
                if (nextCount >= 100) {
                    clearInterval(intervalRef.current);
                    localStorage.setItem('count', 100); // Ensure integer in localStorage
                    onCompleteRef.current?.();
                } else {
                    localStorage.setItem('count', nextCount); // Ensure integer in localStorage
                }
                return nextCount; // Ensure return is an integer
            });
        }, intervalDuration);
    
        return () => {
            if (second === 'true') {
                localStorage.removeItem('count');
            }
            clearInterval(intervalRef.current);
        };
    }, []);
    

    return (
        <div className="initial_loading">
            <div className="custom_load">
                <div className="building">
                    <img src={CONFIG.IMAGE_URL + 'loader_building.webp'} alt="loader building" className="img-fluid building_icon" />
                    <div className="overlay" style={{ bottom: Math.floor(loadingCount) + '%' }}></div>
                </div>

                <img src={CONFIG.IMAGE_URL + 'loader.gif'} alt="mvn loader" className="img-fluid" />
                {/* <video src={CONFIG.IMAGE_URL + 'loader.mp4'} muted autoPlay loop playsInline /> */}
                
                <div className="bar">
                    <span className="fill" style={{ width: Math.floor(loadingCount) + '%' }}></span>
                </div>
                <p className="count1">{Math.floor(loadingCount)} % {test === 'true' ? 'testing' : ''}</p>
            </div>
        </div>
    );
};

export default InitialLoading;
