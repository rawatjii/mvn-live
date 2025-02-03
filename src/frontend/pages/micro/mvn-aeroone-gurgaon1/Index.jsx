import React from "react";
import * as CONFIG from '../../../../config/config';
import bgImgMB from '../../../assets/images/aero-gurgaon/largeBg1Sm.webp'
import bgImgDesk from '../../../assets/images/aero-gurgaon/largeBg1.png'
import absDesk from '../../../assets/images/aero-gurgaon/building_sm.webp'
import building_sm from '../../../assets/images/aero-gurgaon/building_sm.webp';
import peacockDesktopImg from '../../../assets/images/aero-gurgaon/Peacock/peacock.webp';
import yogaDeck from '../../../assets/images/aero-gurgaon/renders/landscape/yoga_deck.webp';
import yogaDeckSm from '../../../assets/images/aero-gurgaon/renders/landscape/yoga_deck_sm.webp';
import swimmingPool from '../../../assets/images/aero-gurgaon/renders/landscape/swimming_pool.webp';
import swimmingPoolSm from '../../../assets/images/aero-gurgaon/renders/landscape/swimming_pool_sm.webp';
import pargola from '../../../assets/images/aero-gurgaon/renders/landscape/pargola.webp';
import pargolaSm from '../../../assets/images/aero-gurgaon/renders/landscape/pargola_sm.webp';
import tennis from '../../../assets/images/aero-gurgaon/renders/landscape/tennis.webp';
import tennisSm from '../../../assets/images/aero-gurgaon/renders/landscape/tennis_sm.webp';
import landscape from '../../../assets/images/aero-gurgaon/renders/landscape/landscape.webp';
import landscapeSm from '../../../assets/images/aero-gurgaon/renders/landscape/landscape_sm.webp';

// elevation images
import elevationImg1 from '../../../assets/images/aero-gurgaon/renders/elevation/1.webp';
import elevationImgSm1 from '../../../assets/images/aero-gurgaon/renders/elevation/1_sm.webp';
import elevationImg2 from '../../../assets/images/aero-gurgaon/renders/elevation/2.webp';
import elevationImgSm2 from '../../../assets/images/aero-gurgaon/renders/elevation/2_sm.webp';
import elevationImg3 from '../../../assets/images/aero-gurgaon/renders/elevation/3.webp';
import elevationImgSm3 from '../../../assets/images/aero-gurgaon/renders/elevation/3_sm.webp';

// apartment images
import apartmentImg5 from '../../../assets/images/aero-gurgaon/renders/apartment/5.webp';
import apartmentImgSm5 from '../../../assets/images/aero-gurgaon/renders/apartment/5_sm.webp';
import apartmentImg7 from '../../../assets/images/aero-gurgaon/renders/apartment/7.webp';
import apartmentImgSm7 from '../../../assets/images/aero-gurgaon/renders/apartment/7_sm.webp';
import apartmentImg8 from '../../../assets/images/aero-gurgaon/renders/apartment/8.webp';
import apartmentImgSm8 from '../../../assets/images/aero-gurgaon/renders/apartment/8_sm.webp';
import apartmentImg6 from '../../../assets/images/aero-gurgaon/renders/apartment/6.webp';
import apartmentImgSm6 from '../../../assets/images/aero-gurgaon/renders/apartment/6_sm.webp';
import apartmentImg9 from '../../../assets/images/aero-gurgaon/renders/apartment/9.webp';
import apartmentImgSm9 from '../../../assets/images/aero-gurgaon/renders/apartment/9_sm.webp';
import apartmentImg2 from '../../../assets/images/aero-gurgaon/renders/apartment/2.webp';
import apartmentImgSm2 from '../../../assets/images/aero-gurgaon/renders/apartment/2_sm.webp';
import apartmentImg1 from '../../../assets/images/aero-gurgaon/renders/apartment/1.webp';
import apartmentImgSm1 from '../../../assets/images/aero-gurgaon/renders/apartment/1_sm.webp';
import apartmentImg3 from '../../../assets/images/aero-gurgaon/renders/apartment/3.webp';
import apartmentImgSm3 from '../../../assets/images/aero-gurgaon/renders/apartment/3_sm.webp';
import apartmentImg4 from '../../../assets/images/aero-gurgaon/renders/apartment/4.webp';
import apartmentImgSm4 from '../../../assets/images/aero-gurgaon/renders/apartment/4_sm.webp';

