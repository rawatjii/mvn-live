import React from "react";
import MicroPageGurgaonPhase2 from "../../MicroPageGurgaonPhase2";
import { API_URL } from "../../../../config/config";


const headerSidebarImg = `${API_URL}images/athens-ph2/header/sidebar.webp`
// banner images start
const bannerDesktop = `${API_URL}athens-gurgaon-phase-3/banner/banner.webp`
const bannerMobile = `${API_URL}athens-gurgaon-phase-3/banner/banner-m.webp`
// banner images end
//   <----------------------------------->
// gallery images start
const gallery1 = `${API_URL}athens-gurgaon-phase-3/gallery/1.webp`
const gallery2 = `${API_URL}athens-gurgaon-phase-3/gallery/2.webp`
const gallery3 = `${API_URL}athens-gurgaon-phase-3/gallery/3.webp`
// gallery images end
//   <----------------------------------->
// features images start
const features1 = `${API_URL}athens-gurgaon-phase-2/features/elevation.png`
const featuresBgImg = `${API_URL}athens-gurgaon-phase-2/features/bg-back.jpg`
// features images end
//   <----------------------------------->
// amenities images start
const kidsPlayArea = `${API_URL}athens-gurgaon-phase-2/amenities/1.jpg`
const OpenGym = `${API_URL}athens-gurgaon-phase-3/amenities/2.webp`
const Lawn = `${API_URL}athens-gurgaon-phase-3/amenities/3.webp`
// amenities images end
//   <----------------------------------->
// typology images start
const layoutPlan = `${API_URL}athens-gurgaon-phase-3/plans/layout_plan.webp`
const Bhk1 = `${API_URL}athens-gurgaon-phase-3/plans/1_bhk.webp`
const Bhk2 = `${API_URL}athens-gurgaon-phase-3/plans/2_bhk.webp`
const Bhk2_utility = `${API_URL}athens-gurgaon-phase-3/plans/2_bhk_utility.webp`
const bhk3 = `${API_URL}athens-gurgaon-phase-3/plans/3_bhk.webp`
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
    title: "MVN Athens Phase - III",
    extra: "Your dream paradise",
    desc: [
      "Our happiness dwells in the hearts of our home buyers. So, where somebody talks about customer satisfaction we are all ears.",
      "All our efforts are committed towards it. Delivery before time, Affordable luxury, Reliability & Quality in terms of material used for construction backed by a dedicated in-house team to look after the day to day affairs.",
      "MVN Athens, a residential affordable housing scheme by the State of Haryana, a gated community in sector-5, Sohna- Gurugram is home to more than 1104 families in Phase I & II."
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
    title:"Features",
    desc:"Designed to delight at every step.",
    src: features1,
    bgImg: featuresBgImg,
    isTwoColumn:true,
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
      "6 M Drive way",
      "1.8 m Jogging Track",
      "Toddlers Sand Pitch",
      "Chit Chat Corner with Games",
      "Seating Area",
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
        name: 'Open Gym',
        path: {
          desktop: OpenGym,
          mobile: OpenGym,
        },
        desc:'A fitness haven where strength meets serenity.'
      },
      {
        name: 'Shopping Area',
        path: {
          desktop: Lawn,
          mobile: Lawn,
        },
        desc:'Indulge in a world of premium retail experiences.'
      },
      
    ],
     
  },
  typologies: {
    title:'Typologies',
    desc:"Discover expertly crafted floor plans that maximize space, natural light, and luxurious living.",
    tabs_name:['Layout Plan', '1 BHK', '2 BHK','3 BHK'],
    tabs:{     
      layout_plan: [
        layoutPlan,
      ], 
      bhk1: [
        {
          title: "1 BHK Unit",
          link: "#",
          src: Bhk1
        },
      ],
      bhk2: [
        {
          title: "2 BHK Unit",
          link: "#",
          src: Bhk2
        },
        {
          title: "2 BHK + Utility Unit",
          link: "#",
          src: Bhk2_utility
        },
      ],
      bhk3: [
        {
          title: "3 BHK Unit",
          link: "#",
          src: bhk3
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
      { title: "DMIC (Delhi Mumbai Industrial Corridor)", desc: "05 Mins" },
    ],
    modalIframe:'https://www.youtube.com/embed/p4ArtUtsj-A?si=VsbM3Dvdk969-OHv',
  },
};



const AthensFaridabad = () => {
  window.scrollTo(0,0)
  return (
    <MicroPageGurgaonPhase2 data={athensGurgaonPhase3Data}  projectName={'mvn-athens-faridabad'}/>
  )
};

export default AthensFaridabad;
