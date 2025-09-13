import React from "react";
import * as CONFIG from "../../../../config/config";
const bgImgMB = `${CONFIG.API_URL}images/aero-gurgaon/largeBg1Sm.webp`;
const bgImgDesk = `${CONFIG.API_URL}images/aero-gurgaon/largeBg1.png`;
const absDesk = `${CONFIG.API_URL}images/aero-gurgaon/building_sm.webp`;
const building_sm = `${CONFIG.API_URL}images/aero-gurgaon/building_sm.webp`;
const headerSidebarDesktopImg = `${CONFIG.API_URL}images/aero-gurgaon/header/sidebar.webp`;
const peacockDesktopImg = `${CONFIG.API_URL}images/aero-gurgaon/Peacock/peacock.webp`;
const yogaDeck = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/yoga_deck.webp`;
const yogaDeckSm = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/yoga_deck_sm.webp`;
const swimmingPool = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/swimming_pool.webp`;
const swimmingPoolSm = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/swimming_pool_sm.webp`;
const pargola = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/pargola.webp`;
const pargolaSm = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/pargola_sm.webp`;
const tennis = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/tennis.webp`;
const tennisSm = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/tennis_sm.webp`;
const landscape = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/landscape.webp`;
const landscapeSm = `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/landscape_sm.webp`;

// elevation images
const elevationImg1 = `${CONFIG.API_URL}images/aero-gurgaon/renders/elevation/1.webp`;
const elevationImgSm1 = `${CONFIG.API_URL}images/aero-gurgaon/renders/elevation/1_sm.webp`;
const elevationImg2 = `${CONFIG.API_URL}images/aero-gurgaon/renders/elevation/2.webp`;
const elevationImgSm2 = `${CONFIG.API_URL}images/aero-gurgaon/renders/elevation/2_sm.webp`;
const elevationImg3 = `${CONFIG.API_URL}images/aero-gurgaon/renders/elevation/3.webp`;
const elevationImgSm3 = `${CONFIG.API_URL}images/aero-gurgaon/renders/elevation/3_sm.webp`;

// apartment images
const apartmentImg5 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/5.webp`;
const apartmentImgSm5 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/5_sm.webp`;
const apartmentImg7 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/7.webp`;
const apartmentImgSm7 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/7_sm.webp`;
const apartmentImg8 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/8.webp`;
const apartmentImgSm8 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/8_sm.webp`;
const apartmentImg6 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/6.webp`;
const apartmentImgSm6 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/6_sm.webp`;
const apartmentImg9 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/9.webp`;
const apartmentImgSm9 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/9_sm.webp`;
const apartmentImg2 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/2.webp`;
const apartmentImgSm2 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/2_sm.webp`;
const apartmentImg1 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/1.webp`;
const apartmentImgSm1 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/1_sm.webp`;
const apartmentImg3 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/3.webp`;
const apartmentImgSm3 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/3_sm.webp`;
const apartmentImg4 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/4.webp`;
const apartmentImgSm4 = `${CONFIG.API_URL}images/aero-gurgaon/renders/apartment/4_sm.webp`;

// construction technology
const constructionTechnologyVideo = `${CONFIG.API_URL}images/aero-gurgaon/construction-technology.mp4`;

// amenities
const clubhouse = `${CONFIG.API_URL}images/aero-gurgaon/amenities/clubhouse.webp`;
const clubhouseSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/clubhouseSm.webp`;
const business = `${CONFIG.API_URL}images/aero-gurgaon/amenities/business.webp`;
const businessSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/businessSm.webp`;
const library = `${CONFIG.API_URL}images/aero-gurgaon/amenities/library.webp`;
const librarySm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/librarySm.webp`;
const lounge = `${CONFIG.API_URL}images/aero-gurgaon/amenities/lounge.webp`;
const loungeSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/loungeSm.webp`;
const kids = `${CONFIG.API_URL}images/aero-gurgaon/amenities/kids.webp`;
const kidsSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/kidsSm.webp`;
const gym = `${CONFIG.API_URL}images/aero-gurgaon/amenities/gym.webp`;
const gymSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/gymSm.webp`;
const spa = `${CONFIG.API_URL}images/aero-gurgaon/amenities/spa.webp`;
const spaSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/spaSm.webp`;
const theater = `${CONFIG.API_URL}images/aero-gurgaon/amenities/theater.webp`;
const theaterSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/theaterSm.webp`;
const centralGreen = `${CONFIG.API_URL}images/aero-gurgaon/amenities/central-green.webp`;
const centralGreenSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/central-green_sm.webp`;
const entryexit = `${CONFIG.API_URL}images/aero-gurgaon/amenities/entryexit.webp`;
const entryexitSm = `${CONFIG.API_URL}images/aero-gurgaon/amenities/entryexit_sm.webp`;

// no pollution
const office = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/desktop/office.webp`;
const officeSm = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/office.webp`;
const shopping = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/desktop/shopping.webp`;
const shoppingSm = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/shopping.webp`;
const entertainment = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/desktop/entertainment.webp`;
const entertainmentSm = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/entertainment.webp`;
const sports = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/desktop/sports.webp`;
const sportsSm = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/sports.webp`;
const cinema = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/desktop/cinema.webp`;
const cinemaSm = `${CONFIG.API_URL}images/aero-gurgaon/no-pollution/cinema.webp`;

