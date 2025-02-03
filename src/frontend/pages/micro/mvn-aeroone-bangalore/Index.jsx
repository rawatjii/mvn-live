import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';
import MicroPageBangalore from "../../MicroPageBangalore";
import bgImgMB from '../../../assets/images/aero-gurgaon/largeBg1Sm.webp'
import bgImgDesk from '../../../assets/images/aero-gurgaon/largeBg1.png'
import absDesk from '../../../assets/images/aero-gurgaon/building_sm.webp'
import building_sm from '../../../assets/images/aero-gurgaon/building_sm.webp'

export const bangaloreData = {
  header:{
    sidebarAsset:{
          desktop:`${CONFIG.IMAGE_URL_BANGALORE}header/sidebar.webp`,
          mobile:`${CONFIG.IMAGE_URL_BANGALORE}header/sidebar.webp`,
        },
    title:'MVN AeroOne, Bangalore',
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
        section_title:'MVN ID Brochure',
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
         mobilePath:`${CONFIG.IMAGE_URL_BANGALORE}banner/desktop/`,
         desktopPath:`${CONFIG.IMAGE_URL_BANGALORE}banner/desktop/`,
       },
       frameCounts:{
         mobileFrameCounts:198,
         desktopFrameCounts:198,
       },
       classCustomCard:'d-none',
       classMain:'banner p-0',

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
      mobilePath:`${CONFIG.IMAGE_URL_BANGALORE}living-room/desktop/`,
      desktopPath:`${CONFIG.IMAGE_URL_BANGALORE}living-room/desktop/`,
    },
    frameCounts:{
      mobileFrameCounts:972,
      desktopFrameCounts:972,
    },
    second_title:'OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY',
    desc:'Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.'
  },
  masterBedroom:{
    path:{
      mobilePath:`${CONFIG.IMAGE_URL_BANGALORE}master_bedroom/mobile/`,
      desktopPath:`${CONFIG.IMAGE_URL_BANGALORE}master_bedroom/desktop/`,
    },
    frameCounts:{
      mobileFrameCounts:255,
      desktopFrameCounts:162,
    },
    second_title:'A Haven of Luxury and Repose',
    desc:"Enter a master bedroom where grandeur meets tranquility. This retreat is your ultimate haven, epitomizing luxurious living at its finest, with bespoke interiors, expansive layouts, and an ambience of refined elegance."

  },
  landscape:{
    title:'Landscape',
    desc:'Revel in the serenity of nature with verdant landscapes that elevate outdoor living. MVN Aero One offers lush greenery and thoughtfully designed open spaces, offering a tranquil escape amidst urban vibrancy.',
    images:[
      {
        desktop: `${CONFIG.IMAGE_URL_BANGALORE}landscape/2.jpg`,
        mobile: `${CONFIG.IMAGE_URL_BANGALORE}landscape/2.jpg`,
        watermark: "right",
        title: "Sunken Court Hires",
      },
      {
        desktop: `${CONFIG.IMAGE_URL_BANGALORE}landscape/3.jpg`,
        mobile: `${CONFIG.IMAGE_URL_BANGALORE}landscape/3.jpg`,
        watermark: "right",
        title: "Swimming Pool",
      },
      {
        desktop: `${CONFIG.IMAGE_URL_BANGALORE}landscape/1.jpg`,
        mobile: `${CONFIG.IMAGE_URL_BANGALORE}landscape/1.jpg`,
        watermark: "right",
        title: "oga Deck",
      },
    ],
  },
  microElevation:{
    title:'Elevation',
    desc:'A landmark rising majestically above the city, MVN Aero One embodies architectural excellence. Its striking facade signifies a commitment to superior living and luxurious distinction.',
    images:[
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}elevation/1lg.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}elevation/1.jpg`,
        watermark: 'right'
      },
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}elevation/2lg.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}elevation/2.jpg`,
        watermark: 'right'
      },
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}elevation/3lg.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}elevation/3.jpg`,
        watermark: 'right'
      },
    ],
  },
  microApartment:{
    title:'Apartment',
    desc:`Your residence at MVN Aero One transcends the notion of a home as it epitomises elegance. With expansive layouts, sophisticated interiors, and meticulous attention to detail, every space celebrates the art of fine living.`,
    images:[
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/1.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/1m.jpg`,
        watermark:'right',
        title:'Master Bedroom',
      },
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/2.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/2m.jpg`,
        watermark:'right',
        title:'Master Bedroom Closet',
      },
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/3.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/3m.jpg`,
        watermark:'right',
        title:'Kitchen',
      },  
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/4.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/4m.jpg`,
        watermark:'right',
        title:"KIDS' ROOM",
      },  
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/5.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/5m.jpg`,
        watermark:'right',
        title:'Guest Bedroom',
      },
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/6.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/6m.jpg`,
        watermark:'right',
        title:'Foyer',
      },
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/7.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/7m.jpg`,
        watermark:'right',
        title:'Entry Foyer',
      },
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/8.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/8m.jpg`,
        watermark:'right',
        title:'Balcony',
      },
      {
        desktop:`${CONFIG.IMAGE_URL_BANGALORE}apartments/9.jpg`,
        mobile:`${CONFIG.IMAGE_URL_BANGALORE}apartments/9m.jpg`,
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
          desktop:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Hot-tub--Hires.jpg`,
          mobile:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Hot-tub--Hires-sm.jpg`,
        },
        desc:'Immerse yourself in ultimate relaxation with a luxurious hot tub. Bask in the warmth as you de-stress and let go of the world’s cares, rejuvenating your mind and body.' 
      },  
      {
        name: 'Billiards',
        path: {
          desktop:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Biiliards.jpg`,
          mobile:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Biiliards-sm.jpg`,
        },
        desc:'Engage in a refined game of billiards with friends and neighbors. The well-appointed space ensures a seamless and enjoyable experience for every enthusiast.'
      },
      {
        name: 'Gym',
        path: {
          desktop:`${CONFIG.IMAGE_URL_BANGALORE}amenities/gym.jpg`,
          mobile:`${CONFIG.IMAGE_URL_BANGALORE}amenities/gym-sm.jpg`,
        },
        desc:'Achieve your fitness goals with cutting-edge equipment in a panoramic terrace gym, where every session is infused with motivation and stunning views.'
      },
      {
        name: 'Party Lawn',
        path: {
          desktop:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Party-Lawn.jpg`,
          mobile:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Party-Lawn-sm.jpg`,
        },
        desc:'Celebrate life’s cherished moments on the rooftop party lawn, a haven for heartfelt conversations and unforgettable memories. '
      },
      {
        name: `Infinity Pool`,
        path: {
          desktop:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Infinity-pool.jpg`,
          mobile:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Infinity-pool-sm.jpg`,
        },
        desc:'Swim towards the horizon in the exquisite infinity pool. With its vanishing edge, enjoy breathtaking vistas of the runway, lush greenery, and the shimmering Bettakotta Lake.'
      },
      {
        name: 'Table-Tennis',
        path: {
          desktop:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Table-Tennis.jpg`,
          mobile:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Table-Tennis-sm.jpg`,
        },
        desc:'Refine your game in the dedicated table tennis zone. This vibrant space is designed to inspire focus and friendly competition, ensuring endless enjoyment.'
      },
      {
        name: 'Outdoor Cinema',
        path: {
          desktop:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Outdoor-Cinema.jpg`,
          mobile:`${CONFIG.IMAGE_URL_BANGALORE}amenities/Outdoor-Cinema-sm.jpg`,
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
        src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/1bhk/1.png`
      },
      {
        title: "1 BHK",
        area: "600 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/1bhk/2.png`
      }
    ],  
    bhk_2: [
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/1.png`
    },
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/2.png`
    },
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/3.png`
    },
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/4.png`
    },
    {
      title: "2 BHK",
      area: "725 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/5.png`
    },
    {
      title: "2 BHK",
      area: "726 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/6.png`
    },
    {
      title: "2 BHK",
      area: "726 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/7.png`
    },
    {
      title: "2 BHK",
      area: "730 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/8.png`
    },
    {
      title: "2 BHK",
      area: "730 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/9.png`
    },
    {
      title: "2 BHK",
      area: "755 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/10.png`
    },
    {
      title: "2 BHK",
      area: "804 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/11.png`
    },
    {
      title: "2 BHK",
      area: "804 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/12.png`
    },
    {
      title: "2 BHK",
      area: "807 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/13.png`
    },
    {
      title: "2 BHK",
      area: "807 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/14.png`
    },
    {
      title: "2 BHK",
      area: "834 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/15.png`
    },
    {
      title: "2 BHK",
      area: "834 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/2bhk/16.png`
    },
  ],
  bhk_3:[
    {
      title: "3 BHK",
      area: "1099 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/3bhk/1.png`
    },
    {
      title: "3 BHK",
      area: "1099 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/3bhk/2.png`
    },
    {
      title: "3 BHK",
      area: "1099 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/3bhk/3.png`
    },
    {
      title: "3 BHK",
      area: "1099 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_BANGALORE}floor-plan/3bhk/4.png`
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
      desktop: `${CONFIG.IMAGE_URL_BANGALORE}location-map.jpg`,
      mobile: `${CONFIG.IMAGE_URL_BANGALORE}location-mapm.jpg`,
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
    video1: {
      title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
      desc:'Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings.',
      isVdo: true,
    },
    video2: {
      title: "ESCAPE TO EXCLUSIVITY",
      desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
      isVdo: true,
    },
    peacock_section:{
      second_title:'EXPERIENCE THE GRANDEUR OF THE LIVING ROOM WITH 360° PANORAMIC VIEWS',
      desc:'Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings.',
      path:{
        mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/Peacock/Mobile/data.json`,
        desktop:`${CONFIG.JSON_URL}aeroone-gurgaon1/Peacock/Mobile/data.json`,
      }
  },
    living_room_video:{
      title: "OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY",
      desc: "Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.",
      isVdo: true,
    },
    ScrollFramesData:{
      title:'OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY',
      desc: "Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.",
      path:{
        mobilePath:`${CONFIG.VIDEO_URL}living-room/desktop/`,
        desktopPath:`${CONFIG.VIDEO_URL}living-room/desktop/`,
      },
      frameCounts:{
        mobileFrameCounts:133,
        desktopFrameCounts:133,
      },
    },
    // living_room:{
    //   second_title:'OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY',
    //   desc:'Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.',
    //   path:{
    //     mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/livingRoom/desktop.json`,
    //     desktop:`${CONFIG.JSON_URL}aeroone-gurgaon1/livingRoom/desktop.json`,
    //   }
  
    // },
    video3: {
      title: "LIVE. LAUGH. LOUNGE",
      desc: "Elegant chandeliers, marble floors, and floor-to-ceiling windows create a lavish ambience, perfect for hosting unforgettable soirees and extravagant gatherings.",
      isVdo: true,
    },
    party_video:{
      second_title:'LIVE. LAUGH. LOUNGE',
      desc:'Elegant chandeliers, marble floors, and floor-to-ceiling windows create a lavish ambience, perfect for hosting unforgettable soirees and extravagant gatherings.',
      path:{
        mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/PartyVideo/Mobile/data.json`,
        desktop:`${CONFIG.JSON_URL}aeroone-gurgaon1/PartyVideo/Desktop/data.json`,
      }
    },
    highlights: [
      "Power backup for common facilities.",
      "Italian/Imported Marble flooring.",
      "Television points in living room and bedrooms.",
      "Telephone points in living room and master bedroom.",
      "Split AC provision in living room and bedrooms.",
      "Premium emulsion paint finish.",
    ],
    // LargeElevationSection: {
    //   title: "an epitome of contemporary elegance",
    //   isAllow: true,
    // },
    // renders: [
    //   {
    //     src: CONFIG.IMAGE_URL + 'renders/1_desktop.webp',
    //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/1_mobile.webp',
    //   },
    //   {
    //     src: CONFIG.IMAGE_URL + 'renders/2_desktop.webp',
    //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/2_mobile.webp',
    //   },
    //   {
    //     src: CONFIG.IMAGE_URL + 'renders/3_desktop.webp',
    //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/3_mobile.webp',
    //   },
    //   {
    //     src: CONFIG.IMAGE_URL + 'renders/4_desktop.webp',
    //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/4_mobile.webp',
    //   },
    //   {
    //     src: CONFIG.IMAGE_URL + 'renders/5_desktop.webp',
    //     mobile_thumb: CONFIG.IMAGE_URL + 'renders/5_mobile.webp',
    //   }
    // ],
    renders: [
      {
        title: 'Apartment',
        data:[
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/1.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/1_sm.webp`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/2.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/2_sm.webp`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/3_sm.webp`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/4_sm.webp`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/5_sm.webp`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/6_sm.webp`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/7_sm.webp`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/8_sm.webp`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
            md: `${CONFIG.IMAGE_URL}renders/apartment/9_sm.webp`,
          }
        ],
      },
      {
        title: 'Elevation',
        data:[
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/elevation/1Lg.jpg`,
            md: `${CONFIG.IMAGE_URL}renders/elevation/1.jpg`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/elevation/2Lg.jpg`,
            md: `${CONFIG.IMAGE_URL}renders/elevation/2.jpg`,
          },
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/elevation/3Lg.jpg`,
            md: `${CONFIG.IMAGE_URL}renders/elevation/3.jpg`,
          }
        ],
      },  
      {
        title: 'Landscape',
        data:[
          {
            content:{},
            lg: `${CONFIG.IMAGE_URL}renders/landscape/1Lg.jpg`,
            md: `${CONFIG.IMAGE_URL}renders/landscape/1.jpg`,
          },
        ],
        
      },  
    ],
    amenities_section: [
      {
        title: 'Spa',
        data:{
          content:{},
          images: [
            {
              lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/spa.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/spaSm.webp',
            }
          ]
        }
        
      },
      {
        title: 'Library',
        data:{
          content:{},
          images: [
            {
              lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/library.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/librarySm.webp',
            }
          ]
        }
      },
      {
        title: 'Gym Area',
        data:{
          content:{},
          images: [
            {
              lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/gym.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/gymSm.webp',
            }
          ]
        }
      },
      {
        title: 'Mini Theatre',
        data:{
          content:{},
          images: [
            {
              lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/theater.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/theaterSm.webp',
            }
          ]
        }
      },    
      {
        title: 'Business Centre',
        data:{
          content:{},
          images: [
            {
              lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
            },
            {
              lg: CONFIG.IMAGE_URL + 'amenities/business.webp',
              mb: CONFIG.IMAGE_URL + 'amenities/businessSm.webp',
            }
          ]
        }
      },   
    ],
    noPollutionZone:{
      title:'Connections with MVN Mall',
      data:[
        { 
          name: '0 km from all the urban needs 0km from your office',
          path:{
            desktop:`${CONFIG.IMAGE_URL}no-pollution/desktop/office.webp`,
            mobile:`${CONFIG.IMAGE_URL}no-pollution/office.webp`,
          },
          desc:'Now you don’t have to even walk to work. Take a ride on your exclusive elevator to work' 
        },  
        {
          name: '0 km from luxury Shopping',
          path:{
            desktop:`${CONFIG.IMAGE_URL}no-pollution/desktop/shopping.webp`,
            mobile:`${CONFIG.IMAGE_URL}no-pollution/shopping.webp`,
          },
          desc:'When it comes to best of entertainment, you won’t have to look far. Just step into your exclusive elevator and enter a whole world of global entertainment in the MVN mall.'
        },
        {
          name: '0 km from Global Entertainment',
          path:{
            desktop:`${CONFIG.IMAGE_URL}no-pollution/desktop/entertainment.webp`,
            mobile:`${CONFIG.IMAGE_URL}no-pollution/entertainment.webp`,
          },
          desc:'When it comes to best of entertainment, you won’t have to look far. Just step into your exclusive elevator and enter a whole world of global entertainment in the MVN mall.n'
        },
        {
          name: '0 km from the Sports Club & Lounge',
          path:{
            desktop:`${CONFIG.IMAGE_URL}no-pollution/desktop/sports.webp`,
            mobile:`${CONFIG.IMAGE_URL}no-pollution/sports.webp`,
          },
          desc:'Make sports a regular part of your life. Participate in sports events and also follow your passion to play your favourite sports, at the exclusive Sports Lounge and Sports Club.'
        },
        {
          name: `0 km cinema`,
          path:{
            desktop:`${CONFIG.IMAGE_URL}no-pollution/desktop/cinema.webp`,
            mobile:`${CONFIG.IMAGE_URL}no-pollution/cinema.webp`,
          },
          desc:'Have a blockbuster of a time, without ever missing a show due to traffic. Catch up with all the superhits at the theatres below in the MVN mall.'
        },
      ],
       
    },
    highlight:{
      isshow: true,
      title: "Highlight",
      point:[
        'Power backup for common facilities.',
      'Italian/Imported Marble flooring.',
      'Television points in living and bedrooms.',
      'Telephone points in living and master bedroom.',
      'Split AC provision in living and bedrooms.',
      'Premium emulsion paint finish.',
      ]
    },
    // locationAdvantage: {
    //   isshow: true,
    //   title: "Location Advantages",
    //   mapIMG: {
    //     desktop:CONFIG.IMAGE_URL + 'gurgaon-micro/location_map.webp',
    //     mobile:CONFIG.IMAGE_URL + 'gurgaon-micro/location-map_sm.webp'
    //   },
    //   locationData: [
    //     {
    //       distance: '0 km',
    //       title: 'MVN Mall',
    //     },
    //     {
    //       distance: '2.9 kms',
    //       title: 'World global city',
    //     },
    //     {
    //       distance: '10.5 kms',
    //       title: 'Cyber City 2',
    //     },
    //     {
    //       distance: '10.5 kms',
    //       title: 'Gurgaon Railway station',
    //     },
    //     {
    //       distance: '18 kms',
    //       title: 'Yasho Bhoomi',
    //     },
    //     {
    //       distance: '20 kms',
    //       title: 'Diplomatic enclave 2',
    //     },
    //     {
    //       distance: '29.7 kms',
    //       title: 'IGI Airport',
    //     },
    //   ]
    // },
    floorPlan:{
      title:'Floor Plan',
      floorPlanData : [
        {
          title:'Penthouse',
          thumbnail:[
            {
              src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/1.webp',
              mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/1.webp',
            },
            {
              src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/2.webp',
              mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/penthouse/2.webp',
            }
          ]
        },
        {
          title:'360 Panoramic Apartment (12600 sq.ft.)',
          thumbnail:[
            {
              src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/360/1.webp',
              mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/360/1.webp',
            }
          ]
        },
        {
          title:'270 Panoramic Apartment (6300 sq.ft.)',
          thumbnail:[
            {
              src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/1.webp',
              mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/1.webp',
            },
            {
              src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/2.webp',
              mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/2.webp',
            },
            {
              src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/3.webp',
              mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/270/3.webp',
            }
          ]
        },
      ]
    }
};



const AeroOneBangalore = () => {
  window.scrollTo(0,0)
  return (
    <MicroPageBangalore data={bangaloreData}  projectName={'MVN-AeroOne-Bangalore'}/>
  )
};

export default AeroOneBangalore;
