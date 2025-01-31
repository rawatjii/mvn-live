import React from "react";
import * as CONFIG from '../../../../config/config';
import MicroPageFaridabad from "../../MicroPageFaridabad";

export const faridabadData = {
  header:{
    sidebarAsset:{
      desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}header/athens.webp`,
      mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}header/athens.webp`,
    },
    athens_header:'Athens_nav',
    title:'MVN Athens, Faridabad',
    sidebar_section:[
      {
        section_title:'Overview',
        link:'microOverview'
      },
      {
        section_title:'MVN ID Brochure',
        link:'downloadBrochure'
      },
      {
        section_title:'Gallery',
        link:'gallery'
      },
      {
        section_title:'Amenities',
        link:'MicroAmenities'
      },
      {
        section_title:'Typology',
        link:'MicroTypology'
      },
      {
        section_title:'Location Map',
        link:'MicroLocationMap'
      },
    ],
  },
  banner:{
    desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}banner/banner.webp`,
    mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}banner/bannerSm.webp`,
  },
  overview: {
    title: "MVN Athens",
    extra: "Where Imagination Shapes Timeless Harmony",
    desc: "Discover a world where modern architecture interwines with the essence of affordable living. At MVN Athens, we don't just build homes; we craft masterpieces that resonate with creativity and sophistication.",
  },
  gallery:{
    title:'Gallery',
    desc:'Step into a visual journey where every snapshot captures the seamless blend of elegance and innovation.',
    images:[
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/1.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/1sm.webp`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/2.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/2sm.webp`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/3.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/3sm.webp`,
      },
    ],
  },
  amenities : {
    title:'Amenities',
    desc: "Immerse yourself in a world of thoughtfully created amenities designed to elevate your lifestyle with comfort, convenience, and indulgence.",
    data:[
      { 
        name: "Kids' Play Area",
        path:{
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/kids.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/kidsSm.jpg`,
        },
        desc:'World of wonder, where little dreams take flight.' 
      },  
      {
        name: 'Gym',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/gym.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/gymSm.jpg`,
        },
        desc:'Where strength meets style for your fitness sanctuary.'
      },
      {
        name: 'Swimming Pool',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/pool.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/poolSm.jpg`,
        },
        desc:'Dive into luxury, where every splash refreshes your soul. '
      },
      {
        name: `24/7 Security`,
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/security.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/securitySm.jpg`,
        },
        desc:'Your safety, our promise, always around the clock.'
      },
      {
        name: 'Sports Area',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/sport.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/sportSm.jpg`,
        },
        desc:'Where champions are made, and fun finds its field.'
      },
      {
        name: 'Landscaped Garden',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/garden.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/gardenSm.jpg`,
        },
        desc:'Nature’s embrace, right outside your door.'
      },
      {
        name: 'Lift',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/lift.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/liftSm.jpg`,
        },
        desc:'Effortless elevation, because every step matters.'
      },
      {
        name: 'Power Backup',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/power.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/powerSm.jpg`,
        },
        desc:'Uninterrupted living, powered for your peace of mind.'
      },
    ],
     
  },
  typologies: {
    title:'Typologies',
    desc:"Explore meticulously designed living spaces that redefine modern architecture, offering a perfect balance of style and functionality.",
    tabs_name:['TOWER C','TOWER D'],
    tabs:{     
      tower_c: [
      {
        title: "Lower Level Plan",
        area: "3419 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerc/1.png`
      },
      {
        title: "Upper Level Plan",
        area: "3419 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerc/2.png`
      },
      {
        title: "Upper Level Plan",
        area: "3375 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerc/3.png`
      },
    ], 
    tower_d: [
    {
      title: "Lower Level Plan",
      area: "3419 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerd/1.png`
    },
    {
      title: "Upper Level Plan",
      area: "3419 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerd/2.png`
    },
    {
      title: "Upper Level Plan",
      area: "3375 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerd/3.png`
    },
  ],
  }
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    desc:"Strategically nestled in Faridabad, MVN Athens ensures connectivity while surrounding you with urban conveniences and serene charm.",
    mapIMG: {
      desktop: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}location-map.jpg`,
      mobile: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}location-mapm.jpg`,
    },
    locationSlider: true,
    chunks:1,
    sliderItems : [
      { title: "NH-2 (Agra Delhi)", desc: "1.8 KM" },
      { title: "metro station", desc: "2 KM" },
      { title: "Near Sector 12 Commercial Hub", desc: "10 Mins" },
      { title: "Town Park", desc: "04 KM" },
    ],
    modalIframe:'https://www.youtube.com/embed/p4ArtUtsj-A?si=VsbM3Dvdk969-OHv',
  },
};



const AthensFaridabad = () => {
  window.scrollTo(0,0)
  return (
    <MicroPageFaridabad data={faridabadData}  projectName={'mvn-athens-faridabad'}/>
  )
};

export default AthensFaridabad;
