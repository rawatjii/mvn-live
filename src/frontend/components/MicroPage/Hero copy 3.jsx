import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImgMail from "../../assets/images/icons/email.png";

gsap.registerPlugin(ScrollTrigger);

const MicroHero = ({ data, onLoadComplete }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state
  const [totalFrames, setTotalFrames] = useState(0);
  const containerRef = useRef(null);
  const frameRefs = useRef([]);
  const mouseScrollRef = useRef()

  useEffect(() => {
    // Determine if it's mobile or desktop
    const isMobile = window.innerWidth <= 768;

    // Set total frames dynamically
    let frameCount = 0;
    if (data.micro_hero_section.client) {
      frameCount = isMobile ? 522 : 522;
    
    } else {
      frameCount = isMobile ? 274 : 292;
    }
    setTotalFrames(frameCount);
  }, [data]);

  useEffect(() => {
    // Only preload images once totalFrames is set
    if (totalFrames === 0) return;

    const isMobile = window.innerWidth <= 768;
    let folderPath = null;
    if (data.micro_hero_section.client) {
      folderPath = isMobile
        ? "assets/images/micro/hero/client/mobile/"
        : "assets/images/micro/hero/client/desktop/";
    } else {
      folderPath = isMobile
        ? "assets/images/micro/hero/mobile/"
        : "assets/images/micro/hero/desktop/";
    }

    // Preload images
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${folderPath}${i}.webp`;

      // Track when each image loads
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImages(loadedImages); // Set images after all are loaded
          setLoading(false); // Hide loader
          onLoadComplete(); // Notify parent that loading is complete
        }
      };
      
      loadedImages.push(img);
    }
  }, [totalFrames, data]);
  
  useEffect(() => {
    // Reinitialize ScrollTrigger only after all images are loaded
    if (loading || images.length !== totalFrames) return;
    
    // Image sequence animation
    const scrollAnimation = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 2}`, // Extend scroll distance to fit more frames
      pin: true,
      scrub: 0.005,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (totalFrames - 1));
        
        // Ensure frames update correctly
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === frameIndex ? "block" : "none";
        });
      },
      onLeave: () => {
        // Ensure the last frame stays visible when scrolling ends
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === totalFrames - 1 ? "block" : "none";
        });
      },
      onLeaveBack: () => {
        // Ensure the first frame stays visible when scrolling back to the top
        frameRefs.current.forEach((img, index) => {
          if (img) img.style.display = index === 0 ? "block" : "none";
        });
      },
    });
    console.log('hero section')
    
    return () => {
      scrollAnimation.kill();
    };
  }, [loading, images, totalFrames]);

  return (
    <section className="section micro_hero_section p-0 ">
      {/* Show Loader */}
 
      

      {!loading && data.micro_hero_section.isVdo && (
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
      )}

      {!loading &&
        data.micro_hero_section.images &&
        Array.isArray(data.micro_hero_section.images) &&
        data.micro_hero_section.images.map((imgs, index) => (
          <div key={index} className="hero-img">
            <img
              src={imgs.imgDesk}
              alt={`mvn-hero-image-${index}`}
              className="img-fluid d_lg_block"
              fetchPriority="high"
            />
            <img
              src={imgs.imgMb}
              alt={`mvn-hero-image-sm-${index}`}
              className="img-fluid d_sm_block"
              fetchPriority="high"
            />
          </div>
        ))}

      {!loading && data.micro_hero_section.bannerHighLight && (
        <div className="hero_content">
          <Container>
            <div className="content">
              <h5 className="starting_price">
                <small>Starting At</small>
                ₹ 4.51 Cr*
              </h5>
              <p className="typo">2 & 3 BHK Luxury Apartments</p>
            </div>
          </Container>
        </div>
      )}

      {!loading &&
        data.micro_hero_section.enquiryBTN &&
        data.micro_hero_section.enquiryBTN.isshow === true && (
          <div className="enquiry_btn">
            <a
              href={`mailto:${data.micro_hero_section.enquiryBTN.mail}`}
              className="btn btn_enquire"
            >
              <img
                src={ImgMail}
                className="img-fluid mail_enqiry_icon"
                alt="mvn enquire icon"
              />
              Enquire Now
            </a>
          </div>
        )}

      {/* <div ref={mouseScrollRef} className="mouse_scroll">
        <div className="mouse">
          <div className="wheel"></div>
        </div>

        <div>
          <span className="m_scroll_arrows unu"></span>
          <span className="m_scroll_arrows doi"></span>
          <span className="m_scroll_arrows trei"></span>
        </div>
      </div> */}



    </section>
  );
};

export default MicroHero;
