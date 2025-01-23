import React, { useState, useEffect, Suspense } from "react";
import InitialLoading from "../../frontend/skeleton/Initial/Index";

const LoaderWrapper = ({ children, totalFrames, loadPromise }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    // Simulate loading progress based on the dynamic loading promise
    loadPromise
      .then(() => setProgress(100))
      .catch(() => setProgress(100)); // Handle loading errors if necessary

    // Progress animation: Map progress to frames dynamically
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10; // Increment randomly for smoother animation
      });
    }, 100);

    return () => clearInterval(interval);
  }, [loadPromise]);

  return (
    <Suspense fallback={<InitialLoading progress={progress} totalFrames={totalFrames} />}>
      {children}
    </Suspense>
  );
};

export default LoaderWrapper;
