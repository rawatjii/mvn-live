import React from "react";
import * as CONFIG from '../../../../config/config';
import bgImgMB from '../../../assets/images/aero-gurgaon/largeBg1Sm.webp'
import bgImgDesk from '../../../assets/images/aero-gurgaon/largeBg1.png'
import absDesk from '../../../assets/images/aero-gurgaon/building_sm.webp'
import building_sm from '../../../assets/images/aero-gurgaon/building_sm.webp'

import "./aeroGuragaon.css";
import MicroPageGurgaon1 from "../../MicroPageGurgaon1";

export const data = {
  header:{
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
  living_room:{
    second_title:'OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY',
    desc:'Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.',
    path:{
      mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/livingRoom/desktop.json`,
      desktop:`${CONFIG.JSON_URL}aeroone-gurgaon1/livingRoom/desktop.json`,
    }

  },
  video3: {
    title: "LIVE. LAUGH. LOUNGE",
    desc: "Elegant chandeliers, marble floors, and floor-to-ceiling windows create a lavish ambiance, perfect for hosting unforgettable soirees and extravagant gatherings.",
    isVdo: true,
  },
  party_video:{
    second_title:'LIVE. LAUGH. LOUNGE',
    desc:'Elegant chandeliers, marble floors, and floor-to-ceiling windows create a lavish ambiance, perfect for hosting unforgettable soirees and extravagant gatherings.',
    path:{
      mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/PartyVideo/Mobile/data.json`,
      desktop:`${CONFIG.JSON_URL}aeroone-gurgaon1/PartyVideo/Desktop/data.json`,
    }
  },
  masterBedroom: {
    title: "BEDROOM Platinum",
    desc: "Your own sphere of serenity crafted artfully for the ultimate retreat into blissful moments of privacy.",
    path:{
      mobile:`${CONFIG.JSON_URL}aeroone-gurgaon1/Panther/Mobile/data.json`,
      desktop:`${CONFIG.JSON_URL}aeroone-gurgaon1/Panther/Desktop/data.json`,
    }
  },
  landscape:{
    title:'Landscape',
    secondTitle:'REDEFINING ECO-LUXURY WITH ELEVATED LANDSCAPING',
    desc:'Expansive lush green gardens landscaped for beauty and sustainability. Revel in this oasis of freshness and serenity exclusively for the residents.',
    images:[
      {
        desktop: CONFIG.IMAGE_URL + "renders/landscape/1.webp",
        mobile: CONFIG.IMAGE_URL + "renders/landscape/1_sm.webp",
        watermark: "right",
        title: "Yoga Deck",
      },
      {
        desktop: CONFIG.IMAGE_URL + "renders/landscape/2.webp",
        mobile: CONFIG.IMAGE_URL + "renders/landscape/2_sm.webp",
        watermark: "right",
        title: "Swimming Pool",
      },
      {
        desktop: CONFIG.IMAGE_URL + "renders/landscape/3.webp",
        mobile: CONFIG.IMAGE_URL + "renders/landscape/3_sm.webp",
        watermark: "right",
        title: "Pergola View",
      },
    ],
  },
  microElevation:{
    title:'Elevation',
    secondTitle:'Pinnacle of Sophisticated Luxury',
    desc:'This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits.',
    images:[
      {
        desktop:CONFIG.IMAGE_URL + 'renders/elevation/1.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/elevation/1_sm.webp',
        watermark: 'right'
      },
      {
        desktop:CONFIG.IMAGE_URL + 'renders/elevation/2.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/elevation/2_sm.webp',
        watermark: 'right'
      },
      {
        desktop:CONFIG.IMAGE_URL + 'renders/elevation/3.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/elevation/3_sm.webp',
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
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/5.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/5_sm.webp',
        watermark:'right',
        title:'Panoromic Living Room',
      },
      {
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/7.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/7_sm.webp',
        watermark:'right',
        title:'Living Room',
      },
      {
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/8.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/8_sm.webp',
        watermark:'right',
        title:'Cucina Kitchen',
      },  
      {
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/6.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/6_sm.webp',
        watermark:'right',
        title:'Master Bedroom – Platinum',
      },  
      {
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/9.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/9_sm.webp',
        watermark:'right',
        title:'Master Bedroom – Platinum',
      },
      {
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/2.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/2_sm.webp',
        watermark:'right',
        title:'Bathroom',
      },
      {
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/1.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/1_sm.webp',
        watermark:'right',
        title:'Master Bedroom – Royale',
      },
      {
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/3.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/3_sm.webp',
        watermark:'right',
        title:'Study Room',
      },
      {
        desktop:CONFIG.IMAGE_URL + 'renders/apartment/4.webp',
        mobile:CONFIG.IMAGE_URL + 'renders/apartment/4_sm.webp',
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
  amenities : {
    title:'Amenities',
    data:[
      { 
        name: 'Elevate Your Family Time At The Exclusive Clubhouse',
        path:{
          desktop:`${CONFIG.IMAGE_URL}amenities/clubhouse.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/clubhouseSm.webp`,
        },
        desc:'The ultra-luxury clubhouse offers residents an opulent retreat, featuring state-of-the-art amenities, a lavish spa, infinity pools, gourmet dining, private lounges, and exquisite interiors for unparalleled leisure and comfort for the whole family.' 
      },  
      {
        name: 'Business Centre',
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/business.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/businessSm.webp`,
        },
        desc:'A sophisticated workspace designed for productivity and collaboration'
      },
      {
        name: 'Library',
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/library.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/librarySm.webp`,
        },
        desc:'A tranquil haven for literary exploration and quiet contemplation'
      },
      {
        name: 'Sports Lounge',
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/lounge.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/loungeSm.webp`,
        },
        desc:'An upscale space to unwind and enjoy sports events'
      },
      {
        name: `Kids' Play Area`,
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/kids.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/kidsSm.webp`,
        },
        desc:'A safe and imaginative space for children to explore'
      },
      {
        name: 'Fitness Centre',
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/gym.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/gymSm.webp`,
        },
        desc:'State-of-the-art fitness facilities for ultimate wellness'
      },
      {
        name: 'Spa',
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/spa.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/spaSm.webp`,
        },
        desc:'A luxurious retreat offering rejuvenation and tranquility'
      },
      {
        name: `Mini Theatre`,
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/theater.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/theaterSm.webp`,
        },
        desc:'Intimate screenings for cinematic experiences with friends'
      },
      {
        name: `Central Green`,
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/central-green.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/central-green_sm.webp`,
        },
        desc:['An oasis of clean air and pure living. ','Advanced air purification systems create pollution-free zones, ensuring residents breathe clean, fresh air, promoting healthier living and well-being.']
      },
      {
        name: 'Exclusive entrance and exit for the residents',
        path: {
          desktop:`${CONFIG.IMAGE_URL}amenities/entryexit.webp`,
          mobile:`${CONFIG.IMAGE_URL}amenities/entryexit_sm.webp`,
        },
        desc:'Experience unparalleled privacy and convenience with exclusive entry and exit points designed for residents of MVN, ensuring seamless access and an elite living experience.'
      },
    ],
     
  },
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
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    mapIMG: {
      desktop:CONFIG.IMAGE_URL + 'gurgaon-micro/location_map.webp',
      mobile:CONFIG.IMAGE_URL + 'gurgaon-micro/location-map_sm.webp'
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
        title:'360 Panoramic Apartment (12420 sq.ft.)',
        thumbnail:[
          {
            src:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/360/1.webp',
            mobile:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/360/1.webp',
          }
        ]
      },
      {
        title:'270 Panoramic Apartment (6210 sq.ft.)',
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

const AeroOneGurgaon = () => {
  return <MicroPageGurgaon1 data={data} />;
};

export default AeroOneGurgaon;
