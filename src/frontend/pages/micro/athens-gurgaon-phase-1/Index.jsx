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
      {
        section_title:'Gallery',
        link:'gallery'
      },
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
    title:'Amenities',
    desc: "Immerse yourself in a luxurious array of world-class amenities crafted to elevate your lifestyle.",
    data:[
      { 
        name: "Kids' Play Area",
        path:{
          desktop: kidsPlayArea,
          mobile: kidsPlayArea,
        },
        desc:'A dynamic, fun space to keep children active and entertained.' 
      },  
      {
        name: 'Landscape outdoor Seating',
        path: {
          desktop: landscapeOutdoorSeating,
          mobile: landscapeOutdoorSeating,
        },
        desc:'Scenic seating areas for outdoor conversations and relaxation.'
      },
      {
        name: 'Lawn',
        path: {
          desktop: Lawn,
          mobile: Lawn,
        },
        desc:'Expansive, well-manicured greens ideal for picnics or quiet relaxation.'
      },
      {
        name: `24/7 Security`,
        path: {
          desktop: security,
          mobile: security,
        },
        desc:'Cutting-edge security ensuring a worry-free lifestyle.'
      },
      {
        name: 'Landscape Walkway',
        path: {
          desktop: landscapeWalkway,
          mobile: landscapeWalkway,
        },
        desc:'A path where every step is a breath of nature.'
      },
      {
        name: 'Clean & Peaceful environment',
        path: {
          desktop: peacefulEnvironment,
          mobile: peacefulEnvironment,
        },
        desc:'A calm, pollution-free space promoting well-being.'
      },
      {
        name: 'Landscape Indoor Seating',
        path: {
          desktop: landscapeIndoorSeating,
          mobile: landscapeIndoorSeating,
        },
        desc:'Comfortable indoor nooks designed for a blend of elegance and coziness.'
      },
      {
        name: 'Community Center',
        path: {
          desktop: communityCentre,
          mobile: communityCentre,
        },
        desc:'A versatile space for events, meetings, and fostering connections.'
      },
    ],
     
  },
  typologies: {
    title:'Typologies',
    desc:"Discover expertly crafted floor plans that maximize space, natural light, and luxurious living.",
    tabs_name:['1 BHK','2 BHK','3 BHK'],
    tabs:{     
      bhk_1: [
      {
        title: "1 BHK",
        link: "#",
        src: typology1bhk1
      },
    ], 
    bhk_2: [
    {
      title: "2 BHK",
      link: "#",
      src: typology2bhk1
    },
    {
      title: "2 BHK",
      link: "#",
      src: typology2bhk2
    },
  ],
  bhk_3: [
  {
    title: "3 BHK",
    link: "#",
    src: typology3bhk1
  },
],
  }
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
