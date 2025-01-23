import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "react-bootstrap";
import CustomCard from "../Card";
import * as CONFIG from "../../../config/config";
import LivingRoomVideoLoader from "../../../common/Loader/micro/livingRoomVideo/Index";
import ScrollDown from "../../../common/scrollDown/Index";

gsap.registerPlugin(ScrollTrigger);

const LivingRoomVideoGurugram = ({ data, onLoadComplete }) => {
  const canvasRef = useRef(null); // Ref for the canvas element
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]); // Array to store loaded images
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRef = useRef(null);
  const totalFramesDesktop = 126;
  const totalFramesMobile = 126;

  const { title, desc } = data.living_room_video;

  // Detect screen size
  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
  //   };
  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => {
  //     window.removeEventListener("resize", checkMobile);
  //   };
  // }, []);

  // Load images for mobile and desktop
  useEffect(() => {
    if (isMobile === null) return; // Wait until `isMobile` is determined.

    const totalFrames = isMobile ? totalFramesMobile : totalFramesDesktop;
    const imagePath = isMobile ? "assets/videos/living-room/mobile/" : "assets/videos/living-room/desktop/";

    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${imagePath}${i}.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages); // Set loaded images
          setLoading(false); // All images loaded, hide loader.
          onLoadComplete(); // Notify that loading is complete
          drawFrame(0, loadedImages); // Immediately draw the first frame on the canvas
        }
      };

      loadedImages.push(img);
    }
  }, [isMobile]); // Depend on `isMobile` to reload images when the state changes.

  // GSAP Animation (canvas version)
  useEffect(() => {
    if (images.length === 0 || loading) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!canvas || !ctx) return; // Early exit if canvas or context is not available

    const totalFrames = isMobile ? totalFramesMobile : totalFramesDesktop;

    // ScrollTrigger Animation
    const scrollAnimation = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 80px",
      end: `+=${window.innerHeight * 4}`,
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        drawFrame(frameIndex, images); // Update the frame dynamically as user scrolls
      },
      onLeaveBack: () => {
        drawFrame(0, images); // Show the first frame when leaving back
      },
      onLeave: () => {
        drawFrame(totalFrames - 1, images); // Show the last frame when leaving
      },
    });

    // Refresh ScrollTrigger to account for loaded content
    ScrollTrigger.refresh();

    return () => {
      // Clean up ScrollTrigger instance
      scrollAnimation.kill();
    };
  }, [images, isMobile, loading]);

  // Function to draw a frame on the canvas
  const drawFrame = (frameIndex, images) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!canvas || !ctx) return;

    const img = images[frameIndex];
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

  // Ensuring the canvas size is adjusted properly
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, [isMobile]); // Update canvas size on window resize

  return (
    <>
      {/* Show loader if still loading */}
      {loading && <LivingRoomVideoLoader />}

      {!loading && (
        <>
          <div className="section living_room_video_section design1 pb-0" ref={sectionRef} id="livingRoomSlidingDoor">
            <div className="frames_content">
              {/* Canvas for images */}
              <canvas
                ref={canvasRef}
                style={{ display: "block", margin: "auto", width:'100%' }}
              />

              {/* Optional ScrollDown component */}
              <ScrollDown />
            </div>

            <Container>
              <div className="about">
                <CustomCard title={title} desc={desc} className="px_sm_0" />
              </div>
            </Container>
          </div>
        </>
      )}
    </>
  );
};

export default LivingRoomVideoGurugram;
