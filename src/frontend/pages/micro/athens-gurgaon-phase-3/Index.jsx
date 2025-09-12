import React from "react";
import MicroPageGurgaonPhase2 from "../../MicroPageGurgaonPhase2";
import { API_URL, BACKEND_IMAGE_URL } from "../../../../config/config";


const headerSidebarImg = `${API_URL}images/athens-ph2/header/sidebar.webp`
// banner images start
const bannerDesktop = `${API_URL}athens-gurgaon-phase-3/banner/banner.webp`
const bannerMobile = `${API_URL}athens-gurgaon-phase-3/banner/banner-m.webp`
// banner images end
//   <----------------------------------->
// gallery images start
const gallery1 = `${API_URL}athens-gurgaon-phase-2/gallery/1.webp`
const gallery2 = `${API_URL}athens-gurgaon-phase-2/gallery/2.webp`
const gallery3 = `${API_URL}athens-gurgaon-phase-2/gallery/3.webp`
// gallery images end
//   <----------------------------------->
// features images start
const features1 = `${API_URL}athens-gurgaon-phase-2/features/elevation.png`
const featuresBgImg = `${API_URL}athens-gurgaon-phase-2/features/bg-back.jpg`
// features images end
//   <----------------------------------->
// amenities images start
const kidsPlayArea = `${API_URL}athens-gurgaon-phase-2/amenities/1.jpg`
const landscapeOutdoorSeating = `${API_URL}athens-gurgaon-phase-2/amenities/2.jpg`
const Lawn = `${API_URL}athens-gurgaon-phase-2/amenities/3.jpg`
const security = `${API_URL}athens-gurgaon-phase-2/amenities/4.jpg`
const landscapeWalkway = `${API_URL}athens-gurgaon-phase-2/amenities/5.jpg`
const peacefulEnvironment = `${API_URL}athens-gurgaon-phase-2/amenities/6.jpg`
const landscapeIndoorSeating = `${API_URL}athens-gurgaon-phase-2/amenities/7.jpg`
const communityCentre = `${API_URL}athens-gurgaon-phase-2/amenities/8.jpg`
// amenities images end
//   <----------------------------------->
// typology images start
const typology1 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf1.jpg`
const typology2 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf2.jpg`
const typology3 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf3.jpg`
const typology4 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf4.jpg`
const typology5 = `${API_URL}athens-gurgaon-phase-2/floor-plan/plansf5.jpg`
// typology images end
//   <----------------------------------->
// location map start
const locationMapDesktop = `${API_URL}athens-gurgaon-phase-3/location-map/location-map.webp`
const locationMapMobile = `${API_URL}athens-gurgaon-phase-3/location-map/location-mapm.webp`
// location map end

