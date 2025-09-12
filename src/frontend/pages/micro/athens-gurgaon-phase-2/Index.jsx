import React from "react";
import MicroPageGurgaonPhase2 from "../../MicroPageGurgaonPhase2";
import { API_URL } from "../../../../config/config";


const headerSidebarImg = `${API_URL}images/athens-ph2/header/sidebar.webp`
// banner images start
const bannerDesktop = `${API_URL}athens-gurgaon-phase-2/banner/banner.jpg`
const bannerMobile = `${API_URL}athens-gurgaon-phase-2/banner/banner-m.jpg`
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
const locationMapDesktop = `${API_URL}athens-gurgaon-phase-2/location-map/location-map.jpg`
const locationMapMobile = `${API_URL}athens-gurgaon-phase-2/location-map/location-mapm.jpg`
// location map end

export const athensGurgaonPhase2Data = {
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
    title: "MVN Athens",
    extra: "Your dream paradise",
    desc: [
      "MVN is a group formed with the vision of delivery of projects that inbibe its spirit of perfection & consumer satisfaction based on the philosophy of trust & integrity. Their clear vision leads to a seamless experience for the customers.",
      "Our happiness dwells in the hearts of our home buyers. So, when somebody talks about customer satisfaction, we are all ears. All our efforts are committed to it. Delivery before time, Affordable luxury, Reliability, & Quality in terms of material used for construction backed by a dedicated in-house team to look after the daily affairs. MVN Athens, a residential affordable housing scheme by the State of Haryana, a gated community in sector-5, Sohna-Gurugram, is home to more than 1104 families in Phase I & II."
    ],
    rera:"RERA NO. RC/REP/HARERA/GGM/326/58/2019/20",
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
    title:"Features",
    desc:"Designed to delight at every step.",
    src: features1,
    bgImg: featuresBgImg,
    list:[
      "Gated complex with 24 Hour Security",
      "Smart distribution of power and water supply",
      "Jogging track",
      "Commercial Complex",
      "Organised landscape",
      "Toddlers Sand Pitch",
      "90% RCC work",
      "CCTV Security"
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
    description: "Immerse yourself in a luxurious array of world-class amenities crafted to elevate your lifestyle.\r\n",
    data:[
      {
        id: 36,
        project_id: 9,
        is_type: "amenities",
        heading: "Kids' Play Area",
        short_description: "A dynamic, fun space to keep children active and entertained.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-2/amenities/1.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/1.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-2/amenities/1_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/1_sm.webp`,
        alt: "Kids' Play Area",
        status: 1,
        created_at: "2025-06-17T16:03:49.000Z",
        updated_at: "2025-06-20T06:41:27.000Z",
      },
      {
        id: 37,
        project_id: 9,
        is_type: "amenities",
        heading: "Landscape outdoor Seating",
        short_description: "Scenic seating areas for outdoor conversations and relaxation.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-2/amenities/2.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/2.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-2/amenities/2_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/2_sm.webp`,
        alt: "Landscape outdoor Seating",
        status: 1,
        created_at: "2025-06-17T16:05:55.000Z",
        updated_at: "2025-06-20T06:49:06.000Z",
      },
      {
        id: 38,
        project_id: 9,
        is_type: "amenities",
        heading: "Lawn",
        short_description: "Expansive, well-manicured greens ideal for picnics or quiet relaxation.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-2/amenities/3.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/3.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-2/amenities/3_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/3_sm.webp`,
        alt: "Lawn",
        status: 1,
        created_at: "2025-06-17T16:06:16.000Z",
        updated_at: "2025-06-20T06:49:17.000Z",
      },
      {
        id: 39,
        project_id: 9,
        is_type: "amenities",
        heading: "24/7 Security",
        short_description: "Cutting-edge security ensuring a worry-free lifestyle.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-2/amenities/4.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/4.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-2/amenities/4_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/4_sm.webp`,
        alt: "24/7 Security",
        status: 1,
        created_at: "2025-06-17T16:06:35.000Z",
        updated_at: "2025-06-20T06:49:32.000Z",
      },
      {
        id: 40,
        project_id: 9,
        is_type: "amenities",
        heading: "Landscape Walkway",
        short_description: "A path where every step is a breath of nature.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-2/amenities/5.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/5.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-2/amenities/5_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/5_sm.webp`,
        alt: "Landscape Walkway",
        status: 1,
        created_at: "2025-06-17T16:06:55.000Z",
        updated_at: "2025-06-20T06:49:49.000Z",
      },
      {
        id: 41,
        project_id: 9,
        is_type: "amenities",
        heading: "Clean & Peaceful environment",
        short_description: "A calm, pollution-free space promoting well-being.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-2/amenities/6.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/6.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-2/amenities/6_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/6_sm.webp`,
        alt: "Clean & Peaceful environment",
        status: 1,
        created_at: "2025-06-17T16:07:15.000Z",
        updated_at: "2025-06-20T06:50:04.000Z",
      },
      {
        id: 42,
        project_id: 9,
        is_type: "amenities",
        heading: "Landscape Indoor Seating",
        short_description: "Comfortable indoor nooks designed for a blend of elegance and coziness.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-2/amenities/7.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/7.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-2/amenities/7_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/7_sm.webp`,
        alt: "Landscape Indoor Seating",
        status: 1,
        created_at: "2025-06-17T16:07:38.000Z",
        updated_at: "2025-06-20T06:50:16.000Z",
      },
      {
        id: 43,
        project_id: 9,
        is_type: "amenities",
        heading: "Community Center",
        short_description: "A versatile space for events, meetings, and fostering connections.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-2/amenities/8.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/8.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-2/amenities/8_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-2/amenities/8_sm.webp`,
        alt: "Community Center",
        status: 1,
        created_at: "2025-06-17T16:07:59.000Z",
        updated_at: "2025-06-20T06:50:27.000Z",
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
        id: 10,
        project_id: 9,
        unit_type: "TOWER A",
        heading: "TOWER A1",
        area: "0",
        sizes: "0",
        image: "uploads/project/floorplan/1750176699819.webp",
        alternative_image: "uploads/project/floorplan/1750176699820.jpg",
        alt: "mvn athens gurgaon ph2 floor plan",
        status: 1,
        created_at: "2025-06-17T16:11:40.000Z",
        updated_at: null,
      },
      {
        id: 11,
        project_id: 9,
        unit_type: "TOWER A",
        heading: "TOWER A2",
        area: "0",
        sizes: "0",
        image: "uploads/project/floorplan/1750176753403.webp",
        alternative_image: "uploads/project/floorplan/1750176753673.jpg",
        alt: "mvn athens gurgaon phase 2 floor plan",
        status: 1,
        created_at: "2025-06-17T16:12:33.000Z",
        updated_at: null,
      },
      {
        id: 12,
        project_id: 9,
        unit_type: "TOWER B",
        heading: "TOWER B1",
        area: "0",
        sizes: "0",
        image: "uploads/project/floorplan/1750176796048.webp",
        alternative_image: "uploads/project/floorplan/1750176796309.jpg",
        alt: "mvn athens gurgaon phase 2 floor plan",
        status: 1,
        created_at: "2025-06-17T16:13:16.000Z",
        updated_at: null,
      },
      {
        id: 13,
        project_id: 9,
        unit_type: "TOWER B",
        heading: "TOWER B2",
        area: "0",
        sizes: "0",
        image: "uploads/project/floorplan/1750176826334.webp",
        alternative_image: "uploads/project/floorplan/1750176826334.jpg",
        alt: "mvn athens gurgaon ph2 floor plan",
        status: 1,
        created_at: "2025-06-17T16:13:46.000Z",
        updated_at: null,
      },
      {
        id: 14,
        project_id: 9,
        unit_type: "TOWER B",
        heading: "TOWER B3,B5,B7",
        area: "0",
        sizes: "0",
        image: "uploads/project/floorplan/1750176853241.webp",
        alternative_image: "uploads/project/floorplan/1750176853241.jpg",
        alt: "mvn athens gurgaon ph2 floor plan",
        status: 1,
        created_at: "2025-06-17T16:14:13.000Z",
        updated_at: null,
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
};



const AthensFaridabad = () => {
  window.scrollTo(0,0)
  return (
    <MicroPageGurgaonPhase2 data={athensGurgaonPhase2Data}  projectName={'mvn-athens-faridabad'}/>
  )
};

export default AthensFaridabad;
