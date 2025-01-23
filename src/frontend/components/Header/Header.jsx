import React, { useEffect, useRef, useState } from 'react'
import * as CONFIG from '../../../config/config';
import { Container } from "react-bootstrap";
import SecTitle from "";

const data = {
    micro_hero_section: 
    {
      isVdo: true,
      images:false,
      bannerHighLight:false,
      enquiryBTN:false 
    },
    overview: {
      title: "MVN Aero One",
      location: "Gurgaon",
      extra: "ASCEND TO THE PINNACLE OF SOPHISTICATION",
      desc: "Luxury Reimagined. Elegance Redefined. Experience Unparalleled Luxury, Where Opulence Meets Sophistication In Every Detail Indulge In Bespoke Interiors, World-class Amenities, And Breathtaking Views. Redefine Your Lifestyle With A Living Experience Like No Other.",
    },
    video1: { 
      title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
      // desc:'Our 13.5ft High Ceilings Will Set A Higher Standard Of Space Utilisation In Harmony With Design Aesthetics & Sophistication.',
      isVdo: true,
    },
    video2: {
      title: "ESCAPE TO EXCLUSIVITY",
      desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
      isVdo: true,
    },
    video3: {
      title: "ELEVATED LIVING",
      desc: "OUR 13.5FT HIGH CEILINGS WILL SET A HIGHER STANDARD OF SPACE UTILISATION IN HARMONY WITH DESIGN AESTHETICS & SOPHISTICATION",
      isVdo: true,
    },
    masterBedroom: {
      title: "MASTER BEDROOM",
      desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
      isVdo: true,
    },
    highlights: [
      "Power backup for common facilities.",
      "Italian/Imported Marble flooring.",
      "Television points in living and bedrooms.",
      "Telephone points in living and master bedroom.",
      "Split AC provision in living and bedrooms.",
      "Premium emulsion paint finish.",
    ],
    walkthrough: {
      desc: "IF YOU THINK YOU'VE EXPERIENCED TRUE LUXURY IT'S TIME TO RAISE YOUR EXPECTATION",
      masterBedroom: {
        title: "MASTER BEDROOM",
        desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
        isVdo: true,
      },
    },
    LargeElevationSection: {
      title: "an epitome of contemporary elegance",
      isAllow: true,
    },
    renders: [
      {
        src: CONFIG.IMAGE_URL + 'renders/1_desktop.webp',
        mobile_thumb: CONFIG.IMAGE_URL + 'renders/1_mobile.webp',
      },
      {
        src: CONFIG.IMAGE_URL + 'renders/2_desktop.webp',
        mobile_thumb: CONFIG.IMAGE_URL + 'renders/2_mobile.webp',
      },
      {
        src: CONFIG.IMAGE_URL + 'renders/3_desktop.webp',
        mobile_thumb: CONFIG.IMAGE_URL + 'renders/3_mobile.webp',
      },
      {
        src: CONFIG.IMAGE_URL + 'renders/4_desktop.webp',
        mobile_thumb: CONFIG.IMAGE_URL + 'renders/4_mobile.webp',
      },
      {
        src: CONFIG.IMAGE_URL + 'renders/5_desktop.webp',
        mobile_thumb: CONFIG.IMAGE_URL + 'renders/5_mobile.webp',
      }
    ],
    menities_section: [
      {
        title: 'Infinity Pool',
        images: {
          lg: CONFIG.IMAGE_URL + 'amenities/pool.webp',
          mb: CONFIG.IMAGE_URL + 'amenities/poolSm.webp',
        }
      },
      {
        title: 'THE STUDY',
        images: {
          lg: CONFIG.IMAGE_URL + 'amenities/study.webp',
          mb: CONFIG.IMAGE_URL + 'amenities/studySm.webp',
        }
      },
      {
        title: 'MODERN ROOFTOP CLUBHOUSE',
        images: {
          lg: CONFIG.IMAGE_URL + 'amenities/clubhouse.webp',
          mb: CONFIG.IMAGE_URL + 'amenities/clubhouseSm.webp',
        }
      },
      {
        title: 'double height balcony',
        images: {
          lg: CONFIG.IMAGE_URL + 'amenities/balcony.webp',
          mb: CONFIG.IMAGE_URL + 'amenities/balconySm.webp',
        }
      },
      {
        title: 'living area',
        images: {
          lg: CONFIG.IMAGE_URL + 'amenities/living.webp',
          mb: CONFIG.IMAGE_URL + 'amenities/livingSm.webp',
        }
      },
      {
        title: 'living area',
        images: {
          lg: CONFIG.IMAGE_URL + 'amenities/living.webp',
          mb: CONFIG.IMAGE_URL + 'amenities/livingSm.webp',
        }
      },
    ],
  };

const Header = () => {
    const containerRef = useRef(null);
    const titleRef = useRef();
    const [images, setImages] = useState([]);
    const totalFrames = 200;
    const frameRefs = useRef([]);
  
    // for animation
  
    useEffect(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
  
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 95%",
        },
      });
    }, []);
  
    useEffect(() => {
      // Preload images
      const loadedImages = [];
  
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `assets/videos/party/mobile/${i}.jpg`; // Update with the correct path for your frames
        loadedImages.push(img);
      }
      setImages(loadedImages);
    }, []);
  
    useEffect(() => {
      if (images.length !== totalFrames) return; // Wait until all images are loaded
  
      // Image sequence animation
      const scrollAnimation = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${window.innerHeight * 3}`, // Extend scroll distance to fit more frames
        pin: true,
        scrub: 0.005,
        onUpdate: (self) => {
          const frameIndex = Math.floor(self.progress * (totalFrames - 1));
  
          // Only start changing frames after a scroll progress threshold
          // First condition: Only start changing frames after a scroll progress threshold
          if (self.progress > 0.1) {
            frameRefs.current.forEach((img, index) => {
              if (img)
                img.style.display = index === frameIndex ? "block" : "none";
            });
          }
        },
        onLeaveBack: () => {
          // Reset to first frame when scrolling back to the start smoothly
          frameRefs.current.forEach((img, index) => {
            if (img) img.style.display = index === 0 ? "block" : "none";
          });
        },
        onLeave: () => {
          // Reset to last frame when scrolling to the end smoothly
          frameRefs.current.forEach((img, index) => {
            if (img)
              img.style.display = index === totalFrames - 1 ? "block" : "none";
          });
        },
      });
  
      return () => {
        scrollAnimation.kill();
      };
    }, [images, totalFrames]);
  
    const { title, desc } = data.video3;
  
    return (
      <div className="section peacock_section pb-0">
        <div ref={containerRef} className="frames_content">
          {images.map((img, index) => (
            <img
              key={index}
              ref={(el) => (frameRefs.current[index] = el)}
              src={img.src}
              alt={`Frame ${index}`}
              className="frame"
              style={{ display: index === 0 ? "block" : "none" }}
            />
          ))}
        </div>
  
        <div className="content">
          <Container>
            <SecTitle className="text-center color style1">
              <h4 ref={titleRef} className="title">
                {title}
              </h4>
            </SecTitle>
  
            {desc && <p className="desc">{desc}</p>}
          </Container>
        </div>
      </div>
    );
  };

export default Header