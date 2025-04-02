import React from "react";
import MicroPageFaridabad from "../../MicroPageFaridabad";
import { API_URL } from "../../../../config/config";


const headerSidebarDesktopImg = `${API_URL}images/athens-faridabad/header/athens.webp`
// banner image
const bannerDesktopImg = `${API_URL}images/athens-faridabad/banner/banner.webp`
const bannerMobileImg = `${API_URL}images/athens-faridabad/banner/bannerSm.webp`
// gallery image
const galleryImg1 = `${API_URL}images/athens-faridabad/gallery/1.webp`
const galleryImgSm1 = `${API_URL}images/athens-faridabad/gallery/1sm.webp`
const galleryImg2 = `${API_URL}images/athens-faridabad/gallery/2.webp`
const galleryImgSm2 = `${API_URL}images/athens-faridabad/gallery/2sm.webp`
const galleryImg3 = `${API_URL}images/athens-faridabad/gallery/3.webp`
const galleryImgSm3 = `${API_URL}images/athens-faridabad/gallery/3sm.webp`
// amenities images
const kidsDesktopImg = `${API_URL}images/athens-faridabad/amenities/kids.webp`
const kidsMobileImg = `${API_URL}images/athens-faridabad/amenities/kidsSm.webp`
const gymDesktopImg = `${API_URL}images/athens-faridabad/amenities/gym.webp`
const gymMobileImg = `${API_URL}images/athens-faridabad/amenities/gymSm.webp`
const poolDesktopImg = `${API_URL}images/athens-faridabad/amenities/pool.webp`
const poolMobileImg = `${API_URL}images/athens-faridabad/amenities/poolSm.webp`
const securityDesktopImg = `${API_URL}images/athens-faridabad/amenities/security.webp`
const securityMobileImg = `${API_URL}images/athens-faridabad/amenities/securitySm.webp`
const sportDesktopImg = `${API_URL}images/athens-faridabad/amenities/sport.webp`
const sportMobileImg = `${API_URL}images/athens-faridabad/amenities/sportSm.webp`
const gardenDesktopImg = `${API_URL}images/athens-faridabad/amenities/garden.webp`
const gardenMobileImg = `${API_URL}images/athens-faridabad/amenities/gardenSm.webp`
const liftDesktopImg = `${API_URL}images/athens-faridabad/amenities/lift.webp`
const liftMobileImg = `${API_URL}images/athens-faridabad/amenities/liftSm.webp`
const powerDesktopImg = `${API_URL}images/athens-faridabad/amenities/power.webp`
const powerMobileImg = `${API_URL}images/athens-faridabad/amenities/powerSm.webp`
// floor plan
const floorPlanTowerC1 = `${API_URL}images/athens-faridabad/floor-plan/towerc/1.png`
const floorPlanTowerC2 = `${API_URL}images/athens-faridabad/floor-plan/towerc/2.png`
const floorPlanTowerC3 = `${API_URL}images/athens-faridabad/floor-plan/towerc/3.png`
const floorPlanTowerD1 = `${API_URL}images/athens-faridabad/floor-plan/towerd/1.png`
const floorPlanTowerD2 = `${API_URL}images/athens-faridabad/floor-plan/towerd/2.png`
const floorPlanTowerD3 = `${API_URL}images/athens-faridabad/floor-plan/towerd/3.png`
// location map
const locationMapDesktop = `${API_URL}images/athens-faridabad/location-map/location-map.jpg`
const locationMapMobile = `${API_URL}images/athens-faridabad/location-map/location-mapm.jpg`

export const faridabadData = {
  header:{
    sidebarAsset:{
      desktop:headerSidebarDesktopImg,
      mobile:headerSidebarDesktopImg,
    },
    athens_header:'Athens_nav',
    title:'MVN Athens, Faridabad',
    sidebar_section:[
      {
        section_title:'Overview',
        link:'microOverview'
      },
      {
        section_title:'MVN Athens ID Brochure',
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
    desktop:bannerDesktopImg,
    mobile:bannerMobileImg,
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
        desktop: galleryImg1,
        mobile: galleryImgSm1,
      },
      {
        desktop: galleryImg2,
        mobile: galleryImgSm2,
      },
      {
        desktop: galleryImg3,
        mobile: galleryImgSm3,
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
          desktop:kidsDesktopImg,
          mobile:kidsMobileImg,
        },
        desc:'World of wonder, where little dreams take flight.' 
      },  
      {
        name: 'Gym',
        path: {
          desktop:gymDesktopImg,
          mobile:gymMobileImg,
        },
        desc:'Where strength meets style for your fitness sanctuary.'
      },
      {
        name: 'Swimming Pool',
        path: {
          desktop:poolDesktopImg,
          mobile:poolMobileImg,
        },
        desc:'Dive into luxury, where every splash refreshes your soul. '
      },
      {
        name: `24/7 Security`,
        path: {
          desktop:securityDesktopImg,
          mobile:securityMobileImg,
        },
        desc:'Your safety, our promise, always around the clock.'
      },
      {
        name: 'Sports Area',
        path: {
          desktop:sportDesktopImg,
          mobile:sportMobileImg,
        },
        desc:'Where champions are made, and fun finds its field.'
      },
      {
        name: 'Landscape Garden',
        path: {
          desktop:gardenDesktopImg,
          mobile:gardenMobileImg,
        },
        desc:'Nature’s embrace, right outside your door.'
      },
      {
        name: 'Lift',
        path: {
          desktop:liftDesktopImg,
          mobile:liftMobileImg,
        },
        desc:'Effortless elevation, because every step matters.'
      },
      {
        name: 'Power Backup',
        path: {
          desktop:powerDesktopImg,
          mobile:powerMobileImg,
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
        src: floorPlanTowerC1
      },
      {
        title: "Upper Level Plan",
        area: "3419 sq.ft.",
        link: "#",
        src: floorPlanTowerC2
      },
      {
        title: "Upper Level Plan",
        area: "3375 sq.ft.",
        link: "#",
        src: floorPlanTowerC3
      },
    ], 
    tower_d: [
    {
      title: "Lower Level Plan",
      area: "3419 sq.ft.",
      link: "#",
      src: floorPlanTowerD1
    },
    {
      title: "Upper Level Plan",
      area: "3419 sq.ft.",
      link: "#",
      src: floorPlanTowerD2
    },
    {
      title: "Upper Level Plan",
      area: "3375 sq.ft.",
      link: "#",
      src: floorPlanTowerD3
    },
  ],
  }
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    desc:"Strategically nestled in Faridabad, MVN Athens ensures connectivity while surrounding you with urban conveniences and serene charm.",
    mapIMG: {
      desktop: locationMapDesktop,
      mobile: locationMapMobile,
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
