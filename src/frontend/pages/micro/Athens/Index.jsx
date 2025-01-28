import React from "react";
import * as CONFIG from '../../../../config/config';
import bgImgMB from '../../../assets/images/aero-gurgaon/largeBg1Sm.webp'
import bgImgDesk from '../../../assets/images/aero-gurgaon/largeBg1.png'
import absDesk from '../../../assets/images/aero-gurgaon/building_sm.webp'
import building_sm from '../../../assets/images/aero-gurgaon/building_sm.webp'
import MicroPageFaridabad from "../../MicroPageFaridabad";

export const faridabadData = {
  header:{
    athens_header:'Athens_nav',
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
  banner:{
    desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}banner/banner.webp`,
    mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}banner/bannerSm.webp`,
  },
  overview: {
    title: "MVN Athens",
    extra: "Where Imagination Shapes Timeless Harmony",
    desc: "Discover a world where modern architecture interwines with the essence of affordable living. At MVN Athens, we don't just build homes; we craft masterpieces that resonate with creativity and sophistication.",
  },
  gallery:{
    title:'Gallery',
    desc:'Step into a visual journey where every snapshot captures the seamless blend of elegance and innovation.',
    images:[
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/1.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/1sm.webp`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/2.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/2sm.webp`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/3.webp`,
        mobile: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}gallery/3sm.webp`,
      },
    ],
  },
  amenities : {
    title:'Amenities',
    desc: "Immerse yourself in a world of thoughtfully created amenities designed to elevate your lifestyle with comfort, convenience, and indulgence.",
    data:[
      { 
        name: "Kids' Play Area",
        path:{
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/kids.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/kidsSm.jpg`,
        },
        desc:'World of wonder, where little dreams take flight.' 
      },  
      {
        name: 'Gym',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/gym.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/gymSm.jpg`,
        },
        desc:'Where strength meets style for your fitness sanctuary.'
      },
      {
        name: 'Swimming Pool',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/pool.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/poolSm.jpg`,
        },
        desc:'Dive into luxury, where every splash refreshes your soul. '
      },
      {
        name: `24/7 Security`,
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/security.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/securitySm.jpg`,
        },
        desc:'Your safety, our promise, always around the clock.'
      },
      {
        name: 'Sports Area',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/sport.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/sportSm.jpg`,
        },
        desc:'Where champions are made, and fun finds its field.'
      },
      {
        name: 'Landscaped Garden',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/garden.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/gardenSm.jpg`,
        },
        desc:'Nature’s embrace, right outside your door.'
      },
      {
        name: 'Lift',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/lift.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/liftSm.jpg`,
        },
        desc:'Effortless elevation, because every step matters.'
      },
      {
        name: 'Power Backup',
        path: {
          desktop:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/power.jpg`,
          mobile:`${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}amenities/powerSm.jpg`,
        },
        desc:'Uninterrupted living, powered for your peace of mind.'
      },
    ],
     
  },
  typologies: {
    title:'Typologies',
    desc:"Explore meticulously designed living spaces that redefine modern architecture, offering a perfect balance of style and functionality.",
    tabs_name:['TOWER C','TOWER D'],
    tabs:{     
      tower_c: [
      {
        title: "Lower Level Plan",
        area: "3419 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerc/1.png`
      },
      {
        title: "Upper Level Plan",
        area: "3419 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerc/2.png`
      },
      {
        title: "Upper Level Plan",
        area: "3375 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerc/3.png`
      },
    ], 
    tower_d: [
    {
      title: "Lower Level Plan",
      area: "3419 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerd/1.png`
    },
    {
      title: "Upper Level Plan",
      area: "3419 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerd/2.png`
    },
    {
      title: "Upper Level Plan",
      area: "3375 sq.ft.",
      link: "#",
      src: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}floor-plan/towerd/3.png`
    },
  ],
  }
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    desc:"Strategically nestled in Faridabad, MVN Athens ensures connectivity while surrounding you with urban conveniences and serene charm.",
    mapIMG: {
      desktop: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}location-map.jpg`,
      mobile: `${CONFIG.IMAGE_URL_ATHENS_FARIDABAD}location-mapm.jpg`,
    },
    locationSlider: true,
    chunks:1,
    sliderItems : [
      { title: "NH-2 (Agra Delhi)", desc: "1.8 KM" },
      { title: "metro station", desc: "2 KM" },
      { title: "Near Sector 12 Commercial Hub", desc: "10 Mins" },
      { title: "Town Park", desc: "04 KM" },
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



const AthensFaridabad = () => {
  window.scrollTo(0,0)
  return (
    <MicroPageFaridabad data={faridabadData}  projectName={'mvn-athens-faridabad'}/>
  )
};

export default AthensFaridabad;
