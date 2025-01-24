import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMatches } from "../../../theme/theme";

gsap.registerPlugin(ScrollTrigger);

const MicroHero = ({ data, onLoadComplete }) => {
  const [loading, setLoading] = useState(true);
  const [totalFrames, setTotalFrames] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const canvasRef = useRef(null);
  const imageRefs = useRef([]);
  const isImagesLoaded = useRef(false);
  const scrollDownRef = useRef(null);

  const { isMobile } = useMatches();
  
  useEffect(() => {
    if (!data.micro_hero_section.isVdo) return;

    let frameCount = 0;
    if (data.micro_hero_section.client) {
      frameCount = isMobile
        ? import.meta.glob('/public/assets/images/micro/hero/client/mobile-new/*.webp')
        : import.meta.glob('/public/assets/images/micro/hero/client/desktop-new/*.webp');
    } else {
      frameCount = 10;
    }
    setTotalFrames(Object.keys(frameCount).length);
  }, [data, isMobile]);
  

  useEffect(() => {
    // Preload images once totalFrames is set
    if (!data.micro_hero_section.isVdo || totalFrames === 0 || isImagesLoaded.current) {
      onLoadComplete();
      setLoading(false);
      return 
    };

    preloadImages();
  }, [data.micro_hero_section.isVdo, totalFrames]);

  const preloadImages = () => {
    const folderPath = getFolderPath();
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${folderPath}${i}.webp`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          imageRefs.current = loadedImages;
          setLoading(false);
          isImagesLoaded.current = true;
          setLoadingComplete(true);
          onLoadComplete();
        }
      };

      loadedImages.push(img);
    }
  };

  const getFolderPath = () => {
    return data.micro_hero_section.client
      ? isMobile
        ? data.micro_hero_section.mobilePathNew
        : data.micro_hero_section.desktopPathNew
      : isMobile
      ? data.micro_hero_section.mobilePath
      : data.micro_hero_section.desktopPath
  };

  useEffect(() => {
    if (!data.micro_hero_section.isVdo || loading || !loadingComplete || imageRefs.current.length !== totalFrames) return;

    initializeCanvasAnimation();
    initializeScrollDownPin();
  }, [data.micro_hero_section.isVdo, loading, totalFrames, loadingComplete]);

  const initializeCanvasAnimation = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const scrollAnimation = ScrollTrigger.create({
      trigger: canvas,
      start: "top top",
      end: `+=${window.innerHeight * 12}`,
      pin: true,
      scrub: 2,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        drawFrameOnCanvas(frameIndex, ctx, canvas);
      },
      onLeave: () => drawFrameOnCanvas(totalFrames - 1, ctx, canvas),
      onLeaveBack: () => drawFrameOnCanvas(0, ctx, canvas),
    });
  };

  const drawFrameOnCanvas = (frameIndex, ctx, canvas) => {
    const img = imageRefs.current[frameIndex];
    const { width: canvasWidth, height: canvasHeight } = canvas;
    const imageAspectRatio = img.width / img.height;
    const canvasAspectRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;

    if (canvasAspectRatio > imageAspectRatio) {
      drawHeight = canvasWidth / imageAspectRatio;
    } else {
      drawWidth = canvasHeight * imageAspectRatio;
    }

    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const initializeScrollDownPin = () => {
    const canvas = canvasRef.current;
    const framesContent = document.querySelector('.frames_content');
    
    // Get the height of the frames content
    const framesContentHeight = framesContent.offsetHeight;
    localStorage.setItem('navbar_scroll_height',  framesContentHeight);

    // Create ScrollTrigger for scrollDownRef to pin it until canvas reaches 50%
    const scrollDownPin = ScrollTrigger.create({
      trigger: canvas,
      start: "top top", // Pin scrollDownRef when the canvas starts
      end: () => `+=${framesContentHeight - window.innerHeight}`, // Unpin when canvas reaches 50% scroll
      pin: scrollDownRef.current, // Pin the scroll-down indicator
      pinSpacing: false, // Prevent extra space when pinning
    });
  };


  return (
    <section className="section micro_hero_section p-0">
      {!loading && data.micro_hero_section.isVdo && (
        <div className="frames_content">
          <div
            className="microsite-scrolldown microsite-scrolldown_1"
            ref={scrollDownRef}
          >
            <div id="scroll-wrapper-inner">
              <div id="scroll-title">Scroll Down</div>
              <div className="scroll-down-dude"></div>
            </div>
          </div>
          <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ display: "block", margin: "auto" }}
          />
        </div>
      )}

      {!loading && !data.micro_hero_section.isVdo && (
        <img src={data.micro_hero_section.images.desktop} className="img-fluid" alt="Hero section image"/>
      )}
    </section>
  );
};

export default MicroHero;
