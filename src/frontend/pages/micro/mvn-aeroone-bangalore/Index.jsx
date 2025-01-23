import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from '../../../../config/config';
import hero_img_mb from "../../../../frontend/assets/images/micro/aeroone_bangalore/hero_mobile.jpg";
import hero_img_desk from "../../../../frontend/assets/images/micro/aeroone_bangalore/hero_desk.jpg";
import highlightbgIMG from '../../../assets/images/bg/112.jpg'


const data = {
  micro_hero_section: 
  {
    isVdo: false,
    images:[{ imgMb: hero_img_mb, imgDesk: hero_img_desk, }],
    bannerHighLight:true,
    enquiryBTN:{
      isshow: true,
      mail: `info@example.com`
    } 
  },
  bannerHighLight: {
    isshow: true,
  },
  overview: {
    title: "MVN Aero One",
    location: "BANGALORE",
    extra: "",
    desc:[
      'There’s a lot to look forward to with MVN Aero One. When we conceptualized the project, we asked ourselves what the urban resident was missing. And rather than merely fill up the blanks in his/her life, we chose to enhance our offerings. Aero One offers luxury apartments in Bangalore at the best location, with ample living space, and delight-a-moment amenities that makes a complete life within.',
      'Aero One is taking shape in pristine Devanahalli, which has benefited from the presence of the Kempegowda International Airport. The airport has spurred numerous infrastructural auxiliary developments. Coupled with connectivity to NH 44, Hebbal, and access to the Central Business District of Bangalore, this is one location that offers more potential for growth.',
      'Aero One gives you an option to opt for 2 & 3 BHK luxury apartments in Banglore that suits the need of every family member. The project, being close to the Special Agricultural Zone, abuts the International Airport, offering scenic views that last a lifetime.'
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
  amenities : [
    { name: 'infinity pool', imgSrc: 'aero-bangalore/amenities/infinity_pool.png' },
    { name: 'Yoga', imgSrc: 'aero-bangalore/amenities/Yoga.png' },
    { name: 'Billiards', imgSrc: 'aero-bangalore/amenities/Billiards.png' },
    { name: 'Gym', imgSrc: 'aero-bangalore/amenities/Gym.png' },
    { name: 'Party lawn', imgSrc: 'aero-bangalore/amenities/Party_lawn.png' },
    { name: 'Croquet view', imgSrc: 'aero-bangalore/amenities/Croquet_View.png' },
    { name: 'Outdoor cinema', imgSrc: 'aero-bangalore/amenities/Outdoor_cinema.png' },
    { name: 'Hot Tub', imgSrc: 'aero-bangalore/amenities/Hot_Tub.png' },  
  ],
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
    title: "Specifications",
    desc: [
      `MVN Aero One is advancing with the motto of No compromise with quality, integrating premium-quality materials around every inch of the facility making it rank among the top apartments in Bangalore. The perfect balance of open and enclosed spaces in the apartments of MVN Aero One has made its place among the best residential projects in Bangalore, offering luxurious flats in Devanahalli.`,
    ],
    point:[
      "RCC Structure with Aluminum shuttering.",
      "Two Basements, Ground Floor/ Stilt Floor, 13 Full Upper Floors & Partial 14th Floor.",
      "Compliance to seismic zone II.",
      "Walls – RCC / Block work/ Brick work.",
    ]
  },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantage",
    mapIMG:  CONFIG.IMAGE_URL + 'aero-bangalore/location.webp',
    locationData : [
      {
        distance:'03 Min',
        title:'Anjaneya Temple Devanahalli ',
      },
      {
        distance:'04 Min',
        title:'Mar Thoma Church Devanahalli ',
      },
      {
        distance:'06 Min',
        title:'Mini Vidhana Soudha Devanahalli',
      },
      {
        distance:'11 Min',
        title:'Timbre Drive-In Cinema Bellary Road ',
      },
      {
        distance:'15 Min',
        title:'Kempegowda Intl. Airport Devanahalli ',
      },
      {
        distance:'40 Min',
        title:'Nandi hills Nandi Hills Road ',
      },
    ]
  },
  floorPlan:{
    title: "Typology",

    floorPlanData : [
      {
        title:'1 BHK',
        thumbnail:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/new/1BHK.webp',
      },
      {
        title:'2 BHK Panoramic ',
        thumbnail:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/new/2bhk_para.webp',
      },
      {
        title:'2 BHK Luxury ',
        thumbnail:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/new/2BHK.webp',
      },
      {
        title:'3 BHK Luxury',
        thumbnail:CONFIG.IMAGE_URL + 'aero-bangalore/floorPlan/new/3BHK.jpg',
      },
      
    ]
  },
  rera:{
    isshow: true,
    raraDetails:[
      `RERA Registration no : PRM/KA/RERA/1250/303/PR/201222/003761`,
      `Tower no 4 RERA Registration no : PRM/KA/RERA/1250/303/PR/140923/006259`,
      `Tower no 5 and Tower 6 RERA Registration No : PRM/KA/RERA/1250/303/PR/141223/006472`
    ]    
  },
  noPluutionZone:{
    isAllow:false
  },
  walkthrough:{
    isshow:false
  }
  
};



const AeroOneBangalore = () => {
  window.scrollTo(0,0)
  return (
    <MicroPage data={data}  projectName={'MVN-AeroOne-Bangalore'}/>
  )
};

export default AeroOneBangalore;