// amenities
import clubhouse from '../../../assets/images/aero-gurgaon/amenities/clubhouse.webp';
import clubhouseSm from '../../../assets/images/aero-gurgaon/amenities/clubhouseSm.webp';
import business from '../../../assets/images/aero-gurgaon/amenities/business.webp';
import businessSm from '../../../assets/images/aero-gurgaon/amenities/businessSm.webp';
import library from '../../../assets/images/aero-gurgaon/amenities/library.webp';
import librarySm from '../../../assets/images/aero-gurgaon/amenities/librarySm.webp';
import lounge from '../../../assets/images/aero-gurgaon/amenities/lounge.webp';
import loungeSm from '../../../assets/images/aero-gurgaon/amenities/loungeSm.webp';
import kids from '../../../assets/images/aero-gurgaon/amenities/kids.webp';
import kidsSm from '../../../assets/images/aero-gurgaon/amenities/kidsSm.webp';
import gym from '../../../assets/images/aero-gurgaon/amenities/gym.webp';
import gymSm from '../../../assets/images/aero-gurgaon/amenities/gymSm.webp';
import spa from '../../../assets/images/aero-gurgaon/amenities/spa.webp';
import spaSm from '../../../assets/images/aero-gurgaon/amenities/spaSm.webp';
import theater from '../../../assets/images/aero-gurgaon/amenities/theater.webp';
import theaterSm from '../../../assets/images/aero-gurgaon/amenities/theaterSm.webp';
import centralGreen from '../../../assets/images/aero-gurgaon/amenities/central-green.webp';
import centralGreenSm from '../../../assets/images/aero-gurgaon/amenities/central-green_sm.webp';
import entryexit from '../../../assets/images/aero-gurgaon/amenities/entryexit.webp';
import entryexitSm from '../../../assets/images/aero-gurgaon/amenities/entryexit_sm.webp';

// no pollution
import office from '../../../assets/images/aero-gurgaon/no-pollution/desktop/office.webp';
import officeSm from '../../../assets/images/aero-gurgaon/no-pollution/office.webp';
import shopping from '../../../assets/images/aero-gurgaon/no-pollution/desktop/shopping.webp';
import shoppingSm from '../../../assets/images/aero-gurgaon/no-pollution/shopping.webp';
import entertainment from '../../../assets/images/aero-gurgaon/no-pollution/desktop/entertainment.webp';
import entertainmentSm from '../../../assets/images/aero-gurgaon/no-pollution/entertainment.webp';
import sports from '../../../assets/images/aero-gurgaon/no-pollution/desktop/sports.webp';
import sportsSm from '../../../assets/images/aero-gurgaon/no-pollution/sports.webp';
import cinema from '../../../assets/images/aero-gurgaon/no-pollution/desktop/cinema.webp';
import cinemaSm from '../../../assets/images/aero-gurgaon/no-pollution/cinema.webp';

// location
import locationMap from '../../../assets/images/aero-gurgaon/location/location_map.webp';
import locationMapSm from '../../../assets/images/aero-gurgaon/location/location-map_sm.webp';


// floor plan
import penthouse from '../../../assets/images/aero-gurgaon/floorPlan/penthouse/1.webp';
import floor360 from '../../../assets/images/aero-gurgaon/floorPlan/360/1.webp';
import floor270 from '../../../assets/images/aero-gurgaon/floorPlan/270/1.webp';

import "./aeroGuragaon.css";
import MicroPageGurgaon1 from "../../MicroPageGurgaon1";

