import React from "react";
import * as CONFIG from '../../../../config/config';
import MicroPageFaridabad from "../../MicroPageFaridabad";
import MicroPageGurgaonPhase2 from "../../MicroPageGurgaonPhase2";
import headerSidebarImg from '../../../assets/images/athens-ph2/header/sidebar.webp'
// banner images start
import bannerDesktop from "../../../assets/athens-gurgaon-phase-2/banner/banner.jpg"
import bannerMobile from "../../../assets/athens-gurgaon-phase-2/banner/banner-m.jpg"
// banner images end
//   <----------------------------------->
// gallery images start
import gallery1 from "../../../assets/athens-gurgaon-phase-2/gallery/1.webp"
import gallery2 from "../../../assets/athens-gurgaon-phase-2/gallery/2.webp"
import gallery3 from "../../../assets/athens-gurgaon-phase-2/gallery/3.webp"
// gallery images end
//   <----------------------------------->
// features images start
import features1 from "../../../assets/athens-gurgaon-phase-2/features/elevation.png"
import featuresBgImg from "../../../assets/athens-gurgaon-phase-2/features/bg-back.jpg"
// features images end
//   <----------------------------------->
// amenities images start
import kidsPlayArea from "../../../assets/athens-gurgaon-phase-2/amenities/1.jpg"
import landscapeOutdoorSeating from "../../../assets/athens-gurgaon-phase-2/amenities/2.jpg"
import Lawn from "../../../assets/athens-gurgaon-phase-2/amenities/3.jpg"
import security from "../../../assets/athens-gurgaon-phase-2/amenities/4.jpg"
import landscapeWalkway from "../../../assets/athens-gurgaon-phase-2/amenities/5.jpg"
import peacefulEnvironment from "../../../assets/athens-gurgaon-phase-2/amenities/6.jpg"
import landscapeIndoorSeating from "../../../assets/athens-gurgaon-phase-2/amenities/7.jpg"
import communityCentre from "../../../assets/athens-gurgaon-phase-2/amenities/8.jpg"
// amenities images end
//   <----------------------------------->
// typology images start
import typology1 from "../../../assets/athens-gurgaon-phase-2/floor-plan/plansf1.jpg"
import typology2 from "../../../assets/athens-gurgaon-phase-2/floor-plan/plansf2.jpg"
import typology3 from "../../../assets/athens-gurgaon-phase-2/floor-plan/plansf3.jpg"
import typology4 from "../../../assets/athens-gurgaon-phase-2/floor-plan/plansf4.jpg"
import typology5 from "../../../assets/athens-gurgaon-phase-2/floor-plan/plansf5.jpg"
// typology images end
//   <----------------------------------->
// location map start
import locationMapDesktop from "../../../assets/athens-gurgaon-phase-2/location-map/location-map.jpg"
import locationMapMobile from "../../../assets/athens-gurgaon-phase-2/location-map/location-mapm.jpg"
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
