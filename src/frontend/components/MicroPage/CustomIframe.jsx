import React, { useEffect, useRef, useState } from "react";

const CustomIframe = ({ data }) => {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Unobserve after first trigger
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Adjust if needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!data) return null;

  return (
    <div className="customIframeContainer mt-5" ref={containerRef}>
      {isVisible && (
        <iframe
          ref={iframeRef}
          src={data}
          title="YouTube video player"
          frameBorder="0"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          width="100%"
          height="100%"
          playsInline
          className="mb-4"
        ></iframe>
      )}
      <hr />
    </div>
  );
};

export default CustomIframe;
