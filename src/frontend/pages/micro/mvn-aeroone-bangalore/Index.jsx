import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';


import MicroPageBangalore from "../../MicroPageBangalore";
import bgImgMB from '../../../assets/images/aero-gurgaon/largeBg1Sm.webp'
import bgImgDesk from '../../../assets/images/aero-gurgaon/largeBg1.png'
import absDesk from '../../../assets/images/aero-gurgaon/building_sm.webp'
import building_sm from '../../../assets/images/aero-gurgaon/building_sm.webp'
import sidebar from "../../../assets/bangalore/header/sidebar.webp"

// landscape images start
import yogaDeck from "../../../assets/bangalore/landscape/1.jpg"
import sunkenCourt from "../../../assets/bangalore/landscape/2.jpg"
import swimmingPool from "../../../assets/bangalore/landscape/3.jpg"
// landscape images end
// < ---------------------------------- >
// elevation images start
import elevationDesktop1 from "../../../assets/bangalore/elevation/1lg.jpg"
import elevationDesktop2 from "../../../assets/bangalore/elevation/2lg.jpg"
import elevationDesktop3 from "../../../assets/bangalore/elevation/3lg.jpg"
import elevationMobile1 from "../../../assets/bangalore/elevation/1.jpg"
import elevationMobile2 from "../../../assets/bangalore/elevation/2.jpg"
import elevationMobile3 from "../../../assets/bangalore/elevation/3.jpg"
// elevation images end
// < ---------------------------------- >
// apartment images start
import apartmentDesktop1 from "../../../assets/bangalore/apartments/1.jpg"
import apartmentDesktop2 from "../../../assets/bangalore/apartments/2.jpg"
import apartmentDesktop3 from "../../../assets/bangalore/apartments/3.jpg"
import apartmentDesktop4 from "../../../assets/bangalore/apartments/4.jpg"
import apartmentDesktop5 from "../../../assets/bangalore/apartments/5.jpg"
import apartmentDesktop6 from "../../../assets/bangalore/apartments/6.jpg"
import apartmentDesktop7 from "../../../assets/bangalore/apartments/7.jpg"
import apartmentDesktop8 from "../../../assets/bangalore/apartments/8.jpg"
import apartmentDesktop9 from "../../../assets/bangalore/apartments/9.jpg"
import apartmentMobile1 from "../../../assets/bangalore/apartments/1m.jpg"
import apartmentMobile2 from "../../../assets/bangalore/apartments/2m.jpg"
import apartmentMobile3 from "../../../assets/bangalore/apartments/3m.jpg"
import apartmentMobile4 from "../../../assets/bangalore/apartments/4m.jpg"
import apartmentMobile5 from "../../../assets/bangalore/apartments/5m.jpg"
import apartmentMobile6 from "../../../assets/bangalore/apartments/6m.jpg"
import apartmentMobile7 from "../../../assets/bangalore/apartments/7m.jpg"
import apartmentMobile8 from "../../../assets/bangalore/apartments/8m.jpg"
import apartmentMobile9 from "../../../assets/bangalore/apartments/9m.jpg"
// apartment images end
// < ---------------------------------- >
// amenities images start
import amenitiesDesktopHotTub from "../../../assets/bangalore/amenities/Hot-tub--Hires.jpg"
import amenitiesDesktopBiiliards from "../../../assets/bangalore/amenities/Biiliards.jpg"
import amenitiesDesktopGym from "../../../assets/bangalore/amenities/gym.jpg"
import amenitiesDesktopPartyLawn from "../../../assets/bangalore/amenities/Party-Lawn.jpg"
import amenitiesDesktopInfinityPool from "../../../assets/bangalore/amenities/Infinity-pool.jpg"
import amenitiesDesktopTableTennis from "../../../assets/bangalore/amenities/Table-Tennis.jpg"
import amenitiesDesktopOutdoorCinema from "../../../assets/bangalore/amenities/Outdoor-Cinema-sm.jpg"
import amenitiesMobileHotTub from "../../../assets/bangalore/amenities/Hot-tub--Hires-sm.jpg"
import amenitiesMobileBiiliards from "../../../assets/bangalore/amenities/Biiliards-sm.jpg"
import amenitiesMobileGym from "../../../assets/bangalore/amenities/gym-sm.jpg"
import amenitiesMobilePartyLawn from "../../../assets/bangalore/amenities/Party-Lawn-sm.jpg"
import amenitiesMobileInfinityPool from "../../../assets/bangalore/amenities/Infinity-pool-sm.jpg"
import amenitiesMobileTableTennis from "../../../assets/bangalore/amenities/Table-Tennis-sm.jpg"
import amenitiesMobileOutdoorCinema from "../../../assets/bangalore/amenities/Outdoor-Cinema-sm.jpg"
// amenities images end 
// < ---------------------------------- >
// typology images start
import typology1bhk1 from "../../../assets/bangalore/floor-plan/1bhk/1.webp"
import typology1bhk2 from "../../../assets/bangalore/floor-plan/1bhk/2.webp"
import typology2bhk1 from "../../../assets/bangalore/floor-plan/2bhk/1.webp"
import typology2bhk2 from "../../../assets/bangalore/floor-plan/2bhk/2.webp"
import typology2bhk3 from "../../../assets/bangalore/floor-plan/2bhk/3.webp"
import typology2bhk4 from "../../../assets/bangalore/floor-plan/2bhk/4.webp"
import typology2bhk5 from "../../../assets/bangalore/floor-plan/2bhk/5.webp"
import typology2bhk6 from "../../../assets/bangalore/floor-plan/2bhk/6.webp"
import typology2bhk7 from "../../../assets/bangalore/floor-plan/2bhk/7.webp"
import typology2bhk8 from "../../../assets/bangalore/floor-plan/2bhk/8.webp"
import typology2bhk9 from "../../../assets/bangalore/floor-plan/2bhk/9.webp"
import typology2bhk10 from "../../../assets/bangalore/floor-plan/2bhk/10.webp"
import typology2bhk11 from "../../../assets/bangalore/floor-plan/2bhk/11.webp"
import typology2bhk12 from "../../../assets/bangalore/floor-plan/2bhk/12.webp"
import typology2bhk13 from "../../../assets/bangalore/floor-plan/2bhk/13.webp"
import typology2bhk14 from "../../../assets/bangalore/floor-plan/2bhk/14.webp"
import typology2bhk15 from "../../../assets/bangalore/floor-plan/2bhk/15.webp"
import typology2bhk16 from "../../../assets/bangalore/floor-plan/2bhk/16.webp"
import typology3bhk1 from "../../../assets/bangalore/floor-plan/3bhk/1.webp"
import typology3bhk2 from "../../../assets/bangalore/floor-plan/3bhk/2.webp"
import typology3bhk3 from "../../../assets/bangalore/floor-plan/3bhk/3.webp"
import typology3bhk4 from "../../../assets/bangalore/floor-plan/3bhk/4.webp"
// typology images end
// < ---------------------------------- >
// location map start
import locationMapDesktop from "../../../assets/bangalore/map/location-map.jpg"
import locationMapMobile from "../../../assets/bangalore/map/location-mapm.jpg"
// location map end
// < ---------------------------------- >
export const bangaloreData = {
  header:{
    sidebarAsset:{
          desktop:sidebar,
          mobile:sidebar,
        },
    title:'MVN Aero One, Bangalore',
    sidebar_section:[
      {
        section_title:'Overview',
        link:'microOverview'
      },
      {
        section_title:'Walkthrough',
        link:'Walkthrough'
      },
      {
        section_title:'MVN Aero one ID Brochure',
        link:'downloadBrochure'
      },
      {
        section_title:'The Living Room',
        link:'livingRoom'
      },
      {
        section_title:'Master Bedroom',
        link:'masterBedroom'
      },
      {
        section_title:'Landscape',
        link:'MicroLandscape'
      },
      {
        section_title:'Elevation',
        link:'MicroElevation'
      },
      {
        section_title:'Apartment',
        link:'MicroApartment'
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
      {
        section_title:'Enquiry Form',
        link:'enquiryForm'
      },
    ],
  },
  micro_hero_section: {
       path:{
         mobile:`${CONFIG.JSON_URL}bangalore/banner/data.json`,
         desktop:`${CONFIG.JSON_URL}bangalore/banner/data.json`,
       },
  },
  overview: {
    title: "MVN RESIDENCE",
    extra: "Where Prestige Meets Unparalleled Elegance",
    desc: "Discover an architectural masterpiece that transforms Bangalore's skyline. The breathtaking elevation of the MVN Aero One perfectly merges modern sophistication and timeless splendor, creating a visual delight that captures the spirit of opulent living.",
    rera: "RERA Registration no : PRM/KA/RERA/1250/303/PR/201222/003761",
  },
  LargeElevationSection: {
        path:{
          mobile:{
            bgImg:bgImgMB,
            frontImg:building_sm,
          },
          desktop:{
            bgImg:bgImgDesk,
            frontImg:absDesk,
          }
        },
      // class_name:'center',
      second_title:'Timeless Fusion of Elegance',
      desc:'Designed to inspire awe at first glance, the static elevation of MVN Aero One showcases a perfect fusion of form and function. Each detail is meticulously crafted to embody a harmonious balance of contemporary aesthetics and architectural innovation.',
  },
  walkthrough: {
    src: "https://www.youtube.com/embed/gJqfXn7vR9M",
    // title: "Virtual Tour",
    // title: "Walkthrough",
    second_title:'Walkthrough',
    desc: "Experience MVN Aero One through a captivating virtual journey that unveils its every nuance. From awe-inspiring entrances to serene interiors, immerse yourself in spaces designed for a life of unparalleled opulence.",
  },
  living_room:{
    path:{
      mobile:`${CONFIG.JSON_URL}bangalore/livingRoom/data.json`,
      desktop:`${CONFIG.JSON_URL}bangalore/livingRoom/data.json`,
    },
    second_title:'OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY',
    desc:'Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.'
  },
  masterBedroom:{
    path:{
      mobile:`${CONFIG.JSON_URL}bangalore/masterBedroom/mobile/data.json`,
      desktop:`${CONFIG.JSON_URL}bangalore/masterBedroom/desktop/data.json`,
    },
    second_title:'A Haven of Luxury and Repose',
    desc:"Enter a master bedroom where grandeur meets tranquility. This retreat is your ultimate haven, epitomizing luxurious living at its finest, with bespoke interiors, expansive layouts, and an ambience of refined elegance."

  },
  landscape:{
    title:'Landscape',
    desc:'Revel in the serenity of nature with verdant landscapes that elevate outdoor living. MVN Aero One offers lush greenery and thoughtfully designed open spaces, offering a tranquil escape amidst urban vibrancy.',
    images:[
      {
        desktop: sunkenCourt,
        mobile: sunkenCourt,
        watermark: "right",
        title: "Sunken Court Hires",
      },
      {
        desktop: swimmingPool,
        mobile: swimmingPool,
        watermark: "right",
        title: "Swimming Pool",
      },
      {
        desktop: yogaDeck,
        mobile: yogaDeck,
        watermark: "right",
        title: "Yoga Deck",
      },
    ],
  },
  microElevation:{
    title:'Elevation',
    desc:'A landmark rising majestically above the city, MVN Aero One embodies architectural excellence. Its striking facade signifies a commitment to superior living and luxurious distinction.',
    images:[
      {
        desktop:elevationDesktop1,
        mobile:elevationMobile1,
        watermark: 'right'
      },
      {
        desktop:elevationDesktop2,
        mobile:elevationMobile2,
        watermark: 'right'
      },
      {
        desktop:elevationDesktop3,
        mobile:elevationMobile3,
        watermark: 'right'
      },
    ],
  },
  microApartment:{
    title:'Apartment',
    desc:`Your residence at MVN Aero One transcends the notion of a home as it epitomises elegance. With expansive layouts, sophisticated interiors, and meticulous attention to detail, every space celebrates the art of fine living.`,
    images:[
      {
        desktop:apartmentDesktop1,
        mobile:apartmentMobile1,
        watermark:'right',
        title:'Master Bedroom',
      },
      {
        desktop:apartmentDesktop2,
        mobile:apartmentMobile2,
        watermark:'right',
        title:'Master Bedroom Closet',
      },
      {
        desktop:apartmentDesktop3,
        mobile:apartmentMobile3,
        watermark:'right',
        title:'Kitchen',
      },  
      {
        desktop:apartmentDesktop4,
        mobile:apartmentMobile4,
        watermark:'right',
        title:"KIDS' ROOM",
      },  
      {
        desktop:apartmentDesktop5,
        mobile:apartmentMobile5,
        watermark:'right',
        title:'Guest Bedroom',
      },
      {
        desktop:apartmentDesktop6,
        mobile:apartmentMobile6,
        watermark:'right',
        title:'Foyer',
      },
      {
        desktop:apartmentDesktop7,
        mobile:apartmentMobile7,
        watermark:'right',
        title:'Entry Foyer',
      },
      {
        desktop:apartmentDesktop8,
        mobile:apartmentMobile8,
        watermark:'right',
        title:'Balcony',
      },
      {
        desktop:apartmentDesktop9,
        mobile:apartmentMobile9,
        watermark:'right',
        title:'Bedroom',
      },
    ],
    imageClassName:'apartment-section-img',
  },
  amenities : {
    title:'Amenities',
    desc: "Indulge in a range of world-class amenities tailored to meet your every desire. From wellness and leisure to relaxation and convenience, MVN Aero One offers a lifestyle perfectly aligned with your aspirations. ",
    data:[
      { 
        name: 'Hot Tub',
        path:{
          desktop:amenitiesDesktopHotTub,
          mobile:amenitiesMobileHotTub,
        },
        desc:'Immerse yourself in ultimate relaxation with a luxurious hot tub. Bask in the warmth as you de-stress and let go of the world’s cares, rejuvenating your mind and body.' 
      },  
      {
        name: 'Billiards',
        path: {
          desktop:amenitiesDesktopBiiliards,
          mobile:amenitiesMobileBiiliards,
        },
        desc:'Engage in a refined game of billiards with friends and neighbors. The well-appointed space ensures a seamless and enjoyable experience for every enthusiast.'
      },
      {
        name: 'Gym',
        path: {
          desktop:amenitiesDesktopGym,
          mobile:amenitiesMobileGym,amenitiesMobileGym
        },
        desc:'Achieve your fitness goals with cutting-edge equipment in a panoramic terrace gym, where every session is infused with motivation and stunning views.'
      },
      {
        name: 'Party Lawn',
        path: {
          desktop:amenitiesDesktopPartyLawn,
          mobile:amenitiesMobilePartyLawn,
        },
        desc:'Celebrate life’s cherished moments on the rooftop party lawn, a haven for heartfelt conversations and unforgettable memories. '
      },
      {
        name: `Infinity Pool`,
        path: {
          desktop:amenitiesDesktopInfinityPool,
          mobile:amenitiesMobileInfinityPool,
        },
        desc:'Swim towards the horizon in the exquisite infinity pool. With its vanishing edge, enjoy breathtaking vistas of the runway, lush greenery, and the shimmering Bettakotta Lake.'
      },
      {
        name: 'Table-Tennis',
        path: {
          desktop:amenitiesDesktopTableTennis,
          mobile:amenitiesMobileTableTennis,
        },
        desc:'Refine your game in the dedicated table tennis zone. This vibrant space is designed to inspire focus and friendly competition, ensuring endless enjoyment.'
      },
      {
        name: 'Outdoor Cinema',
        path: {
          desktop:amenitiesDesktopOutdoorCinema,
          mobile:amenitiesMobileOutdoorCinema,
        },
        desc:'Experience the enchantment of cinema beneath a canopy of stars. The outdoor theatre offers an exceptional blend of entertainment and natural splendor.'
      },
    ],
     
  },
  typologies: {
    title:'Typologies',
    desc:"Explore intricately designed floor plans catering to diverse preferences while maximizing space efficiency. Each layout is an architectural triumph, suffused with natural light and effortless elegance.",
    tabs_name:['1 BHK','2 BHK','3 BHK'],
    tabs:{   
      bhk_1: [
      {
        title: "1 BHK",
        area: "440 sq.ft.",
        link: "#",
        src: typology1bhk1
      },
      {
        title: "1 BHK",
        area: "600 sq.ft.",
        link: "#",
        src: typology1bhk2
      }
    ],  
    bhk_2: [
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: typology2bhk1
    },
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: typology2bhk2
    },
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: typology2bhk3
    },
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: typology2bhk4
    },
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: typology2bhk5
    },
    {
      title: "2 BHK",
      area: "726 sq.ft.",
      link: "#",
      src: typology2bhk6
    },
    {
      title: "2 BHK",
      area: "726 sq.ft.",
      link: "#",
      src: typology2bhk7
    },
    {
      title: "2 BHK",
      area: "730 sq.ft.",
      link: "#",
      src: typology2bhk8
    },
    {
      title: "2 BHK",
      area: "730 sq.ft.",
      link: "#",
      src: typology2bhk9
    },
    {
      title: "2 BHK",
      area: "755 sq.ft.",
      link: "#",
      src: typology2bhk10
    },
    {
      title: "2 BHK",
      area: "804 sq.ft.",
      link: "#",
      src: typology2bhk11
    },
    {
      title: "2 BHK",
      area: "804 sq.ft.",
      link: "#",
      src: typology2bhk12
    },
    {
      title: "2 BHK",
      area: "807 sq.ft.",
      link: "#",
      src: typology2bhk13
    },
    {
      title: "2 BHK",
      area: "807 sq.ft.",
      link: "#",
      src: typology2bhk14
    },
    {
      title: "2 BHK",
      area: "834 sq.ft.",
      link: "#",
      src: typology2bhk15
    },
    {
      title: "2 BHK",
      area: "834 sq.ft.",
      link: "#",
      src: typology2bhk16
    },
  ],
  bhk_3:[
    {
      title: "3 BHK",
      area: "1099 sq.ft.",
      link: "#",
      src: typology3bhk1
    },
    {
      title: "3 BHK",
      area: "1099 sq.ft.",
      link: "#",
      src: typology3bhk2
    },
    {
      title: "3 BHK",
      area: "1099 sq.ft.",
      link: "#",
      src: typology3bhk3
    },
    {
      title: "3 BHK",
      area: "1099 sq.ft.",
      link: "#",
      src: typology3bhk4
    },
  ],
  }
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    second_title:"THE LOCATION AS INVITING AS ITS ALLURE",
    desc:"In the heart of Bangalore’s dynamic landscape, MVN Aero One offers an address that seamlessly combines connectivity and tranquility.",
    mapIMG: {
      desktop: locationMapDesktop,
      mobile: locationMapMobile,
    },
    locationSlider: true,
    chunks:5,
    sliderItems : [
      { title: "Mini Vidhana Soudha, Devanahalli", desc: "3.4 Km | 06 Min" },
      { title: "Nandi Hills, Nandi Hills Road", desc: "27 Km | 40 Min" },
      { title: "Timbre Drive-In Cinema, Bellary Road ", desc: "6.5 Km | 11 Min" },
      { title: "Anjaneya Temple, Devanahalli", desc: "02 Km | 03 Min" },
      { title: "Mar Thama Church, Devanahalli", desc: "2.6 Km | 04 Min" },
      { title: "Kempegowda Intl. Airport", desc: "14 Km | 15 Min" },
      { title: "K.I. Airport  Halt (Railway Station)", desc: "11 Km | 12 Min" },
      { title: "Proposed Metro  line", desc: "13 Km | 13 Min" },
      { title: "Devanahalli Trumpet Flyover Bellary Road", desc: "11 Km | 12 Min" },
      { title: " Sports Village Bellary Road", desc: "05 Km | 05 Min" },
      { title: "Clarks Exotica, Sadahalli", desc: "16 Km | 18 Min" },
      { title: "Taj Hotel K Intl. Airport", desc: "16 Km | 15 Min" },
      { title: "Sai Mart,  Devanahalli", desc: "3.4 Km | 03 Min" },
      { title: "Esteem Mall, Hebbal", desc: "29 Km | 30 Min" },
      { title: "Nalanda  Collage, Bellary Road", desc: "4 Km | 08 Min" },
      { title: "Global Minds, Brigade Orchards", desc: "0.5 Km | 02 Min" },
      { title: "Delhi Public  School, Sathanur", desc: "23 Km | 26 Min" },
      { title: "IT tech Park KIADB, Devanahalli ", desc: "09 Km | 11 Min" },
      { title: "Aerospace Sez  KIABD, Devanhalli", desc: "09 Km | 11 Min" },
      { title: "Hardware Park KIABD, Devanhalli", desc: "15 Km | 16 Min" },
    ],
    modalIframe:'https://www.youtube.com/embed/p4ArtUtsj-A?si=VsbM3Dvdk969-OHv',
  },
};



const AeroOneBangalore = () => {
  window.scrollTo(0,0)
  return (
    <MicroPageBangalore data={bangaloreData}  projectName={'MVN-AeroOne-Bangalore'}/>
  )
};

export default AeroOneBangalore;