export const data = {
  header:{
    sidebarAsset:{
      desktop:`${CONFIG.IMAGE_URL}header/sidebar.webp`,
      mobile:`${CONFIG.IMAGE_URL}header/sidebar.webp`,
    },
    title:'MVN AeroOne, Gurugram',
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
        link:'LIVINGROOM'
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
        section_title:'Construction Technology',
        link:'constructionTechnology'
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
        section_title:'Floor Plans',
        link:'MicroFloorPlan'
      },
      {
        section_title:'Location Map',
        link:'MicroLocationMap'
      },
      {
        section_title:'MVN Mall',
        link:'MVNMALL'
      },
      {
        section_title:'Connections MVN Mall',
        link:'NoPolutionZone'
      },
    ],
  },
  overview: {
    title: "MVN AEROONE LUXURY RESIDENCES",
    extra: "AN EPITOME OF GLOBAL LUXURY NOW IN GURUGRAM",
    desc: "Gurugram is set to redefine luxury living with the launch  of MVN ultra-luxurious 5.5 BHK apartments, offering unmatched opulence. Combining the grandeur of Dubai and New York, these residences feature cutting-edge designs, premium amenities, and breathtaking views. Experience an elite lifestyle with sophistication and comfort at its pinnacle, like never before!",

  },
  LargeElevationSection: {
    title: ['Unseen', 'Unheard', 'Unimagined'],
    isAllow: true,
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
    second_title:'ΑΝ ΕΡΙΤOME OF CONTEMPORARY ELEGANCE',
    desc:'This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a  residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits.',
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
      mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/Peacock/data.json`,
      desktop:peacockDesktopImg,
    }
},
  living_room:{
    Custom_height:"Custom_height",
    second_title:'OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY',
    desc:'Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.',
    path:{
      mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/livingRoom/data.json`,
      desktop:`${CONFIG.JSON_URL}aeroone-gurgaon1/livingRoom/data.json`,
    }
  },
  party_video:{
    second_title:'LIVE. LAUGH. LOUNGE',
    desc:'Elegant chandeliers, marble floors, and floor-to-ceiling windows create a lavish ambiance, perfect for hosting unforgettable soirees and extravagant gatherings.',
    path:{
      mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/Party/Mobile/data.json`,
      desktop:`${CONFIG.JSON_URL}aeroone-gurgaon1/Party/Desktop/data.json`,
    }
  },
  masterBedroom: {
    second_title: "BEDROOM Platinum",
    desc: "Your own sphere of serenity crafted artfully for the ultimate retreat into blissful moments of privacy.",
    path:{
      mobile:CONFIG.IMAGE_URL + 'Panther/Mobile/data.json',
      desktop:CONFIG.IMAGE_URL + 'Panther/Desktop/data.json'
    }
  },
  landscape:{
    title:'Landscape',
    secondTitle:'REDEFINING ECO-LUXURY WITH ELEVATED LANDSCAPING',
    desc:'Expansive lush green gardens landscaped for beauty and sustainability. Revel in this oasis of freshness and serenity exclusively for the residents.',
    images:[
          {
            desktop: yogaDeck,
            mobile: yogaDeckSm,
            watermark: "right",
            title: "Yoga Deck",
          },
          {
            desktop: swimmingPool,
            mobile: swimmingPoolSm,
            watermark: "right",
            title: "Swimming Pool",
          },
          {
            desktop: pargola,
            mobile: pargolaSm,
            watermark: "right",
            title: "Pergola View",
          },
          {
            desktop: tennis,
            mobile: tennisSm,
            watermark: 'right',
            title:'Lawn Tennis View',
          },
          {
            desktop: landscape,
            mobile: landscapeSm,
            watermark: 'right',
            title:'Landscape View',
          }
        ],
  },
  microElevation:{
    title:'Elevation',
    secondTitle:'Pinnacle of Sophisticated Luxury',
    desc:'This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits.',
    images:[
      {
        desktop:elevationImg1,
        mobile:elevationImgSm1,
        watermark: 'right'
      },
      {
        desktop:elevationImg2,
        mobile:elevationImgSm2,
        watermark: 'right'
      },
      {
        desktop:elevationImg3,
        mobile:elevationImgSm3,
        watermark: 'right'
      }
    ],
  },
  microApartment:{
    title:'Apartment',
    secondTitle:'Every corner a symphony of style & opulence',
    desc:`Experience ultra-luxury living in this exclusive apartment boasting plush interiors and bespoke design. The spacious layout includes a designer bathroom with premium fittings, a modern Cucina kitchen for culinary excellence, and a state-of-the-art home theatre for entertainment. A thoughtfully designed kids' room ensures comfort and fun, completing a perfect sanctuary for a sophisticated, family-friendly lifestyle.`,
    images:[
          {
            desktop:apartmentImg5,
            mobile:apartmentImgSm5,
            watermark:'right',
            title:'Panoramic Living Room',
          },
          {
            desktop:apartmentImg7,
            mobile:apartmentImgSm7,
            watermark:'right',
            title:'Living Room',
          },
          {
            desktop:apartmentImg8,
            mobile:apartmentImgSm8,
            watermark:'right',
            title:'Cucina Kitchen',
          },  
          {
            desktop:apartmentImg6,
            mobile:apartmentImgSm6,
            watermark:'right',
            title:'Master Bedroom – Platinum',
          },  
          {
            desktop:apartmentImg9,
            mobile:apartmentImgSm9,
            watermark:'right',
            title:'Master Bedroom – Platinum',
          },
          {
            desktop:apartmentImg2,
            mobile:apartmentImgSm2,
            watermark:'right',
            title:'Bathroom',
          },
          {
            desktop:apartmentImg1,
            mobile:apartmentImgSm1,
            watermark:'right',
            title:'Master Bedroom – Royale',
          },
          {
            desktop:apartmentImg3,
            mobile:apartmentImgSm3,
            watermark:'right',
            title:'Study Room',
          },
          {
            desktop:apartmentImg4,
            mobile:apartmentImgSm4,
            watermark:'right',
            title:'Kids\' Room',
          },
        ],
    imageClassName:'apartment-section-img',
  },
  highlights: [
    "Power backup for common facilities.",
    "Italian/Imported Marble flooring.",
    "Television points in living room and bedrooms.",
    "Telephone points in living room and master bedroom.",
    "Split AC provision in living room and bedrooms.",
    "Premium emulsion paint finish.",
  ],
  walkthrough: {
    src: "https://www.youtube.com/embed/9CHcJAveejU?si=Sr3K9ETfhxeyjrOW",
    // title: "Virtual Tour",
    // title: "Walkthrough",
    second_title:'A GLIMPSE INTO A LIFE EXTRAORDINARY',
    desc: "Take a guided virtual tour through our stunning spaces with a walkthrough video that brings your future home to life. Every detail is showcased, allowing you to experience the design, luxury, and lifestyle that await you.",
  },
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
            lg: apartmentImg1,
            md: apartmentImgSm1,
          },
          {
            content:{},
            lg: apartmentImg2,
            md: apartmentImgSm2,
          },
          {
            content:{},
            lg: apartmentImg3,
            md: apartmentImgSm3,
          },
          {
            content:{},
            lg: apartmentImg4,
            md: apartmentImgSm4,
          },
          {
            content:{},
            lg: apartmentImg5,
            md: apartmentImgSm5,
          },
          {
            content:{},
            lg: apartmentImg6,
            md: apartmentImgSm6,
          },
          {
            content:{},
            lg: apartmentImg7,
            md: apartmentImgSm7,
          },
          {
            content:{},
            lg: apartmentImg8,
            md: apartmentImgSm8,
          },
          {
            content:{},
            lg: apartmentImg9,
            md: apartmentImgSm9,
          }
        ],
      },
      {
        title: 'Elevation',
        data:[
          {
            content:{},
            lg: elevationImg1,
            md: elevationImgSm1,
          },
          {
            content:{},
            lg: elevationImg2,
            md: elevationImgSm2,
          },
          {
            content:{},
            lg: elevationImg3,
            md: elevationImgSm3,
          }
        ],
      },  
      {
        title: 'Landscape',
        data:[
          {
            content:{},
            lg: landscape,
            md: landscapeSm,
          },
        ],
        
      },  
    ],
 amenities : {
     title:'Amenities',
     data:[
       { 
         name: 'Elevate Your Family Time At The Exclusive Clubhouse',
         path:{
           desktop:clubhouse,
           mobile:clubhouseSm,
         },
         desc:'The ultra-luxury clubhouse offers residents an opulent retreat, featuring state-of-the-art amenities, a lavish spa, infinity pools, gourmet dining, private lounges, and exquisite interiors for unparalleled leisure and comfort for the whole family.' 
       },  
       {
         name: 'Business Centre',
         path: {
           desktop:business,
           mobile:businessSm,
         },
         desc:'A sophisticated workspace designed for productivity and collaboration'
       },
       {
         name: 'Library',
         path: {
           desktop:library,
           mobile:librarySm,
         },
         desc:'A tranquil haven for literary exploration and quiet contemplation'
       },
       {
         name: 'Sports Lounge',
         path: {
           desktop:lounge,
           mobile:loungeSm,
         },
         desc:'An upscale space to unwind and enjoy sports events'
       },
       {
         name: `Kids' Play Area`,
         path: {
           desktop:kids,
           mobile:kidsSm,
         },
         desc:'A safe and imaginative space for children to explore'
       },
       {
         name: 'Fitness Centre',
         path: {
           desktop:gym,
           mobile:gymSm,
         },
         desc:'State-of-the-art fitness facilities for ultimate wellness'
       },
       {
         name: 'Spa',
         path: {
           desktop:spa,
           mobile:spaSm,
         },
         desc:'A luxurious retreat offering rejuvenation and tranquility'
       },
       {
         name: `Mini Theatre`,
         path: {
           desktop:theater,
           mobile:theaterSm,
         },
         desc:'Intimate screenings for cinematic experiences with friends'
       },
       {
         name: `Central Green`,
         path: {
           desktop:centralGreen,
           mobile:centralGreenSm,
         },
         desc:['An oasis of clean air and pure living. ','Advanced air purification systems create pollution-free zones, ensuring residents breathe clean, fresh air, promoting healthier living and well-being.']
       },
       {
         name: 'Exclusive entrance and exit for the residents',
         path: {
           desktop:entryexit,
           mobile:entryexitSm,
         },
         desc:'Experience unparalleled privacy and convenience with exclusive entry and exit points designed for residents of MVN, ensuring seamless access and an elite living experience.'
       },
     ],
      
   },
  noPollutionZone:{
      title:'Connections with MVN Mall',
      data:[
        { 
          name: '0 km from all the urban needs 0km from your office',
          path:{
            desktop:office,
            mobile:officeSm,
          },
          desc:'Now you don’t have to even walk to work. Take a ride on your exclusive elevator to work' 
        },  
        {
          name: '0 km from luxury Shopping',
          path:{
            desktop:shopping,
            mobile:shoppingSm,
          },
          desc:'When it comes to best of entertainment, you won’t have to look far. Just step into your exclusive elevator and enter a whole world of global entertainment in the MVN mall.'
        },
        {
          name: '0 km from Global Entertainment',
          path:{
            desktop:entertainment,
            mobile:entertainmentSm,
          },
          desc:'When it comes to best of entertainment, you won’t have to look far. Just step into your exclusive elevator and enter a whole world of global entertainment in the MVN mall.n'
        },
        {
          name: '0 km from the Sports Club & Lounge',
          path:{
            desktop:sports,
            mobile:sportsSm,
          },
          desc:'Make sports a regular part of your life. Participate in sports events and also follow your passion to play your favourite sports, at the exclusive Sports Lounge and Sports Club.'
        },
        {
          name: `0 km cinema`,
          path:{
            desktop:cinema,
            mobile:cinemaSm,
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
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    mapIMG: {
      desktop:locationMap,
      mobile:locationMapSm
    },
    //     yasho bhoomi
    // indira gandhi international airport
    // diplomatic enclave
    // palam vihar 
    // gurgaon railway station
    // dlf cyber city 
    // world global city
    locationData: [
      {
        distance: '0 km',
        title: 'MVN Mall',
      },
      {
        distance: '2.9 kms',
        title: 'World global city',
      },
      {
        distance: '10.5 kms',
        title: 'Cyber City 2',
      },
      {
        distance: '10.5 kms',
        title: 'Gurgaon Railway station',
      },
      {
        distance: '18 kms',
        title: 'Yasho Bhoomi',
      },
      {
        distance: '20 kms',
        title: 'Diplomatic enclave 2',
      },
      {
        distance: '29.7 kms',
        title: 'IGI Airport',
      },
    ]
  },
  floorPlan:{
      title:'Floor Plan',
      floorPlanData : [
        {
          title:'Penthouse',
          thumbnail:[
            {
              src:penthouse,
              mobile:penthouse,
            },
          ]
        },
        {
          title:'360 Panoramic Apartment (12600 sq.ft.)',
          thumbnail:[
            {
              src:floor360,
              mobile:floor360,
            }
          ]
        },
        {
          title:'270 Panoramic Apartment (6300 sq.ft.)',
          thumbnail:[
            {
              src:floor270,
              mobile:floor270,
            },
          ]
        },
      ]
    }
};

const AeroOneGurgaon = () => {
  return <MicroPageGurgaon1 data={data} />;
};

export default AeroOneGurgaon;
