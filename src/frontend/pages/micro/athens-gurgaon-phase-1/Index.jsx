import React from "react";
import * as CONFIG from '../../../../config/config';
import MicroPageFaridabad from "../../MicroPageFaridabad";
import MicroPageGurgaonPhase1 from "../../MicroPageGurgaonPhase1";

export const athensGurgaonPhase1Data = {
  header:{
    sidebarAsset:{
      desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}header/athens_phase1.webp`,
      mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}header/athens_phase1.webp`,
    },
    athens_header:'Athens_nav',
    title:'MVN Athens, Gurgaon Phase 1',
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
    desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}banner/banner.jpg`,
    mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}banner/banner-m.jpg`,
  },
  overview: {
    title: "MVN Athens",
    extra: "YOUR DREAM PARADISE",
    desc: [
      "MVN is a group formed with the vision of delivery of projects that inbibe its spirit of perfection & consumer satisfaction based on the philosophy of trust & integrity. Their clear vision leads to a seamless experience for the customers.",
      "Our happiness dwells in the hearts of our home buyers. So, where somebody talks about customer satisfaction we are all ears. All our efforts are committed towards it. Delivery before time, Affordable luxury, Reliability & Quality in terms of material used for construction backed by a dedicated in -house team to look after the day to day affairs. MVN Athens, a residential affordable housing scheme by the State of Haryana, a gated community in sector-5, Sohna- Gurugram is home to more than 1104 families in Phase I & II."
    ],
    rera:"RERA NO. RC/REP/HARERA/GGM/326/58/2019/20",
  },
  gallery:{
    title:'Gallery',
    desc:'Perfect amalgamation of comfort, convenience, and cost effectiveness.',
    images:[
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}gallery/1.jpg`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}gallery/1.jpg`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}gallery/2.jpg`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}gallery/2.jpg`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}gallery/3.jpg`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}gallery/3.jpg`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}gallery/4.jpg`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}gallery/4.jpg`,
      },
    ],
  },
  features:{
    title:"Feature So Unique",
    desc:"Designed to delight at every step.",
    src:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}elevation.png`,
    bgImg:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}bg-back.jpg`,
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
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/1.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/1.jpg`,
        },
        desc:'A dynamic, fun space to keep children active and entertained.' 
      },  
      {
        name: 'Landscaped outdoor Seating',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/2.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/2.jpg`,
        },
        desc:'Scenic seating areas for outdoor conversations and relaxation.'
      },
      {
        name: 'Lawn',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/3.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/3.jpg`,
        },
        desc:'Expansive, well-manicured greens ideal for picnics or quiet relaxation.'
      },
      {
        name: `24/7 Security`,
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/4.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/4.jpg`,
        },
        desc:'Cutting-edge security ensuring a worry-free lifestyle.'
      },
      {
        name: 'Landscaped Walkway',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/5.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/5.jpg`,
        },
        desc:'Comfortable indoor nooks designed for a blend of elegance and coziness.'
      },
      {
        name: 'Clean & Peaceful environment',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/6.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/6.jpg`,
        },
        desc:'A calm, pollution-free space promoting well-being.'
      },
      {
        name: 'Landscaped Indoor Seating',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/7.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/7.jpg`,
        },
        desc:'Comfortable indoor nooks designed for a blend of elegance and coziness.'
      },
      {
        name: 'Community Center',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/8.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}amenities/8.jpg`,
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
        src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}floor-plan/4.png`
      },
    ], 
    bhk_2: [
    {
      title: "2 BHK",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}floor-plan/3.png`
    },
    {
      title: "2 BHK",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}floor-plan/2.png`
    },
  ],
  bhk_3: [
  {
    title: "3 BHK",
    link: "#",
    src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}floor-plan/3.png`
  },
],
  }
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    desc:"Strategically Located for Convenience",
    mapIMG: {
      desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}location-map.jpg`,
      mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_1}location-mapm.jpg`,
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
      { title: "Universities / Schools (GD Goenka / RK Manglam / Ryan / Pathways/DPS)", desc: "05 - 10 Mins" },
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