export const athensGurgaonPhase3Data = {
  header:{
    sidebarAsset:{
      desktop:headerSidebarImg,
      mobile:headerSidebarImg,
    },
    athens_header:'Athens_nav',
    title:'MVN Athens, Gurgaon Phase 2',
    sidebar_section:[
      {
        section_title:'Overview',
        link:'microOverview'
      },
      {
        section_title:'MVN Athens ID Brochure',
        link:'downloadBrochure'
      },
      // {
      //   section_title:'Gallery',
      //   link:'gallery'
      // },
      {
        section_title:'Features',
        link:'features'
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
    desktop:bannerDesktop,
    mobile:bannerMobile,
  },
  overview: {
    title: "MVN Athens Phase - III",
    extra: "Your Dream Paradise",
    desc: [
      "Our happiness dwells in the hearts of our home buyers. So, where somebody talks about customer satisfaction we are all ears. All our efforts are committed towards it. Delivery before time, Affordable luxury, Reliability & Quality in terms of material used for construction backed by a dedicated in-house team to look after the day to day affairs. MVN Athens, a residential affordable housing scheme by the State of Haryana, a gated community in sector-5, Sohna- Gurugram is home to more than 1104 families in Phase I & II."
    ],
    rera:"RERA NO. 63/2022",
  },
  gallery:{
    title:'Gallery',
    desc:'Perfect amalgamation of comfort, convenience, and cost effectiveness.',
    images:[
      {
        desktop: gallery1,
        mobile: gallery1,
      },
      {
        desktop: gallery2,
        mobile: gallery2,
      },
      {
        desktop: gallery3,
        mobile: gallery3,
      },
    ],
  },
  features:{
    isTwoColumn:true,
    title:"Features",
    desc:"Designed to delight at every step.",
    src: features1,
    bgImg: featuresBgImg,
    list:[
      "Gated complex with 24 Hour Security",
      "RCC Roads",
      "Paved Pathways",
      "LED Street Lights",
      "Smart distribution of power and water supply",
      "Children play area",
      "Jogging track",
      "Commercial Complex",
      "Water Harvesting system",
      "Piped Gas Line (Proposed)",
      "CCTV Security",
      "90% RCC work",
      "Power Back up for common area",
      "Organised landscape",
      "Site Entry/Exit",
      "6 Min Drive way",
      "1.8 MTR Jogging Track",
      "Toddlers Sand Pitch",
      "Chit Chat Corner with Games",
      "Seating Area",
    ],
  },
  amenities : {
    section_type: "overview",
    heading: "Amenities",
    sub_heading: "Your Dream Paradise",
    is_type: null,
    image: null,
    alternative_image: null,
    mb_image: null,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe: "",
    json: null,
    yt_url: null,
    short_description: "",
    description: "Immerse yourself in a luxurious array of world-class amenities crafted to elevate your lifestyle.",
    data:[
      {
        id: 62,
        project_id: 10,
        is_type: "amenities",
        heading: "Kids' Play Area",
        short_description: "A dynamic, fun space to keep children active and entertained.\r\n\r\n",
        image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753348989724.jpg`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753348991032.jpg`,
        mb_image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753348991298.jpg`,
        mb_alternative_image: null,
        alt: "Amenities 1 ",
        status: 1,
        created_at: "2025-07-24T09:23:11.000Z",
        updated_at: null,
      },
      {
        id: 63,
        project_id: 10,
        is_type: "amenities",
        heading: "Open Gym",
        short_description: "A fitness haven where strength meets serenity.",
        image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753349055460.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753349055978.webp`,
        mb_image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753349056232.webp`,
        mb_alternative_image: null,
        alt: "Amenties 2",
        status: 1,
        created_at: "2025-07-24T09:24:16.000Z",
        updated_at: null,
      },
      {
        id: 64,
        project_id: 10,
        is_type: "amenities",
        heading: "Shopping Area",
        short_description: "Indulge in a world of premium retail experiences.\r\n\r\n",
        image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753349101047.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753349101340.webp`,
        mb_image: `${BACKEND_IMAGE_URL}uploads/project/amenities/1753349101561.webp`,
        mb_alternative_image: null,
        alt: "Amenities 3",
        status: 1,
        created_at: "2025-07-24T09:25:01.000Z",
        updated_at: null,
      }
    ]
  },
  typologies: {
    section_type: "floor-plan",
    heading: "Typologies",
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
    description:
      "Discover expertly crafted floor plans that maximize space, natural light, and luxurious living.\r\n\r\n",
    data:[
      {
        id: 22,
        project_id: 10,
        unit_type: "LAYOUT PLAN",
        heading: "Layout Plan",
        area: null,
        sizes: "[object Object]",
        image: `${BACKEND_IMAGE_URL}uploads/project/floorplan/1753350890917.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/floorplan/1753350891444.webp`,
        alt: "Layout plan",
        status: 1,
        created_at: "2025-07-24T09:54:51.000Z",
        updated_at: "2025-07-24T09:59:38.000Z",
      },
      {
        id: 23,
        project_id: 10,
        unit_type: "1 BHK ",
        heading: "1 BHK Unit",
        area: null,
        sizes: null,
        image: `${BACKEND_IMAGE_URL}uploads/project/floorplan/1753351007750.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/floorplan/1753351008021.webp`,
        alt: "1 bhk",
        status: 1,
        created_at: "2025-07-24T09:56:48.000Z",
        updated_at: "2025-07-24T10:01:42.000Z",
      },
      {
        id: 24,
        project_id: 10,
        unit_type: "2 BHK",
        heading: "2 BHK Unit",
        area: null,
        sizes: null,
        image: `${BACKEND_IMAGE_URL}uploads/project/floorplan/1753351082459.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/floorplan/1753351082726.webp`,
        alt: "2 bhk",
        status: 1,
        created_at: "2025-07-24T09:58:02.000Z",
        updated_at: "2025-07-24T10:01:48.000Z",
      },
      {
        id: 25,
        project_id: 10,
        unit_type: "3 BHK",
        heading: "3 BHK Unit",
        area: null,
        sizes: null,
        image: `${BACKEND_IMAGE_URL}uploads/project/floorplan/1753351141968.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/floorplan/1753351142230.webp`,
        alt: "3bhk",
        status: 1,
        created_at: "2025-07-24T09:59:02.000Z",
        updated_at: "2025-07-24T10:01:55.000Z",
      }
    ]
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    desc:"Strategically Located for Convenience",
    mapIMG: {
      desktop: locationMapDesktop,
      mobile: locationMapMobile,
    },
    locationSlider: true,
    chunks:3,
    sliderItems : [
      { title: "IGI Airport", desc: "40 Mins" },
      { title: "Huda City Center", desc: "20 Mins" },
      { title: "Rajiv Chowk", desc: "18 Mins" },
      { title: "IFFCO Chowk", desc: "22 Mins" },
      { title: "KMP (Kundali Manaser Palwal) Expressway", desc: "05 Mins" },
      { title: "IMT (Industrial Model Town) Sohna", desc: "05 Mins" },
      { title: "Golf Course Road", desc: "20 Mins" },
      { title: "Aravalis in the Backdrop", desc: "" },
      { title: "Universities / Schools (GD Goenka / KR Manglam / Ryan / Pathways/DPS)", desc: "05 - 10 Mins" },
      { title: "Hospitals", desc: "10 Mins" },
      { title: "Malls", desc: "10 Mins" },
      { title: "DMIC (Delhi Mumbai Industrial Coridor)", desc: "05 Mins" },
    ],
    modalIframe:'https://www.youtube.com/embed/p4ArtUtsj-A?si=VsbM3Dvdk969-OHv',
  },
  construction:{
    heading:'Construction Update',
    data:[
      {
        id: 63,
        project_id: 10,
        is_type: "construction",
        title: "Construction 1",
        sm_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753511966771.webp`,
        sm_alternative_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753511967077.webp`,
        image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753511965824.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753511966449.webp`,
        alt: "ConstructionImage1",
        status: 1,
        created_at: "2025-07-26T05:50:24.000Z",
        updated_at: "2025-07-26T06:39:27.000Z",
      },
      {
        id: 64,
        project_id: 10,
        is_type: "construction",
        title: "Construction 2",
        sm_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753511991993.webp`,
        sm_alternative_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753511992335.webp`,
        image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753511987142.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753511989986.webp`,
        alt: "ConstructionImage2",
        status: 1,
        created_at: "2025-07-26T06:37:14.000Z",
        updated_at: "2025-07-26T06:39:52.000Z",
      },
      {
        id: 65,
        project_id: 10,
        is_type: "construction",
        title: "Construction 3",
        sm_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753512039902.webp`,
        sm_alternative_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753512039920.webp`,
        image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753512038799.webp`,
        alternative_image: `${BACKEND_IMAGE_URL}uploads/project/gallery/1753512039621.webp`,
        alt: "ConstructionImage3",
        status: 1,
        created_at: "2025-07-26T06:40:39.000Z",
        updated_at: null,
      }
    ]
  }
};