import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';
import hero_img_mb from "../../../../frontend/assets/images/micro/athens_gurugram/hero_mobile.webp";
import hero_img_desk from "../../../../frontend/assets/images/micro/athens_gurugram/hero_desk.webp";
import highlightbgIMG from '../../../assets/images/bg/112.jpg'


const data = {
  micro_hero_section: 
  {
    isVdo: false,
    images:[{ imgMb: hero_img_mb, imgDesk: hero_img_desk, }],
    bannerHighLight:false,
    enquiryBTN:{
      isshow: true,
      mail: `info@example.com`
    } 
  },
  bannerHighLight: {
    isshow: false,
  },
  overview: {
    title: "Athens",
    location: "Gurugram",
    extra: "",
    desc:[
      `MVN Infrastructures proudly presents its latest residential project under the Affordable Housing Policy 2013, a visionary government initiative to provide quality homes for middle and lower-middle-class families. Strategically located in Sector 05, Gurugram, this project offers the perfect blend of affordability, modern conveniences, and natural serenity. Situated near Gurugram's industrial hub, it is surrounded by lush greenery and is well-connected to leading educational institutions like GD Goenka University, K.R. Mangalam International University, and several others, making it an ideal location for households to thrive. Licensed by the Government of Haryana and compliant with all quality standards, this project delivers thoughtfully designed, secure, and affordable homes.`
    ]
  },
  video1: {
    title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
    // desc:'Our 13.5ft High Ceilings Will Set A Higher Standard Of Space Utilisation In Harmony With Design Aesthetics & Sophistication.',
    isVdo: false,
  },
  video2: {
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
    isVdo: false,
  },
  living_room_video:{
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Experience the elegance of a sliding door that seamlessly connects your living space to the outdoors, transforming the ambiance with every glide.",
    isVdo: false,
  },
  video3: {
    title: "ELEVATED LIVING",
    desc: "OUR 13.5FT HIGH CEILINGS WILL SET A HIGHER STANDARD OF SPACE UTILISATION IN HARMONY WITH DESIGN AESTHETICS & SOPHISTICATION",
    isVdo: false,
  },
  masterBedroom: {
    title: "MASTER BEDROOM",
    desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
    isVdo: false,
  },
  Slides: {
    isshow: true,
  },
  enquiryBTN:{
    isshow:true,
    mail: "info@example.in",
  },
  menities_section: [
    {
      title: 'Billiards',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Billiards.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/BilliardsSm.webp',
      }
    },
    {
      title: 'Gym',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Gym.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/GymSm.webp',
      }
    },
    {
      title: 'Hot Tub Lake View',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/HotTubLakeView.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/HotTubLakeViewSm.webp',
      }
    },
    {
      title: 'Party lawn',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Partylawn.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/PartylawnSm.webp',
      }
    },
    {
      title: 'Croquet view',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Croquetview.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/CroquetviewSm.webp',
      }
    },
    {
      title: 'Outdoor cinema',
      images: {
        lg: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/Outdoorcinema.webp',
        mb: CONFIG.IMAGE_URL + 'aero-bangalore/amenities/OutdoorcinemaSm.webp',
      }
    },
    
  ],
  highlightbg: {
    isshow: true,
    img: highlightbgIMG
  },
  highlight:{
    isshow: true,
    title: "SALIENT FEATURES",
    desc: [
      ``,
    ],
    point:[
      `40 mins. drive from the IGI Airport`,
`Open Gym, Kids Play Area`,
`Creche, Jogging Track`,
`Daily Needs & other retail Facility within the complex`,
`Most secure site to commute at night, as close to existing posh`,
`Residential Colony`,
`All amenities like hospital, market & sports stadium is within walking distance`,
`KMP expressway just 5 mins`,
`20 mins. drive from the Cyber/IT offices located on Gurugram Road, Gurgaon`,
`Westin resort is just 7 mins`,
`Damdama Lake, Taj Hotel and tourist place is just 5 mins`,
`Very close & clear view of beautiful Aravali Hills`,
`Pollution-free healthy environment`,
`Up to 90% Loan available from the leading banks`,
`Easily Accessible to all major cities of Delhi NCR ie Faridabad, Noida, Gurugram`,
`Badshahpur Flyover - A 2km elevated road for Fast & Hassle-free drive.`,
`Well known Educational Hub.`,
`Delhi-Mumbai Industrial Corridor (DMIC) is passing through the south of Gurugram.`,
`Industrial Model Township (IMT-Gurugram) is off 1700acres approx which is 3 times of IMT Manesar on KMP Expressway`,
`60 meters wide & 8 km long road from Golf Course Extension Road (Gurugram) to Gurugram.`,
`6-lane, 90-meter wide road National Highway to South of Gurugram.`,
`A Calm & Fresher neighbourhood Environment.`,




      
      // "Pollution-free healthy environment",
      // "A Calm & Fresher neighbourhood Environment.",
      // "Most secure site to commute at night, as close to existing posh Residential Colony",
      // "Very close & clear view of beautiful Aravali Hills",
    ]
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantage",
    mapIMG: CONFIG.IMAGE_URL + 'athens_gurugram/location.jpg',
    locationData : [
      {
        distance:'40 Min',
        title:'IGI Airport',
      },
      {
        distance:'05 Min',
        title:'KMP expressway',
      },
      {
        distance:'20 Min',
        title:'Cyber/IT offices located on Gurugram Road, Gurgaon',
      },
      {
        distance:'07 Min',
        title:'Westin resort',
      },
      {
        distance:'05 Min',
        title:'Damdama Lake & Taj Hotel',
      },
    ]
  },
  floorPlan:{
    title: 'Floor Plan',

    floorPlanData : [
      {
        title:'Tower A1 Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/towerA1.webp',
      },
      {
        title:'Tower A2 Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/towerA2.webp',
      },
      {
        title:'Tower B1 Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/towerB1.webp',
      },
      {
        title:'Tower B2 Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/towerB2.webp',
      },
      {
        title:'1 BHK Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/type-4.webp',
      },
      {
        title:'2 BHK Floor Plan',
        thumbnail:CONFIG.IMAGE_URL + 'athens_gurugram/floorPlan/type1.webp',
      },
      
    ]
  },
  rera:{
    isshow: true,
    raraDetails:[
      `RERA Registration no : RC/REP/HARERA/GGM/326/58/2019/20`
    ]    
  },
  noPluutionZone:{
    isAllow:false
  },
  walkthrough:{
    isshow:false
  }
  
};



const Athens = () => {
  window.scrollTo(0, 0);
  return (
    <MicroPage data={data} projectName={'MVN-Athens'}/>
  )
};

export default Athens;
