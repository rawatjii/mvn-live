import React from "react";
import * as CONFIG from '../../../../config/config';
import MicroPageFaridabad from "../../MicroPageFaridabad";
import MicroPageGurgaonPhase2 from "../../MicroPageGurgaonPhase2";

export const athensGurgaonPhase2Data = {
  header:{
    sidebarAsset:{
      desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}header/athens_phase1.webp`,
      mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}header/athens_phase1.webp`,
    },
    athens_header:'Athens_nav',
    title:'MVN Athens, Gurgaon Phase 2',
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
    desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}banner/banner.jpg`,
    mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}banner/banner-m.jpg`,
  },
  overview: {
    title: "MVN Athens",
    extra: "Your dream paradise",
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
        desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}gallery/1.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}gallery/1.webp`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}gallery/2.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}gallery/2.webp`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}gallery/3.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}gallery/3.webp`,
      },
    ],
  },
  features:{
    title:"Feature So Unique",
    desc:"Designed to delight at every step.",
    src:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}elevation.png`,
    bgImg:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}bg-back.jpg`,
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
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/1.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/1.jpg`,
        },
        desc:'A dynamic, fun space to keep children active and entertained.' 
      },  
      {
        name: 'Landscaped outdoor Seating',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/2.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/2.jpg`,
        },
        desc:'Scenic seating areas for outdoor conversations and relaxation.'
      },
      {
        name: 'Lawn',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/3.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/3.jpg`,
        },
        desc:'Expansive, well-manicured greens ideal for picnics or quiet relaxation.'
      },
      {
        name: `24/7 Security`,
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/4.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/4.jpg`,
        },
        desc:'Cutting-edge security ensuring a worry-free lifestyle.'
      },
      {
        name: 'Landscaped Walkway',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/5.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/5.jpg`,
        },
        desc:'Comfortable indoor nooks designed for a blend of elegance and coziness.'
      },
      {
        name: 'Clean & Peaceful environment',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/6.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/6.jpg`,
        },
        desc:'A calm, pollution-free space promoting well-being.'
      },
      {
        name: 'Landscaped Indoor Seating',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/7.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/7.jpg`,
        },
        desc:'Comfortable indoor nooks designed for a blend of elegance and coziness.'
      },
      {
        name: 'Community Center',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/8.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}amenities/8.jpg`,
        },
        desc:'A versatile space for events, meetings, and fostering connections.'
      },
    ],
     
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
        src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}floor-plan/plansf1.jpg`
      },
      {
        title: "TOWER A2",
        link: "#",
        src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}floor-plan/plansf1.jpg`
      },
    ], 
    tower_b: [
    {
      title: "TOWER B1",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}floor-plan/plansf3.jpg`
    },
    {
      title: "TOWER B2",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}floor-plan/plansf4.jpg`
    },
    {
      title: "TOWER B3,B5,B7",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}floor-plan/plansf5.jpg`
    },
  ],
  }
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    desc:"Strategically Located for Convenience",
    mapIMG: {
      desktop: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}location-map.jpg`,
      mobile: `${CONFIG.IMAGE_URL_ATHENS_GURGAON_PHASE_2}location-mapm.jpg`,
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
    <MicroPageGurgaonPhase2 data={athensGurgaonPhase2Data}  projectName={'mvn-athens-faridabad'}/>
  )
};

export default AthensFaridabad;
