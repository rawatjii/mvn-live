import React from "react";
import MicroPageGurgaonPhase1 from "../../MicroPageGurgaonPhase1";
import { API_URL } from "../../../../config/config";

const heroDesktopImg = `${API_URL}images/athens-ph1/banner/banner1.webp`;
const heroMobileImg = `${API_URL}images/athens-ph1/banner/banner1_sm.webp`;
const headerSidebarImg = `${API_URL}images/athens-ph1/header/sidebar.webp`

// gallery images start
const gallery1 = `${API_URL}athens-gurgaon-phase-1/gallery/1.jpg`
const gallery2 = `${API_URL}athens-gurgaon-phase-1/gallery/2.jpg`
const gallery3 = `${API_URL}athens-gurgaon-phase-1/gallery/3.jpg`
const gallery4 = `${API_URL}athens-gurgaon-phase-1/gallery/4.jpg`
// gallery images end
//   <----------------------------------->
// features images start
const features1 = `${API_URL}athens-gurgaon-phase-1/features/elevation.png`
const featuresBgImg = `${API_URL}athens-gurgaon-phase-1/features/bg-back.jpg`
// features images end
//   <----------------------------------->
// amenities images start
const kidsPlayArea = `${API_URL}athens-gurgaon-phase-1/amenities/1.jpg`
const landscapeOutdoorSeating = `${API_URL}athens-gurgaon-phase-1/amenities/2.jpg`
const Lawn = `${API_URL}athens-gurgaon-phase-1/amenities/3.jpg`
const security = `${API_URL}athens-gurgaon-phase-1/amenities/4.jpg`
const landscapeWalkway = `${API_URL}athens-gurgaon-phase-1/amenities/5.jpg`
const peacefulEnvironment = `${API_URL}athens-gurgaon-phase-1/amenities/6.jpg`
const landscapeIndoorSeating = `${API_URL}athens-gurgaon-phase-1/amenities/7.jpg`
const communityCentre = `${API_URL}athens-gurgaon-phase-1/amenities/8.jpg`
// amenities images end
//   <----------------------------------->
// typology images start
const typology1bhk1 = `${API_URL}athens-gurgaon-phase-1/floor-plan/4.png`
const typology2bhk1 = `${API_URL}athens-gurgaon-phase-1/floor-plan/3.png`
const typology2bhk2 = `${API_URL}athens-gurgaon-phase-1/floor-plan/2.png`
const typology3bhk1 = `${API_URL}athens-gurgaon-phase-1/floor-plan/3.png`
// typology images end
//   <----------------------------------->
// location map start
const locationMapDesktop = `${API_URL}athens-gurgaon-phase-1/location-map/location-map.jpg`
const locationMapMobile = `${API_URL}athens-gurgaon-phase-1/location-map/location-mapm.jpg`
// location map end


