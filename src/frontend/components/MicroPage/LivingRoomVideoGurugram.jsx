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

const LivingRoomVideoGurugram = ({ data, onLoadComplete }) => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0); // Loading progress
  const { isMobile } = useMatches();
  const totalFramesMobile = 133;

  const { title, desc } = data.living_room_video;

  // Optimized `drawFrame` function
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

  // Image loading with progress tracking
  useEffect(() => {
    const totalFrames = totalFramesMobile;
    const imagePath = "assets/videos/living-room/desktop/";

    const loadImages = async () => {
      const promises = Array.from({ length: totalFrames }, (_, i) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = `${imagePath}${i + 1}.webp`;
          img.onload = () => {
            setProgress(((i + 1) / totalFrames) * 100); // Update progress
            resolve(img);
          };
        });
      });

      const loadedImages = await Promise.all(promises);
      setImages(loadedImages);
      setLoading(false); // Hide loader after all images are loaded
      onLoadComplete(); // Trigger callback
    };

    loadImages();
  }, [onLoadComplete]);

  // Scroll-triggered canvas animation
  useEffect(() => {
    if (images.length === 0 || loading) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const totalFrames = totalFramesMobile;

    drawFrame(0, ctx, canvas, images); // Draw the first frame immediately

    const scrollAnimation = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}`,
      pin: true,
      scrub: 0.1,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        drawFrame(frameIndex, ctx, canvas, images);
      },
    });

    ScrollTrigger.refresh();

    return () => {
      scrollAnimation.kill();
    };
  }, [images, loading]);

  // Adjust canvas size on load
  useEffect(() => {
    if (images.length > 0) {
      const img = images[0];
      const aspectRatio = img.width / img.height;
      const canvas = canvasRef.current;

      canvas.width = window.innerWidth;
      canvas.height = canvas.width / aspectRatio;
    }
  }, [images]);

  return (
    <div className="section sliding_door_section pb-0" ref={sectionRef} id="peacockSection">
      {/* Loading progress */}
      {loading && <PeacockLoader progress={progress} />}

      {/* Main content */}
      <div className="frames_content">
        <div className="image_col position-relative">
          <Watermark className={isMobile ? "" : ""} />
          <Logomark className={isMobile ? `left sm` : `left`} />
          <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ display: "block", margin: "auto" }}
          />
        </div>
        <ScrollDown className="color-black" />
      </div>

      <Container>
        <div className="about">
          <CustomCard title={title} desc={desc} className="px_sm_0 pb-0" />
        </div>
      </Container>
    </div>
  );
};

export default LivingRoomVideoGurugram;
