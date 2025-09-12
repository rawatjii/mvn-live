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

const typology1 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf1.jpg`
const typology2 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf2.jpg`
const typology3 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf3.jpg`
const typology4 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf4.jpg`
const typology5 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf5.jpg`

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
    section_type: "amenities",
    heading: "Amenities",
    sub_heading: null,
    is_type: null,
    image: null,
    alternative_image: null,
    mb_image: null,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe: null,
    json: null,
    yt_url: null,
    short_description: null,
    description: "Immerse yourself in a world of thoughtfully created amenities designed to elevate your lifestyle with comfort, convenience, and indulgence.",
    data: [
    {
      id: 20,
      project_id: 3,
      is_type: "amenities",
      heading: "Kids' Play Area ",
      short_description: "World of wonder, where little dreams take flight.",
      image: "uploads/project/amenities/1749898100747.webp",
      alternative_image: "uploads/project/amenities/1749898101292.jpg",
      mb_image: "uploads/project/amenities/1750410831058.webp",
      mb_alternative_image: "uploads/project/amenities/1750410831303.jpg",
      alt: "mvn athens faridabad Kids' Play Area",
      status: 1,
      created_at: "2025-06-14T10:48:21.000Z",
      updated_at: "2025-06-20T09:13:51.000Z"
    },
    {
      id: 21,
      project_id: 3,
      is_type: "amenities",
      heading: "Gym",
      short_description: "Where strength meets style for your fitness sanctuary.",
      image: "uploads/project/amenities/1749898139861.webp",
      alternative_image: "uploads/project/amenities/1749898140381.jpg",
      mb_image: "uploads/project/amenities/1750410847218.webp",
      mb_alternative_image: "uploads/project/amenities/1750410847467.jpg",
      alt: "mvn athens faridabad Gym",
      status: 1,
      created_at: "2025-06-14T10:49:00.000Z",
      updated_at: "2025-06-20T09:14:07.000Z"
    },
    {
      id: 22,
      project_id: 3,
      is_type: "amenities",
      heading: "Swimming Pool",
      short_description: "Dive into luxury, where every splash refreshes your soul.",
      image: "uploads/project/amenities/1749898167115.webp",
      alternative_image: "uploads/project/amenities/1749898168227.jpg",
      mb_image: "uploads/project/amenities/1750410859917.webp",
      mb_alternative_image: "uploads/project/amenities/1750410859918.jpg",
      alt: "mvn athens faridabad Swimming Pool",
      status: 1,
      created_at: "2025-06-14T10:49:29.000Z",
      updated_at: "2025-06-20T09:14:20.000Z"
    },
    {
      id: 23,
      project_id: 3,
      is_type: "amenities",
      heading: "24/7 Security",
      short_description: "Your safety, our promise, always around the clock.",
      image: "uploads/project/amenities/1749898189239.webp",
      alternative_image: "uploads/project/amenities/1749898189487.jpg",
      mb_image: "uploads/project/amenities/1750410872522.webp",
      mb_alternative_image: "uploads/project/amenities/1750410872522.jpg",
      alt: "mvn athens faridabad 24/7 Security",
      status: 1,
      created_at: "2025-06-14T10:49:49.000Z",
      updated_at: "2025-06-20T09:14:32.000Z"
    },
    {
      id: 24,
      project_id: 3,
      is_type: "amenities",
      heading: "Sports Area",
      short_description: "Where champions are made, and fun finds its field.",
      image: "uploads/project/amenities/1749898215995.webp",
      alternative_image: "uploads/project/amenities/1749898216516.jpg",
      mb_image: "uploads/project/amenities/1750410890464.webp",
      mb_alternative_image: "uploads/project/amenities/1750410890465.jpg",
      alt: "mvn athens faridabad Sports Area",
      status: 1,
      created_at: "2025-06-14T10:50:16.000Z",
      updated_at: "2025-06-20T09:14:50.000Z"
    },
    {
      id: 25,
      project_id: 3,
      is_type: "amenities",
      heading: "Landscape Garden",
      short_description: "Nature’s embrace, right outside your door.",
      image: "uploads/project/amenities/1749898235015.webp",
      alternative_image: "uploads/project/amenities/1749898236614.jpg",
      mb_image: "uploads/project/amenities/1750410904531.webp",
      mb_alternative_image: "uploads/project/amenities/1750410904783.jpg",
      alt: "mvn athens faridabad Landscape Garden",
      status: 1,
      created_at: "2025-06-14T10:50:37.000Z",
      updated_at: "2025-06-20T09:15:05.000Z"
    },
    {
      id: 26,
      project_id: 3,
      is_type: "amenities",
      heading: "Lift",
      short_description: "Effortless elevation, because every step matters.",
      image: "uploads/project/amenities/1749898254764.webp",
      alternative_image: "uploads/project/amenities/1749898255023.jpg",
      mb_image: "uploads/project/amenities/1750410916841.webp",
      mb_alternative_image: "uploads/project/amenities/1750410916842.jpg",
      alt: "mvn athens faridabad Lift",
      status: 1,
      created_at: "2025-06-14T10:50:55.000Z",
      updated_at: "2025-06-20T09:15:16.000Z"
    },
    {
      id: 27,
      project_id: 3,
      is_type: "amenities",
      heading: "Power Backup",
      short_description: "Uninterrupted living, powered for your peace of mind.",
      image: "uploads/project/amenities/1749898328999.webp",
      alternative_image: "uploads/project/amenities/1749898329000.jpg",
      mb_image: "uploads/project/amenities/1750410929816.webp",
      mb_alternative_image: "uploads/project/amenities/1750410929816.jpg",
      alt: "mvn athens faridabad Power Backup",
      status: 1,
      created_at: "2025-06-14T10:52:09.000Z",
      updated_at: "2025-06-20T09:15:29.000Z"
    }
  ]
     
  },
  typologies: {
    title:'Typologies',
    desc:"Discover expertly crafted floor plans that maximize space, natural light, and luxurious living.",
    tabs_name:['TOWER A','TOWER B'],
    tabs:{     
      tower_a: [
      {
        title: "TOWER A1",
        link: "#",
        src: typology1
      },
      {
        title: "TOWER A2",
        link: "#",
        src: typology2
      },
    ], 
    tower_b: [
    {
      title: "TOWER B1",
      link: "#",
      src: typology3
    },
    {
      title: "TOWER B2",
      link: "#",
      src: typology4
    },
    {
      title: "TOWER B3,B5,B7",
      link: "#",
      src: typology5
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
