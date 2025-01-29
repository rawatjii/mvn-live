import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import Watermark from "../../../common/watermark/Index";
import ScrollDown from "../../../common/scrollDown/Index";
import { useMatches } from "../../../theme/theme";
import { debounce } from "lodash"; // Add lodash debounce for optimized resize

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerFrames = ({ data, onLoadComplete, onBannerExit, isMainBanner }) => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { isMobile } = useMatches();

  useEffect(() => {
    if (isMainBanner && sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "bottom top",
        toggleActions: "play none none reverse",
        onEnterBack: () => onBannerExit(false),
        onLeave: () => onBannerExit(true),
      });
    }
  }, [isMainBanner, onBannerExit]);

  const totalFramesMobile = useMemo(
    () => (isMobile ? data.frameCounts.mobileFrameCounts : data.frameCounts.desktopFrameCounts),
    [isMobile, data.frameCounts]
  );

  const imagePath = useMemo(
    () => (isMobile ? data.path.mobilePath : data.path.desktopPath),
    [isMobile, data.path]
  );

  const cardData = useMemo(
    () => ({
      title: data.second_title,
      desc: data.desc,
    }),
    [data.second_title, data.desc]
  );

  const loadImage = (index) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = `${imagePath}${index + 1}.webp`;
      img.onload = () => resolve(img);
    });
  };

  const lazyLoadImages = async () => {
    const promises = [];
    for (let i = 0; i < totalFramesMobile; i++) {
      promises.push(loadImage(i));
    }
    const loadedImages = await Promise.all(promises);
    setImages(loadedImages);
    setLoading(false);
    onLoadComplete();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loading) {
          lazyLoadImages();
        }
      },
      {
        rootMargin: "100px", // Start loading before the image enters the viewport
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [loading, totalFramesMobile]);

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
    if (images.length === 0 || loading) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

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
        const frameIndex = Math.floor(self.progress * (totalFramesMobile - 1));
        // Skip frames when scrolling fast (frame skipping)
        if (self.progress > 0.05) {
          throttledDrawFrame(frameIndex);
        }
      },
    });

    return () => {
      scrollAnimation.kill();
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, [images, loading, totalFramesMobile]);

  const handleResize = debounce(() => {
    if (images.length > 0) {
      const img = images[0];
      const aspectRatio = img.width / img.height;
      const canvas = canvasRef.current;

      canvas.width = window.innerWidth;
      canvas.height = canvas.width / aspectRatio;

      const ctx = canvas.getContext("2d");
      drawFrame(0, ctx, canvas, images);
    }
  }, 300); // Debounced resize

  useEffect(() => {
    handleResize(); // Initialize canvas size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  return (
    <section className={`section ${isMainBanner ? "banner p-0" : "Scroll_Height pb-0"}`} ref={sectionRef}>
      <div className="frames_content">
        <div className="image_col position-relative">
          <Watermark />
          <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ display: "block", margin: "auto" }}
          />
        </div>
        <ScrollDown className="color-black" />
      </div>
      <Container className={data.classCustomCard}>
        <div className="about">
          <CustomCard title={cardData.title} desc={cardData.desc} className="px_sm_0 pb-0" />
        </div>
      </Container>
    </section>
  );
};

export default ScrollTriggerFrames;
