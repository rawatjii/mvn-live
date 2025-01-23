import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import SecTitle from "../../../common/SecTitle/Index";
import CustomCard from "../Card";
import PeacockLoader from "../../../common/Loader/micro/peacockLoader/Index";
import Watermark from "../../../common/watermark/Index";
import * as CONFIG from '../../../config/config';
import ScrollDown from "../../../common/scrollDown/Index";

gsap.registerPlugin(ScrollTrigger);

const PeacockSection = ({ data, onLoadComplete }) => {
  const canvasRef = useRef(null); // Ref for the canvas
  const containerRef = useRef(null); // Ref for the scrollable container
  const [images, setImages] = useState([]); // Array to store loaded images
  const [isMobile, setIsMobile] = useState(false); // Track if it's mobile
  const [loading, setLoading] = useState(true); // Loader state

  const totalFramesMobile = 256; // Total frames for mobile

  // Function to draw a frame on the canvas
  const drawFrame = (frameIndex, ctx, canvas, images) => {
    if (!images || images.length === 0) return; // Guard against empty images array

    const img = images[frameIndex];
    if (!img) return; // Ensure the image exists

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imageAspectRatio = img.width / img.height;
    const canvasAspectRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;

    if (canvasAspectRatio > imageAspectRatio) {
      // Image is taller than the canvas, fit the width
      drawHeight = canvasWidth / imageAspectRatio;
    } else {
      // Image is wider than the canvas, fit the height
      drawWidth = canvasHeight * imageAspectRatio;
    }

    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight); // Draw the current frame
  };

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Load images for mobile
  useEffect(() => {
    if (window.innerWidth >= 768) {
      onLoadComplete(); // Immediately call onLoadComplete for desktop
      setLoading(false); // No loader for desktop
      return;
    }

    const totalFrames = totalFramesMobile;
    const imagePath = "assets/images/peacock/mobile/";

    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${imagePath}${i}.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setLoading(false); // All images loaded, hide loader
          onLoadComplete(); // Call onLoadComplete when loading is done
          drawFrame(0, loadedImages); // Immediately draw the first frame on the canvas
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [isMobile, onLoadComplete]);

  // GSAP ScrollTrigger Animation for mobile
  useEffect(() => {
    if (!isMobile || images.length === 0 || loading) return; // Skip if not mobile, still loading, or no images

    const canvas = canvasRef.current;
    if (!canvas) return; // Early exit if canvas is not available

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Early exit if getContext fails

    const totalFrames = totalFramesMobile;

    // Draw the first frame immediately after images are loaded
    drawFrame(0, ctx, canvas, images);

    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 79px",
      end: `+=${window.innerHeight * 4}`,
      pin: true, // Pin the canvas while scrolling
      scrub: 0.005,
      onUpdate: (self) => {
        if (images.length === 0) return; // Guard against empty image array

        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        drawFrame(frameIndex, ctx, canvas, images);
      },
      onLeaveBack: () => {
        drawFrame(0, ctx, canvas, images); // Show the first frame when leaving back
      },
      onLeave: () => {
        drawFrame(totalFrames - 1, ctx, canvas, images); // Show the last frame when leaving
      },
    });

    // Refresh ScrollTrigger to account for loaded content
    ScrollTrigger.refresh();

    return () => {
      scrollAnimation.kill();
    };
  }, [images, isMobile, loading]); // Re-run when images or loading state changes

  const { title, desc } = data.video1;

  return (
    <div className="section peacock_section pb-0" id="peacockSection">
      {/* Show loader only on mobile */}
      {isMobile && loading && <PeacockLoader />}

      {/* Main content once loading is complete */}
      {!loading && (
        <>
          <div ref={containerRef} className="frames_content">
            <div className="image_col position-relative">
              <Watermark className={isMobile ? 'style1' : 'style2'} />

              {/* Mobile Canvas */}
              {isMobile && (
                <canvas
                  ref={canvasRef}
                  width={window.innerWidth}
                  height={window.innerHeight}
                  style={{ display: "block", margin: "auto" }}
                />
              )}

              {/* Desktop Image */}
              {!isMobile && (
                <img src={CONFIG.IMAGE_URL + 'peacock/peacock.webp'} className="img-fluid peacock_img" />
              )}
            </div>

            <ScrollDown className="color-black" />
          </div>

          <Container>
            <div className="about">
              <CustomCard
                className="p_sm_0"
                title="EXPERIENCE THE GRANDEUR OF THE LIVING ROOM WITH 360° PANORAMIC VIEWS"
                desc="Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings."
              />
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default PeacockSection;