export const athensGurgaonPhase1Data = {
  header:{
    sidebarAsset:{
      desktop:headerSidebarImg,
      mobile:headerSidebarImg,
    },
    athens_header:'Athens_nav',
    title:'MVN Athens, Gurgaon Phase 1',
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
    desktop:heroDesktopImg,
    mobile:heroMobileImg,
  },
  overview: {
    title: "MVN Athens",
    extra: "YOUR DREAM PARADISE",
    desc: [
      "MVN is a group formed with the vision of delivery of projects that imbibe its spirit of perfection & consumer satisfaction based on the philosophy of trust & integrity. Their clear vision leads to a seamless experience for the customers.",
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
      {
        desktop: gallery4,
        mobile: gallery4,
      },
    ],
  },
  features:{
    title:"Features",
    desc:"Designed to delight at every step.",
    src:features1,
    bgImg:featuresBgImg,
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
    description:"Immerse yourself in a luxurious array of world-class amenities crafted to elevate your lifestyle.\r\n\r\n",
     data:[
      {
        id: 28,
        project_id: 8,
        is_type: "amenities",
        heading: "Kids' Play Area",
        short_description: "A dynamic, fun space to keep children active and entertained.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-1/amenities/1.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/1.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-1/amenities/1_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/1_sm.webp`,
        alt: "Kids' Play Area image",
        status: 1,
        created_at: "2025-06-17T11:17:16.000Z",
        updated_at: "2025-06-20T06:24:54.000Z",
      },
      {
        id: 29,
        project_id: 8,
        is_type: "amenities",
        heading: "Landscape outdoor Seating",
        short_description: "Scenic seating areas for outdoor conversations and relaxation.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-1/amenities/2.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/2.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-1/amenities/2_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/2_sm.webp`,
        alt: "Landscape outdoor Seating image",
        status: 1,
        created_at: "2025-06-17T11:17:48.000Z",
        updated_at: "2025-06-20T06:25:17.000Z",
      },
      {
        id: 30,
        project_id: 8,
        is_type: "amenities",
        heading: "Lawn",
        short_description: "Expansive, well-manicured greens ideal for picnics or quiet relaxation.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-1/amenities/3.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/3.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-1/amenities/3_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/3_sm.webp`,
        alt: "Lawn image",
        status: 1,
        created_at: "2025-06-17T11:18:22.000Z",
        updated_at: "2025-06-20T06:25:31.000Z",
      },
      {
        id: 31,
        project_id: 8,
        is_type: "amenities",
        heading: "24/7 Security",
        short_description: "Cutting-edge security ensuring a worry-free lifestyle.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-1/amenities/4.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/4.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-1/amenities/4_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/4_sm.webp`,
        alt: "24/7 Security image",
        status: 1,
        created_at: "2025-06-17T11:19:12.000Z",
        updated_at: "2025-06-20T06:25:46.000Z",
      },
      {
        id: 32,
        project_id: 8,
        is_type: "amenities",
        heading: "Landscape Walkway",
        short_description: "A path where every step is a breath of nature.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-1/amenities/5.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/5.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-1/amenities/5_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/5_sm.webp`,
        alt: "Landscape Walkway image",
        status: 1,
        created_at: "2025-06-17T11:19:41.000Z",
        updated_at: "2025-06-20T06:26:05.000Z",
      },
      {
        id: 33,
        project_id: 8,
        is_type: "amenities",
        heading: "Clean & Peaceful environment",
        short_description: "A calm, pollution-free space promoting well-being.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-1/amenities/6.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/6.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-1/amenities/6_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/6_sm.webp`,
        alt: "Clean & Peaceful environment image",
        status: 1,
        created_at: "2025-06-17T11:20:11.000Z",
        updated_at: "2025-06-20T06:26:21.000Z",
      },
      {
        id: 34,
        project_id: 8,
        is_type: "amenities",
        heading: "Landscape Indoor Seating",
        short_description: "Comfortable indoor nooks designed for a blend of elegance and coziness.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-1/amenities/7.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/7.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-1/amenities/7_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/7_sm.webp`,
        alt: "Landscape Indoor Seating image",
        status: 1,
        created_at: "2025-06-17T11:20:41.000Z",
        updated_at: "2025-06-20T06:26:41.000Z",
      },
      {
        id: 35,
        project_id: 8,
        is_type: "amenities",
        heading: "Community Center",
        short_description: "A versatile space for events, meetings, and fostering connections.\r\n\r\n",
        image: `${API_URL}athens-gurgaon-phase-1/amenities/8.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/8.webp`,
        mb_image: `${API_URL}athens-gurgaon-phase-1/amenities/8_sm.webp`,
        mb_alternative_image: `${API_URL}athens-gurgaon-phase-1/amenities/8_sm.webp`,
        alt: "Community Center image",
        status: 1,
        created_at: "2025-06-17T11:21:10.000Z",
        updated_at: "2025-06-20T06:26:53.000Z",
      },
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
        id: 6,
        project_id: 8,
        unit_type: "1 BHK",
        heading: "1 BHK",
        area: "0",
        sizes: "0",
        image: `${API_URL}athens-gurgaon-phase-1/floor-plan/1bhk_1.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/floor-plan/1bhk_1.webp`,
        alt: "1 BHK floor plan image",
        status: 1,
        created_at: "2025-06-17T12:06:35.000Z",
        updated_at: null,
      },
      {
        id: 7,
        project_id: 8,
        unit_type: "2 BHK",
        heading: "2 BHK",
        area: "0",
        sizes: "0",
        image: `${API_URL}athens-gurgaon-phase-1/floor-plan/2bhk_1.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/floor-plan/2bhk_1.webp`,
        alt: "2 BHK floor plan image",
        status: 1,
        created_at: "2025-06-17T12:07:42.000Z",
        updated_at: null,
      },
      {
        id: 8,
        project_id: 8,
        unit_type: "1 BHK",
        heading: "1 BHK",
        area: "",
        sizes: null,
        image: `${API_URL}athens-gurgaon-phase-1/floor-plan/1bhk_2.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/floor-plan/1bhk_2.webp`,
        alt: "1 BHK floor plan image",
        status: 1,
        created_at: "2025-06-17T12:08:26.000Z",
        updated_at: "2025-06-20T04:36:33.000Z",
      },
      {
        id: 9,
        project_id: 8,
        unit_type: "3 BHK",
        heading: "3 BHK",
        area: "0",
        sizes: "0",
        image: `${API_URL}athens-gurgaon-phase-1/floor-plan/3bhk.webp`,
        alternative_image: `${API_URL}athens-gurgaon-phase-1/floor-plan/3bhk.webp`,
        alt: "3 BHK floor plan image",
        status: 1,
        created_at: "2025-06-17T12:09:47.000Z",
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
    <MicroPageGurgaonPhase1 data={athensGurgaonPhase1Data}  projectName={'mvn-athens-faridabad'}/>
  )
};

export default AthensFaridabad;
