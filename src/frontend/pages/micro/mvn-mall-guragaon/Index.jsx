import React from "react";
import MicroPage from "../../Micro";
import * as CONFIG from "../../../../config/config";
import hero_img_mb from "../../../../frontend/assets/images/micro_hero/hero_img.webp";
import hero_img_desk from "../../../../frontend/assets/images/micro_hero/hero_img.webp";
// import BangaloreDesktop from "/assets/bangalore/images/master_bedroom/desktop/lottieBase64.json?url";
// import BangaloreMobile from "assets/bangalore/images/master_bedroom/mobile/lottieBase64.json?url";

import MicroPageGurgaon1 from "../../MicroPageGurgaon1";
import "./mvn-mall-gurgaon.css";
// const images = [
//   {
//     assets: {
//       desktop:CONFIG.IMAGE_URL + 'renders/elevation/1.webp',
//       mobile:CONFIG.IMAGE_URL + 'renders/elevation/1_sm.webp',
//     },
//     watermark: 'right'
//   },
//   {
//     assets: {
//       desktop:CONFIG.IMAGE_URL + 'renders/elevation/2.webp',
//       mobile:CONFIG.IMAGE_URL + 'renders/elevation/2_sm.webp',
//     },
//     watermark: 'right'
//   },
//   {
//     assets: {
//       desktop:CONFIG.IMAGE_URL + 'renders/elevation/3.webp',
//       mobile:CONFIG.IMAGE_URL + 'renders/elevation/3_sm.webp',
//     },
//     watermark: 'left'
//   }
// ];
export const dataMvnMall = {
  micro_hero_section: {
    isVdo: false,
    images: {
      desktop:CONFIG.IMAGE_URL + 'mvn-mall/hero/desktop_img.webp',
      mobile:CONFIG.IMAGE_URL + 'mvn-mall/hero/desktop_img.webp',
    },
    bannerHighLight: false,
    enquiryBTN: false,
    client: true,
    desktopPath: "assets/images/micro/hero/desktop/",
    mobilePath: "assets/images/micro/hero/mobile/",
    desktopPathNew: "assets/images/micro/hero/client/desktop-new/",
    mobilePathNew: "assets/images/micro/hero/client/mobile-new/",
    bangaloreFrames: true,
  },
  overview: {
    title: "MVN Mall",
    extra: "Bigger Than Your Imagination",
    desc: ['The mall is designed to be the ultimate destination for both families and tourists, offering a vibrant and inviting atmosphere. With the airport just a stone\'s throw away, this destination also has its own luxury hotel for tourists visiting from far & wide.', 'There are dedicated floors thoughtfully curated to focus on a specific category, such as apparel, furniture, dining, and entertainment, ensuring a seamless and well-organized shopping experience.'],
    rera: null,
    counterHeading:false
  },
  LargeElevationSection: {
    title: ["Unseen", "Unheard", "Unimagined"],
    isAllow: true,
    position:'center',
  },
  video1: {
    title: "EXPERIENCE THE BLISS OF ENDLESS VISTAS",
    desc: "Step into a living room where nature’s vibrant splendor enchants, blending elegance and serenity for both relaxation and gatherings.",
    isVdo: true,
  },
  video2: {
    title: "ESCAPE TO EXCLUSIVITY",
    desc: "Dive into your own private pool with a grand view, just a few steps away from your living room",
    isVdo: true,
  },
  living_room_video: {
    title: "OPEN THE DOORS TO EXPANSIVE ELEGANCE AND SPACIOUS LUXURY",
    desc: "Glide your way through the floor-to-ceiling sliding doors, and step on to the sprawling deck with breathtaking vistas and an air of tranquility.",
    isVdo: true,
    path: "assets/bangalore/images/living-room/desktop/",
    totalFrames: 972,
  },
  video3: {
    title: "LIVE. LAUGH. LOUNGE",
    desc: "Elegant chandeliers, marble floors, and floor-to-ceiling windows create a lavish ambiance, perfect for hosting unforgettable soirees and extravagant gatherings.",
    isVdo: true,
  },
  masterBedroom: {
    title: "A Haven of Luxury and Repose",
    desc: "Enter a master bedroom where grandeur meets tranquility. This retreat is your ultimate haven, epitomizing luxurious living at its finest, with bespoke interiors, expansive layouts, and an ambiance of refined elegance.",
    isVdo: true,
    bangalore_bedroom:true,
    mobile_totalFrames: 162,
    desktop_totalFrames: 162,
    mobilePath: "assets/bangalore/images/master_bedroom/mobile/",
    desktopPath : "assets/bangalore/images/master_bedroom/desktop/",
    // mobileJson:'/assets/bangalore/images/master_bedroom/mobile/lottieBase64.json',
    // desktopJson:'/assets/bangalore/images/master_bedroom/desktop/lottieBase64.json',
    // mobileJson: `${CONFIG.IMAGE_URL_BANGALORE}images/master_bedroom/mobile/lottieBase64.json`,
    // desktopJson: `${CONFIG.IMAGE_URL_BANGALORE}images/master_bedroom/desktop/lottieBase64.json`,
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
    isshow: false,
    desc: "IF YOU THINK YOU'VE EXPERIENCED TRUE LUXURY IT'S TIME TO RAISE YOUR EXPECTATION",
    masterBedroom: {
      title: "MASTER BEDROOM",
      desc: "If You Think You Know What Lavishness Means It's Time You Got A New Perspective",
      isVdo: false,
    },
  },
  walkthrough_section: {
    src: "https://www.youtube.com/embed/gJqfXn7vR9M",
    title: "Virtual Tour",
    desc: "Experience MVN Aero One through a captivating virtual journey that unveils its every nuance. From awe-inspiring entrances to serene interiors, immerse yourself in spaces designed for a life of unparalleled opulence.",
  },
  landscape: {
    content: {
      desc: "Revel in the serenity of nature with verdant landscapes that elevate outdoor living. MVN Aero One offers lush greenery and thoughtfully designed open spaces, offering a tranquil escape amidst urban vibrancy.",
    },
    images: [
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}images/landscape/2.jpg`,
        watermark: "left",
        title: "Sunken Court Hires",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}images/landscape/3.jpg`,
        watermark: "right",
        title: "Swimming Pool",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}images/landscape/1.jpg`,
        watermark: "right",
        title: "Yoga Deck",
      },
    ],
  },
  elevation: {
    content: {
      desc: "A landmark rising majestically above the city, MVN Aero One embodies architectural excellence. Its striking facade signifies a commitment to superior living and luxurious distinction.",
    },
    images: [
      {
        assets: {
          desktop: `${CONFIG.IMAGE_URL_BANGALORE}images/elevation/1lg.jpg`,
          mobile: `${CONFIG.IMAGE_URL_BANGALORE}images/elevation/1.jpg`,
        },
        watermark: "right",
      },
      {
        assets: {
          desktop: `${CONFIG.IMAGE_URL_BANGALORE}images/elevation/2lg.jpg`,
          mobile: `${CONFIG.IMAGE_URL_BANGALORE}images/elevation/2.jpg`,
        },
        watermark: "right",
      },
      {
        assets: {
          desktop: `${CONFIG.IMAGE_URL_BANGALORE}images/elevation/3lg.jpg`,
          mobile: `${CONFIG.IMAGE_URL_BANGALORE}images/elevation/3.jpg`,
        },
        watermark: "left",
      },
    ],
  },
  apartment: {
    content: {
      desc: "Your residence at MVN Aero One transcends the notion of a home as it epitomises elegance. With expansive layouts, sophisticated interiors, and meticulous attention to detail, every space celebrates the art of fine living.",
    },
    images: [
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/1.jpg`,
        watermark: "left",
        title: "Master Bedroom",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/2.jpg`,
        watermark: "right",
        title: "Master Bedroom Closet",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/3.jpg`,
        watermark: "left",
        title: "Kitchen",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/4.jpg`,
        watermark: "right",
        title: "Kids\' Room",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/5.jpg`,
        watermark: "right",
        title: "Guest Bedroom",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/6.jpg`,
        watermark: "right",
        title: "Foyer",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/7.jpg`,
        watermark: "right",
        title: "Entry Foyer",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/8.jpg`,
        watermark: "left",
        title: "Balcony",
      },
      {
        asset: `${CONFIG.IMAGE_URL_BANGALORE}/images/apartments/9.jpg`,
        watermark: "right",
        title: "Bedroom",
      },
    ],
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
      title: "Apartment",
      data: [
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/1.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/1_sm.webp`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/2.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/2_sm.webp`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/3_sm.webp`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/4_sm.webp`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/5_sm.webp`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/6_sm.webp`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/7_sm.webp`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/8_sm.webp`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/apartment/3.webp`,
          md: `${CONFIG.IMAGE_URL}renders/apartment/9_sm.webp`,
        },
      ],
    },
    {
      title: "Elevation",
      data: [
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/1.jpg`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/2Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/2.jpg`,
        },
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/elevation/3Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/elevation/3.jpg`,
        },
      ],
    },
    {
      title: "Landscape",
      data: [
        {
          content: {},
          lg: `${CONFIG.IMAGE_URL}renders/landscape/1Lg.jpg`,
          md: `${CONFIG.IMAGE_URL}renders/landscape/1.jpg`,
        },
      ],
    },
  ],
  amenities: {
    bangalore_amenities:"bangalore_amenities",
    content: {
      desc: "Indulge in a range of world-class amenities tailored to meet your every desire. From wellness and leisure to relaxation and convenience, MVN Aero One offers a lifestyle perfectly aligned with your aspirations. ",
    },
    data: [
      {
        name: "Hot Tub",
        imgSrc: {
          desktop: "Hot-tub--Hires.jpg",
          mobile: "Hot-tub--Hires-sm.jpg",
        },
        desc: "Immerse yourself in ultimate relaxation with a luxurious hot tub. Bask in the warmth as you de-stress and let go of the world’s cares, rejuvenating your mind and body.",
      },
      {
        name: "Billiards",
        imgSrc: {
          desktop: "Biiliards.jpg",
          mobile: "Biiliards-sm.jpg",
        },
        desc: "Engage in a refined game of billiards with friends and neighbors. The well-appointed space ensures a seamless and enjoyable experience for every enthusiast.",
      },
      {
        name: "Gym",
        imgSrc: {
          desktop: "gym.jpg",
          mobile: "gym-sm.jpg",
        },
        desc: "Achieve your fitness goals with cutting-edge equipment in a panoramic terrace gym, where every session is infused with motivation and stunning views.",
      },
      {
        name: "Party Lawn",
        imgSrc: {
          desktop: "Party-Lawn.jpg",
          mobile: "Party-Lawn-sm.jpg",
        },
        desc: "Celebrate life’s cherished moments on the rooftop party lawn, a haven for heartfelt conversations and unforgettable memories. ",
      },
      {
        name: `Infinity Pool`,
        imgSrc: {
          desktop: "Infinity-pool.jpg",
          mobile: "Infinity-pool-sm.jpg",
        },
        desc: "Swim towards the horizon in the exquisite infinity pool. With its vanishing edge, enjoy breathtaking vistas of the runway, lush greenery, and the shimmering Bettakotta Lake.",
      },
      {
        name: "Table-Tennis",
        imgSrc: {
          desktop: "Table-Tennis.jpg",
          mobile: "Table-Tennis-sm.jpg",
        },
        desc: "Refine your game in the dedicated table tennis zone. This vibrant space is designed to inspire focus and friendly competition, ensuring endless enjoyment.",
      },
      {
        name: "Outdoor Cinema",
        imgSrc: {
          desktop: "Outdoor-Cinema.jpg",
          mobile: "Outdoor-Cinema-sm.jpg",
        },
        desc: "Experience the enchantment of cinema beneath a canopy of stars. The outdoor theatre offers an exceptional blend of entertainment and natural splendor.",
      },
    ],
  },
  amenities_section: [
    {
      title: "Spa",
      data: {
        content: {},
        images: [
          {
            lg: CONFIG.IMAGE_URL + "amenities/spa.webp",
            mb: CONFIG.IMAGE_URL + "amenities/spaSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/spa.webp",
            mb: CONFIG.IMAGE_URL + "amenities/spaSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/spa.webp",
            mb: CONFIG.IMAGE_URL + "amenities/spaSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/spa.webp",
            mb: CONFIG.IMAGE_URL + "amenities/spaSm.webp",
          },
        ],
      },
    },
    {
      title: "Library",
      data: {
        content: {},
        images: [
          {
            lg: CONFIG.IMAGE_URL + "amenities/library.webp",
            mb: CONFIG.IMAGE_URL + "amenities/librarySm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/library.webp",
            mb: CONFIG.IMAGE_URL + "amenities/librarySm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/library.webp",
            mb: CONFIG.IMAGE_URL + "amenities/librarySm.webp",
          },
        ],
      },
    },
    {
      title: "Gym Area",
      data: {
        content: {},
        images: [
          {
            lg: CONFIG.IMAGE_URL + "amenities/gym.webp",
            mb: CONFIG.IMAGE_URL + "amenities/gymSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/gym.webp",
            mb: CONFIG.IMAGE_URL + "amenities/gymSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/gym.webp",
            mb: CONFIG.IMAGE_URL + "amenities/gymSm.webp",
          },
        ],
      },
    },
    {
      title: "Mini Theatre",
      data: {
        content: {},
        images: [
          {
            lg: CONFIG.IMAGE_URL + "amenities/theater.webp",
            mb: CONFIG.IMAGE_URL + "amenities/theaterSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/theater.webp",
            mb: CONFIG.IMAGE_URL + "amenities/theaterSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/theater.webp",
            mb: CONFIG.IMAGE_URL + "amenities/theaterSm.webp",
          },
        ],
      },
    },
    {
      title: "Business Centre",
      data: {
        content: {},
        images: [
          {
            lg: CONFIG.IMAGE_URL + "amenities/business.webp",
            mb: CONFIG.IMAGE_URL + "amenities/businessSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/business.webp",
            mb: CONFIG.IMAGE_URL + "amenities/businessSm.webp",
          },
          {
            lg: CONFIG.IMAGE_URL + "amenities/business.webp",
            mb: CONFIG.IMAGE_URL + "amenities/businessSm.webp",
          },
        ],
      },
    },
  ],
  typologies: {
    bhk1: [
      {
        title: "1 BHK",
        area: "440 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/1bhk/1.png`
      },
      {
        title: "1 BHK",
        area: "600 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/1bhk/2.png`
      },
    ],
    bhk2: [
      {
        title: "2 BHK",
        area: "Area:725 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/1.png`
      },
      {
        title: "2 BHK",
        area: "Area:725 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/2.png`
      },
      {
        title: "2 BHK",
        area: "Area:725 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/3.png`
      },
      {
        title: "2 BHK",
        area: "Area:725 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/4.png`
      },
      {
        title: "2 BHK",
        area: "Area:725 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/5.png`
      },
      {
        title: "2 BHK",
        area: "Area:726 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/6.png`
      },
      {
        title: "2 BHK",
        area: "Area:726 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/7.png`
      },
      {
        title: "2 BHK",
        area: "Area:730 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/8.png`
      },
      {
        title: "2 BHK",
        area: "Area:730 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/9.png`
      },
      {
        title: "2 BHK",
        area: "Area:755 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/10.png`
      },
      {
        title: "2 BHK",
        area: "Area:804 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/11.png`
      },
      {
        title: "2 BHK",
        area: "Area:804 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/12.png`
      },
      {
        title: "2 BHK",
        area: "Area:807 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/13.png`
      },
      {
        title: "2 BHK",
        area: "Area:807 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/14.png`
      },
      {
        title: "2 BHK",
        area: "Area:834 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/15.png`
      },
      {
        title: "2 BHK",
        area: "Area:834 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/2bhk/16.png`
      },
    ],
    bhk3: [
      {
        title: "3 BHK",
        area: "Area:1099 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/3bhk/1.png`
      },
      {
        title: "3 BHK",
        area: "Area:1099 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/3bhk/2.png`
      },
      {
        title: "3 BHK",
        area: "Area:1099 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/3bhk/3.png`
      },
      {
        title: "3 BHK",
        area: "Area:1099 sq.ft.",
        link: "#",
        src: `${CONFIG.IMAGE_URL_BANGALORE}images/floor-plan/3bhk/4.png`
      },
    ],
  },
  noPollutionZone: [
    // {
    //   title: 'An oasis of clean air and pure living',
    //   desc:'Advanced air purification systems create pollution-free zones, ensuring residents breathe clean, fresh air, promoting healthier living and well-being.',
    //   imgSrc: window.innerWidth <= 768 ? 'central-green.webp' : 'central-green.webp'
    // },
    {
      title: "0 km from all the urban needs 0km from your office",
      desc: "Now you don’t have to even walk to work. Take a ride on your exclusive elevator to work",
      imgSrc: window.innerWidth <= 768 ? "office.webp" : "desktop/office.webp",
    },
    {
      title: "0 km from luxury Shopping",
      desc: "All the best of luxury shopping and brands from the world over, right at your doorstep at MVN Mall",
      imgSrc:
        window.innerWidth <= 768 ? "shopping.webp" : "desktop/shopping.webp",
    },
    {
      title: "0 km from Global Entertainment",
      desc: "When it comes to best of entertainment, you won’t have to look far. Just step into your exclusive elevator and enter a whole world of global entertainment in the MVN mall.",
      imgSrc:
        window.innerWidth <= 768
          ? "entertainment.webp"
          : "desktop/entertainment.webp",
    },
    {
      title: "0 km from the Sports Club & Lounge",
      desc: "Make sports a regular part of your life. Participate in sports events and also follow your passion to play your favourite sports, at the exclusive Sports Lounge and Sports Club.",
      imgSrc: window.innerWidth <= 768 ? "sports.webp" : "desktop/sports.webp",
    },
    {
      title: "0 km cinema",
      desc: "Have a blockbuster of a time, without ever missing a show due to traffic. Catch up with all the superhits at the theatres below in the MVN mall.",
      imgSrc: window.innerWidth <= 768 ? "cinema.webp" : "desktop/cinema.webp",
    },
  ],
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
  locationAdvantage: {
    isshow: true,
    title: "Location Advantage",
    mapIMG: {
      desktop: `${CONFIG.IMAGE_URL_BANGALORE}images/location-map.jpg`,
      mobile: `${CONFIG.IMAGE_URL_BANGALORE}images/location-mapm.jpg`,
    },
    bangaloreLocation: true,
  },
  floorPlan: {
    title: "Floor Plan",
    floorPlanData: [
      {
        title: "Penthouse",
        thumbnail: [
          {
            src: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/penthouse/1.webp",
            mobile:
              CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/penthouse/1.webp",
          },
          {
            src: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/penthouse/2.webp",
            mobile:
              CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/penthouse/2.webp",
          },
        ],
      },
      {
        title: "360 Panoramic Apartment (11700 sq.ft.)",
        thumbnail: [
          {
            src: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/360/1.webp",
            mobile: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/360/1.webp",
          },
        ],
      },
      {
        title: "270 Panoramic Apartment (5850 sq.ft.)",
        thumbnail: [
          {
            src: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/270/1.webp",
            mobile: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/270/1.webp",
          },
          {
            src: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/270/2.webp",
            mobile: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/270/2.webp",
          },
          {
            src: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/270/3.webp",
            mobile: CONFIG.IMAGE_URL + "aero-bangalore/floorPlan/270/3.webp",
          },
        ],
      },
    ],
  },
};
