import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import PeacockLoader from "../../../common/Loader/micro/peacockLoader/Index";
import Watermark from "../../../common/watermark/Index";
import ScrollDown from "../../../common/scrollDown/Index";
import Logomark from "../../../common/logomark/Index";
import { useMatches } from "../../../theme/theme";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerFrames = ({ data, onLoadComplete }) => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { isMobile } = useMatches();
  const {  second_title, desc, path, frameCounts, classMain, classCustomCard } = data;
  const totalFramesMobile = isMobile
    ? frameCounts.mobileFrameCounts
    : frameCounts.desktopFrameCounts;

  const drawFrame = (frameIndex, ctx, canvas, images) => {
    if (!images || !images[frameIndex]) return;

    const img = images[frameIndex];
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imageAspectRatio = img.width / img.height;
    const canvasAspectRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight;
    if (canvasAspectRatio > imageAspectRatio) {
      drawHeight = canvasWidth / imageAspectRatio;
      drawWidth = canvasWidth;
    } else {
      drawWidth = canvasHeight * imageAspectRatio;
      drawHeight = canvasHeight;
    }

    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const isMounted = { current: true }; // Flag to track component mount status
    const totalFrames = totalFramesMobile;
    const imagePath = path.desktopPath;

    const loadImages = async () => {
      const promises = Array.from({ length: totalFrames }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = `${imagePath}${i + 1}.webp`;
          img.onload = () => {
            if (isMounted.current) {
              setProgress(((i + 1) / totalFrames) * 100); // Update progress
              resolve(img);
            }
          };
        });
      });

      const loadedImages = await Promise.all(promises);
      if (isMounted.current) {
        setImages(loadedImages);
        setLoading(false);
        onLoadComplete();
      }
    };

    loadImages();

    return () => {
      isMounted.current = false; // Prevent further state updates
    };
  }, [path.desktopPath, totalFramesMobile, onLoadComplete]);

  useEffect(() => {
    if (images.length === 0 || loading) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const totalFrames = totalFramesMobile;

    drawFrame(0, ctx, canvas, images);

    let requestId;
    const throttledDrawFrame = (frameIndex) => {
      if (requestId) return;
      requestId = requestAnimationFrame(() => {
        drawFrame(frameIndex, ctx, canvas, images);
        requestId = null;
      });
    };

    const scrollAnimation = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      scrub: 0.1,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        throttledDrawFrame(frameIndex);
      },
    });

    return () => {
      scrollAnimation.kill();
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, [images, loading, totalFramesMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        const img = images[0];
        const aspectRatio = img.width / img.height;
        const canvas = canvasRef.current;

        canvas.width = window.innerWidth;
        canvas.height = canvas.width / aspectRatio;

        const ctx = canvas.getContext("2d");
        drawFrame(0, ctx, canvas, images);
      }
    };

    handleResize(); // Initialize canvas size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  return (
    <section className={`section ${classMain ? classMain: "Scroll_Height pb-0"} `} ref={sectionRef}>
      {loading && <PeacockLoader progress={progress} />}
      <div className="frames_content">
        <div className="image_col position-relative">
          <Watermark />
          <Logomark className={isMobile ? "left sm" : "left"} />
          <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ display: "block", margin: "auto" }}
          />
        </div>
        <ScrollDown className="color-black" />
      </div>
      <Container className={classCustomCard}>
        <div className="about">
          <CustomCard title={second_title} desc={desc} className="px_sm_0 pb-0" />
        </div>
      </Container>
    </section>
  );
};

export default ScrollTriggerFrames;