// location
const locationMap = `${CONFIG.API_URL}images/aero-gurgaon/location/location_map.webp`;
const locationMapSm = `${CONFIG.API_URL}images/aero-gurgaon/location/location-map_sm.webp`;

// floor plan
const penthouse = `${CONFIG.API_URL}images/aero-gurgaon/floorPlan/penthouse/1.webp`;
const floor360 = `${CONFIG.API_URL}images/aero-gurgaon/floorPlan/360/1.webp`;
const floor270 = `${CONFIG.API_URL}images/aero-gurgaon/floorPlan/270/1.webp`;

import "./aeroGuragaon.css";
import MicroPageGurgaon1 from "../../MicroPageGurgaon1";

export const data = {
  header: {
    sidebarAsset: {
      desktop: headerSidebarDesktopImg,
      mobile: headerSidebarDesktopImg,
    },
    title: "MVN Aeroone Gurgaon",
    sidebar_section: [
      {
        section_title: "Overview",
        link: "overview",
      },
      {
        section_title: "Walkthrough",
        link: "Walkthrough",
      },
      {
        section_title: "DGM Sales",
        link: "dgm_sales",
      },
      {
        section_title: "About Architect",
        link: "about_architect",
      },
      {
        section_title: "Landscape",
        link: "landscape",
      },
      {
        section_title: "Construction Technology",
        link: "construction_technology",
      },
      {
        section_title: "Amenities",
        link: "amenities",
      },
      {
        section_title: "Typologies",
        link: "typologies",
      },
      {
        section_title: "Floor plan",
        link: "floor_plan",
      },
      {
        section_title: "Location Map",
        link: "location_map",
      },
      {
        section_title: "MVN Mall",
        link: "mvn_mall",
      },
    ],
  },
  overview: {
    title: "MVN Aero One Gurgaon Luxury Residences",
    extra: "AN EPITOME OF GLOBAL LUXURY NOW IN GURUGRAM",
    counterHeading: "5.5 BHK One of the Largest Apartments in Gurugram",
    desc:
      "MVN Aero One Residence  Gurgaon is set to redefine luxury living with the launch of its ultra-luxury 5.5 BHK residences in Gurgaon. Inspired by the architectural brilliance of Dubai and New York, these opulent homes feature cutting-edge design, world-class amenities, and panoramic views. Designed for the discerning few, MVN Aero One offers a lifestyle where sophistication meets comfort—setting a new benchmark in elite urban living.",
    short_description: "2% discount for Indian Armed Forces Personnel",
    iframe: "13500, 12600, 6300",
    rera:'RERA NO. RC/REP/HARERA/GGM/889/621/2024/116',
    isDiscountAvailable:true,
  },
  elevationData: [
    {
      image: {
        desktop: `${CONFIG.API_URL}assets/aeroone/elevationData/floors.webp`,
        mobile: `${CONFIG.API_URL}assets/aeroone/elevationData/floors_sm.webp`,
      },
      title: "Villas in the Sky",
      desc: "Experience elevated living with unmatched luxury above the clouds.",
    },
    {
      image: {
        desktop: `${CONFIG.API_URL}assets/aeroone/elevationData/jacuzzi.webp`,
        mobile: `${CONFIG.API_URL}assets/aeroone/elevationData/jacuzzi_sm.webp`,
      },
      title: "Soak in Serenity",
      desc: "Immerse in luxury with a private jacuzzi, offering relaxation and stunning vistas.",
    },
    {
      image: {
        desktop: `${CONFIG.API_URL}assets/aeroone/elevationData/zen_garden.webp`,
        mobile: `${CONFIG.API_URL}assets/aeroone/elevationData/zen_garden_sm.webp`,
      },
      title: "Embrace Tranquility",
      desc: "Experience peace in a meticulously crafted Zen garden, a sanctuary of balance and beauty.",
    },
  ],
  LargeElevationSection: { 
    section_type: "elevation",
    heading: "Unseen Unheard Unimagined",
    sub_heading: "ΑΝ ΕΡΙΤOME OF CONTEMPORARY ELEGANCE",
    is_type: null,
    image: `${CONFIG.API_URL}images/aero-gurgaon/largeBg1.webp`,
    alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/largeBg1.webp`,
    mb_image: null,
    mb_alternative_image: null,
    alt: "ΑΝ ΕΡΙΤOME OF CONTEMPORARY ELEGANCE",
    video: null,
    iframe: null,
    json: null,
    yt_url: null,
    short_description: null,
    description:
      "This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits.",
    optional_images: `${CONFIG.API_URL}/images/aero-gurgaon/building.webp`,
    mb_json: null
  },
  walkthrough: {
    section_type: "walkthrough",
    heading: " A GLIMPSE INTO A LIFE EXTRAORDINARY",
    sub_heading: null,
    is_type: null,
    image: null,
    alternative_image: null,
    mb_image: null,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe:
      "https://www.youtube.com/embed/qanbwLmZt4s?loop=1&mute=1&playlist=qanbwLmZt4s",
    json: null,
    yt_url: null,
    short_description: null,
    description:
      "Take a guided virtual tour through our stunning spaces with a walkthrough video that brings your future home to life. Every detail is showcased, allowing you to experience the design, luxury, and lifestyle that await you.",
    optional_images: null,
    mb_json: null
  },
  peacock_section: {
    section_type: "Peacock",
    heading: "EXPERIENCE THE GRANDEUR OF THE LIVING ROOM WITH 360° PANORAMIC VIEWS",
    sub_heading: null,
    is_type: null,
    image: `${CONFIG.API_URL}images/aero-gurgaon/living-room/desktop.webp`,
    alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/living-room/desktop.webp`,
    mb_image: `${CONFIG.API_URL}images/aero-gurgaon/living-room/mobile.webp`,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe: null,
    json: "",
    yt_url: null,
    short_description: null,
    description:
      "Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings.",
    optional_images: null,
    mb_json: null
  },
  living_room: {
    Custom_height: "Custom_height",
    // second_title:'OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY',
    // desc:'Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.',
    path: {
      mobile: `${CONFIG.API_URL}videos/aeroone-gurgaon/living-room.mp4`,
      desktop: `${CONFIG.API_URL}videos/aeroone-gurgaon/living-room.mp4`,
    },
  },
  party_video: {
    section_type: "party",
    heading: "LIVE. LAUGH. LOUNGE",
    sub_heading: null,
    is_type: null,
    image: `${CONFIG.API_URL}images/aero-gurgaon/party/desktop.webp`,
    alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/party/desktop.webp`,
    mb_image: `${CONFIG.API_URL}images/aero-gurgaon/party/mobile.webp`,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe: null,
    json: "uploads/project-section/1750312589925.json",
    yt_url: null,
    short_description: null,
    description:
      "Elegant chandeliers, marble floors, and floor-to-ceiling windows create a lavish ambience, perfect for hosting unforgettable soirees and extravagant gatherings.",
    optional_images: null,
    mb_json: "uploads/project-section/1755868324002.json"
  },
  masterBedroom: {
    section_type: "masterbedroom",
    heading: "BEDROOM Platinum",
    sub_heading: null,
    is_type: null,
    image: `${CONFIG.API_URL}images/aero-gurgaon/bedroom/desktop.webp`,
    alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/bedroom/desktop.webp`,
    mb_image: `${CONFIG.API_URL}images/aero-gurgaon/bedroom/mobile.webp`,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe: null,
    json: "uploads/project-section/1750313501677.json",
    yt_url: null,
    short_description: null,
    description:
      "Your own sphere of serenity crafted artfully for the ultimate retreat into blissful moments of privacy.",
    optional_images: null,
    mb_json: "uploads/project-section/1750313504197.json"
  },
  architect:{
    heading: "About Architect ",
    sub_heading: null,
    is_type: null,
    image: `${CONFIG.API_URL}images/aero-gurgaon/architect/hafeez_user.webp`,
    alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/architect/hafeez_user.webp`,
    mb_image: `${CONFIG.API_URL}images/aero-gurgaon/architect/hafeez_user.webp`,
    mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/architect/hafeez_user.webp`,
    alt: "mvn hafeez image",
    video: null,
    iframe: null,
    json: null,
    yt_url: null,
    short_description: null,
    description:
      "MVN Aero One Residence  is designed by one of the most celebrated architects in the world. Renowned for their innovative and iconic designs, this architecture company has crafted some of the world's most celebrated malls, blending aesthetic brilliance with functional excellence to create unparalleled shopping destinations globally.",
    optional_images: `${CONFIG.API_URL}images/aero-gurgaon/architect/logos.webp`,
    mb_json: null
  },
  landscape: {
    title: "Landscape",
    secondTitle: "REDEFINING ECO-LUXURY WITH ELEVATED LANDSCAPING",
    desc: "Expansive lush green gardens landscaped for beauty and sustainability. Revel in this oasis of freshness and serenity exclusively for the residents.",
    images: [
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
        watermark: "right",
        title: "Lawn Tennis View",
      },
      {
        desktop: landscape,
        mobile: landscapeSm,
        watermark: "right",
        title: "Landscape View",
      },
      {
        desktop: `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/lookout_garden.webp`,
        mobile: `${CONFIG.API_URL}images/aero-gurgaon/renders/landscape/lookout_garden_sm.webp`,
        watermark: "right",
        title: "Lookout Garden",
      },
    ],
  },
  microElevation: {
    title: "Elevation",
    secondTitle: "Pinnacle of Sophisticated Luxury",
    desc: "This architectural masterpiece seamlessly blends cutting-edge design with new-age sophistication. Every curve, every detail, is meticulously crafted to elevate your living experience. Embrace a residence where innovation meets beauty, creating a landmark of luxurious urban living. Your new home awaits.",
    images: [
      {
        desktop: elevationImg1,
        mobile: elevationImgSm1,
        watermark: "right",
      },
      {
        desktop: elevationImg2,
        mobile: elevationImgSm2,
        watermark: "right",
      },
      {
        desktop: elevationImg3,
        mobile: elevationImgSm3,
        watermark: "right",
      },
    ],
  },
  microApartment: {
    title: "Apartment",
    secondTitle: "Every corner a symphony of style & opulence",
    desc: `Experience ultra-luxury living in this exclusive apartment boasting plush interiors and bespoke design. The spacious layout includes a designer bathroom with premium fittings, a modern Cucina kitchen for culinary excellence, and a state-of-the-art home theatre for entertainment. A thoughtfully designed kids' room ensures comfort and fun, completing a perfect sanctuary for a sophisticated, family-friendly lifestyle.`,
    images: [
      {
        desktop: apartmentImg5,
        mobile: apartmentImgSm5,
        watermark: "right",
        title: "Panoramic Living Room",
      },
      {
        desktop: apartmentImg7,
        mobile: apartmentImgSm7,
        watermark: "right",
        title: "Living Room",
      },
      {
        desktop: apartmentImg8,
        mobile: apartmentImgSm8,
        watermark: "right",
        title: "Cucina Kitchen",
      },
      {
        desktop: apartmentImg6,
        mobile: apartmentImgSm6,
        watermark: "right",
        title: "Master Bedroom – Platinum",
      },
      {
        desktop: apartmentImg9,
        mobile: apartmentImgSm9,
        watermark: "right",
        title: "Master Bedroom – Platinum",
      },
      {
        desktop: apartmentImg2,
        mobile: apartmentImgSm2,
        watermark: "right",
        title: "Bathroom",
      },
      {
        desktop: apartmentImg1,
        mobile: apartmentImgSm1,
        watermark: "right",
        title: "Master Bedroom – Royale",
      },
      {
        desktop: apartmentImg3,
        mobile: apartmentImgSm3,
        watermark: "right",
        title: "Study Room",
      },
      {
        desktop: apartmentImg4,
        mobile: apartmentImgSm4,
        watermark: "right",
        title: "Kids' Room",
      },
    ],
    imageClassName: "apartment-section-img",
  },
  construction_technology: {
    section_type: "construction",
    heading: "Construction Technology",
    sub_heading: "Forging Future Foundations with Precision and Speed",
    is_type: null,
    image: null,
    alternative_image: null,
    mb_image: null,
    mb_alternative_image: null,
    alt: null,
    video: `${CONFIG.API_URL}images/aero-gurgaon/construction-technology.mp4`,
    iframe: null,
    json: null,
    yt_url: null,
    short_description: "Features Of Aluminum Formwork",
    description:
      "In the fast-evolving world of construction, efficiency, durability, and adaptability are paramount. Aluminum Formwork emerges as a groundbreaking system, reshaping how residential and mass housing projects are constructed. This advanced technique, crafted from robust and lightweight aluminum components, offers unparalleled precision, rapid execution, and exceptional sustainability.",
    optional_images: null,
    mb_json: null
  },
  renders: [
    {
      title: "Apartment",
      data: [
        {
          content: {},
          lg: apartmentImg1,
          md: apartmentImgSm1,
        },
        {
          content: {},
          lg: apartmentImg2,
          md: apartmentImgSm2,
        },
        {
          content: {},
          lg: apartmentImg3,
          md: apartmentImgSm3,
        },
        {
          content: {},
          lg: apartmentImg4,
          md: apartmentImgSm4,
        },
        {
          content: {},
          lg: apartmentImg5,
          md: apartmentImgSm5,
        },
        {
          content: {},
          lg: apartmentImg6,
          md: apartmentImgSm6,
        },
        {
          content: {},
          lg: apartmentImg7,
          md: apartmentImgSm7,
        },
        {
          content: {},
          lg: apartmentImg8,
          md: apartmentImgSm8,
        },
        {
          content: {},
          lg: apartmentImg9,
          md: apartmentImgSm9,
        },
      ],
    },
    {
      title: "Elevation",
      data: [
        {
          content: {},
          lg: elevationImg1,
          md: elevationImgSm1,
        },
        {
          content: {},
          lg: elevationImg2,
          md: elevationImgSm2,
        },
        {
          content: {},
          lg: elevationImg3,
          md: elevationImgSm3,
        },
      ],
    },
    {
      title: "Landscape",
      data: [
        {
          content: {},
          lg: landscape,
          md: landscapeSm,
        },
      ],
    },
  ],
  amenities: {
    section_type: "amenities",
    heading: "Amenities",
    data: [
      {
        id: 8,
        project_id: 4,
        is_type: "amenities",
        heading: "Elevate Your Family Time At The Exclusive Clubhouse",
        short_description:
          "The ultra-luxury clubhouse offers residents an opulent retreat, featuring state-of-the-art amenities, a lavish spa, infinity pools, gourmet dining, private lounges, and exquisite interiors for unparalleled leisure and comfort for the whole family.",
        image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/clubhouse.webp`,
        alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/clubhouse.webp`,
        mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/clubhouseSm.webp`,
        mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/clubhouseSm.webp`,
        alt: "Elevate Your Family Time At The Exclusive Clubhouse",
        status: 1,
        created_at: "2025-06-13T12:07:36.000Z",
        updated_at: "2025-06-20T05:28:38.000Z"
      },
      {
        id: 9,
        project_id: 4,
        is_type: "amenities",
        heading: "Business Centre",
        short_description:
          "A sophisticated workspace designed for productivity and collaboration\r\n",
          image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/business.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/business.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/businessSm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/businessSm.webp`,
        alt: "Business Centre",
        status: 1,
        created_at: "2025-06-13T12:08:54.000Z",
        updated_at: "2025-06-20T05:29:06.000Z"
      },
      {
        id: 10,
        project_id: 4,
        is_type: "amenities",
        heading: "Library",
        short_description:
          "A tranquil haven for literary exploration and quiet contemplation",
          image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/library.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/library.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/librarySm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/librarySm.webp`,
        alt: "Library",
        status: 1,
        created_at: "2025-06-13T12:11:24.000Z",
        updated_at: "2025-06-20T05:29:33.000Z"
      },
      {
        id: 11,
        project_id: 4,
        is_type: "amenities",
        heading: "Sports Lounge",
        short_description: "An upscale space to unwind and enjoy sports events",
        image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/lounge.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/lounge.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/loungeSm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/loungeSm.webp`,
        alt: "Sports Lounge",
        status: 1,
        created_at: "2025-06-13T12:11:48.000Z",
        updated_at: "2025-06-20T05:29:51.000Z"
      },
      {
        id: 12,
        project_id: 4,
        is_type: "amenities",
        heading: "Kids' Play Area",
        short_description: "A safe and imaginative space for children to explore",
        image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/kids.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/kids.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/kidsSm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/kidsSm.webp`,
        alt: "Kids' Play Area",
        status: 1,
        created_at: "2025-06-13T12:12:15.000Z",
        updated_at: "2025-06-20T05:30:12.000Z"
      },
      {
        id: 13,
        project_id: 4,
        is_type: "amenities",
        heading: "Fitness Centre",
        short_description:
          "State-of-the-art fitness facilities for ultimate wellness",
          image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/gym.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/gym.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/gymSm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/gymSm.webp`,
        alt: "Fitness Centre",
        status: 1,
        created_at: "2025-06-13T12:13:09.000Z",
        updated_at: "2025-06-20T05:30:27.000Z"
      },
      {
        id: 14,
        project_id: 4,
        is_type: "amenities",
        heading: "Spa",
        short_description:
          "A luxurious retreat offering rejuvenation and tranquility",
          image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/spa.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/spa.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/spaSm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/spaSm.webp`,
        alt: "Spa",
        status: 1,
        created_at: "2025-06-13T12:13:34.000Z",
        updated_at: "2025-06-20T05:30:40.000Z"
      },
      {
        id: 15,
        project_id: 4,
        is_type: "amenities",
        heading: "Mini Theatre",
        short_description:
          "Intimate screenings for cinematic experiences with friends",
          image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/theater.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/theater.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/theaterSm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/theaterSm.webp`,
        alt: "Mini Theatre",
        status: 1,
        created_at: "2025-06-13T12:13:53.000Z",
        updated_at: "2025-06-20T05:30:54.000Z"
      },
      {
        id: 16,
        project_id: 4,
        is_type: "amenities",
        heading: "Central Green",
        short_description:
          "An oasis of clean air and pure living. Advanced air purification systems create pollution-free zones, ensuring residents breathe clean, fresh air, promoting healthier living and well-being.",
          image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/central-green.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/central-green.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/central-green_sm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/central-green_sm.webp`,
        alt: "Central Green",
        status: 1,
        created_at: "2025-06-13T12:14:24.000Z",
        updated_at: "2025-06-20T05:31:09.000Z"
      },
      {
        id: 17,
        project_id: 4,
        is_type: "amenities",
        heading: "Exclusive entrance and exit for the residents",
        short_description:
          "Experience unparalleled privacy and convenience with exclusive entry and exit points designed for residents of MVN, ensuring seamless access and an elite living experience.",
          image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/entryexit.webp`,
          alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/entryexit.webp`,
          mb_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/entryexit_sm.webp`,
          mb_alternative_image: `${CONFIG.API_URL}images/aero-gurgaon/amenities/entryexit_sm.webp`,
        alt: "Exclusive entrance and exit for the residents",
        status: 1,
        created_at: "2025-06-13T12:14:52.000Z",
        updated_at: "2025-06-20T05:31:23.000Z"
      }
    ]
    //  iframe:'https://www.youtube.com/embed/BqcxVd21m6Y?autoplay=1&loop=1&mute=1&playlist=BqcxVd21m6Y'
  },
  noPollutionZone: {
    title: "Connections with MVN Mall",
    data: [
      {
        name: "0 km from all the urban needs 0km from your office",
        path: {
          desktop: office,
          mobile: officeSm,
        },
        desc: "Now you don’t have to even walk to work. Take a ride on your exclusive elevator to work",
      },
      {
        name: "0 km from luxury Shopping",
        path: {
          desktop: shopping,
          mobile: shoppingSm,
        },
        desc: "All the best of luxury shopping and brands from the world over, right at your doorstep at MVN Mall",
      },
      {
        name: "0 km from Global Entertainment",
        path: {
          desktop: entertainment,
          mobile: entertainmentSm,
        },
        desc: "When it comes to best of entertainment, you won’t have to look far. Just step into your exclusive elevator and enter a whole world of global entertainment in the MVN mall",
      },
      {
        name: "0 km from the Sports Club & Lounge",
        path: {
          desktop: sports,
          mobile: sportsSm,
        },
        desc: "Make sports a regular part of your life. Participate in sports events and also follow your passion to play your favourite sports, at the exclusive Sports Lounge and Sports Club.",
      },
      {
        name: `0 km cinema`,
        path: {
          desktop: cinema,
          mobile: cinemaSm,
        },
        desc: "Have a blockbuster of a time, without ever missing a show due to traffic. Catch up with all the superhits at the theatres below in the MVN mall.",
      },
    ],
  },
  highlight: {
    isshow: true,
    title: "Highlight",
    point: [
      "Power backup for common facilities.",
      "Italian/Imported Marble flooring.",
      "Television points in living and bedrooms.",
      "Telephone points in living and master bedroom.",
      "Split AC provision in living and bedrooms.",
      "Premium emulsion paint finish.",
    ],
  },
  typology: {
    project_id: 4,
    section_type: "typologies",
    heading: "Typologies",
    sub_heading: null,
    is_type: null,
    image: null,
    alternative_image: null,
    mb_image: null,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe: null,
    json: "uploads/project-section/1750309185695.json",
    yt_url: null,
    short_description: null,
    description: null,
    optional_images: null,
    mb_json: null,
    data: [
      {
        id: 2,
        project_id: 4,
        heading: "Penthouse 1",
        short_description:
          "Elevate your lifestyle to new heights with these extraordinary duplex residences, where two levels of unmatched luxury unfold before you. With impeccable attention to detail and a focus on privacy and exclusivity, these residences embody the pinnacle of sophisticated living, where only the most discerning will reside. 1",
        image: "uploads/project/elevant-galleries/1750421291427.webp",
        alternative_image: "uploads/project/elevant-galleries/1750421291675.png",
        alt: "penthouse",
        json: "uploads\\project\\elevant-galleries\\1748608818569.json",
        status: 1,
        created_at: "2025-05-30T12:40:18.000Z",
        updated_at: "2025-06-20T12:08:12.000Z"
      },
      {
        id: 3,
        project_id: 4,
        heading: "360 degree Panoramic Apartment",
        short_description:
          "At an impressive 12600 sq.ft., the simplex flats offer a commanding 360-degree panoramic vista, presenting a boundless world of elegance. This is where space, design, and nature converge in perfect harmony.",
        image: "uploads/project/elevant-galleries/1750421318801.webp",
        alternative_image: "uploads/project/elevant-galleries/1750421319081.png",
        alt: "Panoramic Apartment",
        json: null,
        status: 1,
        created_at: "2025-06-20T04:35:05.000Z",
        updated_at: "2025-06-20T12:08:40.000Z"
      },
      {
        id: 4,
        project_id: 4,
        heading: "270 degree Panoramic Apartment",
        short_description:
          "Spanning an expansive 6300 sq.ft., these exquisite residences offer a captivating 270-degree panoramic view, seamlessly blending breathtaking vistas with unmatched sophistication.",
        image: "uploads/project/elevant-galleries/1750421332920.webp",
        alternative_image: "uploads/project/elevant-galleries/1750421333189.png",
        alt: "Panoramic Apartment",
        json: null,
        status: 1,
        created_at: "2025-06-20T04:35:57.000Z",
        updated_at: "2025-06-20T12:08:53.000Z"
      }
    ]
  },
  floorPlan: {
    section_type: "floor-plan",
    heading: "Floor Plan",
    sub_heading: null,
    is_type: "video",
    image: null,
    alternative_image: null,
    mb_image: null,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe: null,
    json: null,
    yt_url: null,
    short_description: null,
    description: null,
    optional_images: null,
    mb_json: null,
    data: [
      {
        id: 3,
        project_id: 4,
        unit_type: "TOWER C",
        heading: "Penthouse",
        area: null,
        sizes: "",
        image: "uploads/project/floorplan/1750854251747.webp",
        alternative_image: "uploads/project/floorplan/1750854252015.jpg",
        alt: "Penthouse Plan",
        status: 1,
        created_at: "2025-05-27T12:34:57.000Z",
        updated_at: "2025-06-25T12:24:12.000Z"
      },
      {
        id: 15,
        project_id: 4,
        unit_type: "0",
        heading: "360 Panoramic Apartment (12600 sq.ft.)",
        area: "0",
        sizes: "0",
        image: "uploads/project/floorplan/1750258823790.webp",
        alternative_image: "uploads/project/floorplan/1750258823791.jpg",
        alt: "mvn floor plan image",
        status: 1,
        created_at: "2025-06-18T15:00:24.000Z",
        updated_at: null
      },
      {
        id: 16,
        project_id: 4,
        unit_type: "0",
        heading: "270 Panoramic Apartment (6300 sq.ft.)",
        area: "0",
        sizes: "0",
        image: "uploads/project/floorplan/1750258903301.webp",
        alternative_image: "uploads/project/floorplan/1750258903302.jpg",
        alt: "mvn floor plan image",
        status: 1,
        created_at: "2025-06-18T15:01:43.000Z",
        updated_at: null
      }
    ]
  },
  locationAdvantage: {
    project_id: 4,
    section_type: "location-map",
    heading: "Location Map",
    sub_heading: "THE LOCATION AS INVITING AS ITS ALLURE",
    is_type: null,
    image: "uploads/project-section/1752737290084.webp",
    alternative_image: "uploads/project-section/1752737290352.jpg",
    mb_image: "uploads/project-section/1752737290084.webp",
    mb_alternative_image: "uploads/project-section/1752737290352.jpg",
    alt: "location map image",
    video: null,
    iframe: null,
    json: null,
    yt_url: null,
    short_description: null,
    description:
      "Located at the prime 22km stone on Dwarka Expressway, Gurugram, MVN Aero One Residence sits on the growth corridor at the first and only drop of the 23km elevated expressway. Strategically positioned at downtown Gurugram.",
    optional_images: null,
    mb_json: null
  },
  mvnMall: {
    section_type: "mvn-mall",
    heading: "MVN Mall",
    sub_heading: null,
    is_type: null,
    image: null,
    alternative_image: null,
    mb_image: null,
    mb_alternative_image: null,
    alt: null,
    video: null,
    iframe: null,
    json: null,
    yt_url: null,
    short_description: null,
    description:
      "Experience a pollution-free haven at MVN's iconic masterpiece, where every breath you take is purified by advanced air filtration systems. Nestled above MVN mall, everything you need—from gourmet dining to designer boutiques and private cinemas—is just an elevator ride away. This is a sanctuary where luxury and convenience come together, offering you everything at your doorstep, so you never need to leave.",
    optional_images: null,
    mb_json: null,
    data: [
      {
        id: 4,
        project_id: 4,
        is_type: "mall_galleries",
        sm_image: "uploads\\project\\elevant-galleries\\1748697415527.jpg",
        image: "uploads\\project\\elevant-galleries\\1748697415520.webp",
        sm_alternative_image: "uploads\\project\\elevant-galleries\\1748697415525.webp",
        alternative_image: "uploads\\project\\elevant-galleries\\1748697415522.jpg",
        alt: "mvn mall icon ",
        status: 1,
        seq: 1,
        created_at: "2025-05-31T13:16:55.000Z",
        updated_at: "2025-06-14T06:18:10.000Z"
      },
      {
        id: 5,
        project_id: 4,
        is_type: "mall_galleries",
        sm_image: "uploads/project/elevant-galleries/1749881819448.webp",
        image: "uploads/project/elevant-galleries/1749881818404.webp",
        sm_alternative_image: "uploads/project/elevant-galleries/1749881819185.webp",
        alternative_image: "uploads/project/elevant-galleries/1749881818940.webp",
        alt: "mvn mall animation",
        status: 1,
        seq: 1,
        created_at: "2025-06-14T06:16:59.000Z",
        updated_at: null
      },
      {
        id: 6,
        project_id: 4,
        is_type: "mall_galleries",
        sm_image: "uploads/project/elevant-galleries/1749882123759.webp",
        image: "uploads/project/elevant-galleries/1749882122719.webp",
        sm_alternative_image: "uploads/project/elevant-galleries/1749882123754.webp",
        alternative_image: "uploads/project/elevant-galleries/1749882123494.webp",
        alt: "mvn mall animation 1",
        status: 1,
        seq: 1,
        created_at: "2025-06-14T06:22:04.000Z",
        updated_at: null
      }
    ]
  },
};

const AeroOneGurgaon = () => {
  return <MicroPageGurgaon1 data={data} />;
};

export default AeroOneGurgaon;
