import React from "react";
import * as CONFIG from '../../../../config/config';
import MicroPageBangalore from "../../MicroPageBangalore";


const bgImgMB = `${CONFIG.API_URL}images/aero-gurgaon/largeBg1Sm.webp`
const bgImgDesk = `${CONFIG.API_URL}images/aero-gurgaon/largeBg1.png`
const absDesk = `${CONFIG.API_URL}images/aero-gurgaon/building_sm.webp`
const building_sm = `${CONFIG.API_URL}images/aero-gurgaon/building_sm.webp`
const sidebar = `${CONFIG.API_URL}bangalore/header/sidebar.webp`

// landscape images start
const yogaDeck = `${CONFIG.API_URL}bangalore/landscape/1.jpg`
const sunkenCourt = `${CONFIG.API_URL}bangalore/landscape/2.jpg`
const swimmingPool = `${CONFIG.API_URL}bangalore/landscape/3.jpg`
// landscape images end
// < ---------------------------------- >
// elevation images start
const elevationDesktop1 = `${CONFIG.API_URL}bangalore/elevation/1lg.jpg`
const elevationDesktop2 = `${CONFIG.API_URL}bangalore/elevation/2lg.jpg`
const elevationDesktop3 = `${CONFIG.API_URL}bangalore/elevation/3lg.jpg`
const elevationMobile1 = `${CONFIG.API_URL}bangalore/elevation/1.jpg`
const elevationMobile2 = `${CONFIG.API_URL}bangalore/elevation/2.jpg`
const elevationMobile3 = `${CONFIG.API_URL}bangalore/elevation/3.jpg`
// elevation images end
// < ---------------------------------- >
// apartment images start
const apartmentDesktop1 = `${CONFIG.API_URL}bangalore/apartments/1.jpg`
const apartmentDesktop2 = `${CONFIG.API_URL}bangalore/apartments/2.jpg`
const apartmentDesktop3 = `${CONFIG.API_URL}bangalore/apartments/3.jpg`
const apartmentDesktop4 = `${CONFIG.API_URL}bangalore/apartments/4.jpg`
const apartmentDesktop5 = `${CONFIG.API_URL}bangalore/apartments/5.jpg`
const apartmentDesktop6 = `${CONFIG.API_URL}bangalore/apartments/6.jpg`
const apartmentDesktop7 = `${CONFIG.API_URL}bangalore/apartments/7.jpg`
const apartmentDesktop8 = `${CONFIG.API_URL}bangalore/apartments/8.jpg`
const apartmentDesktop9 = `${CONFIG.API_URL}bangalore/apartments/9.jpg`
const apartmentMobile1 = `${CONFIG.API_URL}bangalore/apartments/1m.jpg`
const apartmentMobile2 = `${CONFIG.API_URL}bangalore/apartments/2m.jpg`
const apartmentMobile3 = `${CONFIG.API_URL}bangalore/apartments/3m.jpg`
const apartmentMobile4 = `${CONFIG.API_URL}bangalore/apartments/4m.jpg`
const apartmentMobile5 = `${CONFIG.API_URL}bangalore/apartments/5m.jpg`
const apartmentMobile6 = `${CONFIG.API_URL}bangalore/apartments/6m.jpg`
const apartmentMobile7 = `${CONFIG.API_URL}bangalore/apartments/7m.jpg`
const apartmentMobile8 = `${CONFIG.API_URL}bangalore/apartments/8m.jpg`
const apartmentMobile9 = `${CONFIG.API_URL}bangalore/apartments/9m.jpg`
// apartment images end
// < ---------------------------------- >
// amenities images start
const amenitiesDesktopHotTub = `${CONFIG.API_URL}bangalore/amenities/Hot-tub--Hires.jpg`
const amenitiesDesktopBiiliards = `${CONFIG.API_URL}bangalore/amenities/Biiliards.jpg`
const amenitiesDesktopGym = `${CONFIG.API_URL}bangalore/amenities/gym.jpg`
const amenitiesDesktopPartyLawn = `${CONFIG.API_URL}bangalore/amenities/Party-Lawn.jpg`
const amenitiesDesktopInfinityPool = `${CONFIG.API_URL}bangalore/amenities/Infinity-pool.jpg`
const amenitiesDesktopTableTennis = `${CONFIG.API_URL}bangalore/amenities/Table-Tennis.jpg`
const amenitiesDesktopOutdoorCinema = `${CONFIG.API_URL}bangalore/amenities/Outdoor-Cinema.jpg`
const amenitiesMobileHotTub = `${CONFIG.API_URL}bangalore/amenities/Hot-tub--Hires-sm.jpg`
const amenitiesMobileBiiliards = `${CONFIG.API_URL}bangalore/amenities/Biiliards-sm.jpg`
const amenitiesMobileGym = `${CONFIG.API_URL}bangalore/amenities/gym-sm.jpg`
const amenitiesMobilePartyLawn = `${CONFIG.API_URL}bangalore/amenities/Party-Lawn-sm.jpg`
const amenitiesMobileInfinityPool = `${CONFIG.API_URL}bangalore/amenities/Infinity-pool-sm.jpg`
const amenitiesMobileTableTennis = `${CONFIG.API_URL}bangalore/amenities/Table-Tennis-sm.jpg`
const amenitiesMobileOutdoorCinema = `${CONFIG.API_URL}bangalore/amenities/Outdoor-Cinema-sm.jpg`
// amenities images end 
// < ---------------------------------- >
// typology images start
const typology1bhk1 = `${CONFIG.API_URL}bangalore/floor-plan/1bhk/1.webp`
const typology1bhk2 = `${CONFIG.API_URL}bangalore/floor-plan/1bhk/2.webp`
const typology2bhk1 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/1.webp`
const typology2bhk2 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/2.webp`
const typology2bhk3 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/3.webp`
const typology2bhk4 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/4.webp`
const typology2bhk5 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/5.webp`
const typology2bhk6 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/6.webp`
const typology2bhk7 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/7.webp`
const typology2bhk8 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/8.webp`
const typology2bhk9 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/9.webp`
const typology2bhk10 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/10.webp`
const typology2bhk11 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/11.webp`
const typology2bhk12 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/12.webp`
const typology2bhk13 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/13.webp`
const typology2bhk14 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/14.webp`
const typology2bhk15 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/15.webp`
const typology2bhk16 = `${CONFIG.API_URL}bangalore/floor-plan/2bhk/16.webp`
const typology3bhk1 = `${CONFIG.API_URL}bangalore/floor-plan/3bhk/1.webp`
const typology3bhk2 = `${CONFIG.API_URL}bangalore/floor-plan/3bhk/2.webp`
const typology3bhk3 = `${CONFIG.API_URL}bangalore/floor-plan/3bhk/3.webp`
const typology3bhk4 = `${CONFIG.API_URL}bangalore/floor-plan/3bhk/4.webp`
// typology images end
// < ---------------------------------- >
// location map start
const locationMapDesktop = `${CONFIG.API_URL}bangalore/map/location-map.webp`
const locationMapMobile = `${CONFIG.API_URL}bangalore/map/location_map_sm.webp`
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
    rera: ["RERA Registration no : PRM/KA/RERA/1250/303/PR/201222/003761", "Tower no 4 RERA Registration no : PRM/KA/RERA/1250/303/PR/140923/006259", "Tower no 5 and Tower 6 RERA Registration No : PRM/KA/RERA/1250/303/PR/141223/006472"],
    bankDetails:{
      acName:'MVN AERO ONE U/O M F FARMLANDS PVT LTD',
      acNo:'50200053428336',
      ifscCode:'HDFC0001744',
    }
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
    src: "https://www.youtube.com/embed/gJqfXn7vR9M?autoplay=1&loop=1&mute=1&playlist=gJqfXn7vR9M",
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
