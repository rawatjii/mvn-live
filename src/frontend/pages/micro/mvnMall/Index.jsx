import React from "react";
import MvnMall1 from "../../mvnMall";
import { API_URL } from "../../../../config/config";
const headerDesktopImg = `${API_URL}images/mvn-mall/header/sidebar.webp`;
const bannerImg = `${API_URL}images/mvn-mall/banner/banner.webp`;
const bannerImgSm = `${API_URL}images/mvn-mall/banner/banner_sm.webp`;
const landscapeImg1 = `${API_URL}images/mvn-mall/landscape/1.webp`;
const landscapeImgSm1 = `${API_URL}images/mvn-mall/landscape/1_sm.webp`;
const landscapeImg2 = `${API_URL}images/mvn-mall/landscape/2.webp`;
const landscapeImgSm2 = `${API_URL}images/mvn-mall/landscape/2_sm.webp`;
const landscapeImg3 = `${API_URL}images/mvn-mall/landscape/3.webp`;
const landscapeImgSm3 = `${API_URL}images/mvn-mall/landscape/3_sm.webp`;

// gallery images
const galleryImg1 = `${API_URL}images/mvn-mall/gallery/gallery1.webp`
const galleryImgSm1 = `${API_URL}images/mvn-mall/gallery/gallery1_sm.webp`
const galleryImg2 = `${API_URL}images/mvn-mall/gallery/gallery2.webp`
const galleryImgSm2 = `${API_URL}images/mvn-mall/gallery/gallery2_sm.webp`
const galleryImg3 = `${API_URL}images/mvn-mall/gallery/gallery3.webp`
const galleryImgSm3 = `${API_URL}images/mvn-mall/gallery/gallery3_sm.webp`

// amenities images start
const fantasyGarden = `${API_URL}images/mvn-mall/amenities/fantasy-garden.webp`
const leisureLane = `${API_URL}images/mvn-mall/amenities/leisure_lane.webp`
const characterCorner = `${API_URL}images/mvn-mall/amenities/character_corner.webp`
const virtualVortex = `${API_URL}images/mvn-mall/amenities/vertual-vortex.webp`
const performancePlaza = `${API_URL}images/mvn-mall/amenities/performance_plaza.webp`
const visionaryVault = `${API_URL}images/mvn-mall/amenities/visionary_vault.webp`
const movieHub = `${API_URL}images/mvn-mall/amenities/movie_hub.webp`
const gamerGalaxy = `${API_URL}images/mvn-mall/amenities/gamer_galaxy.webp`
const flavourStreet = `${API_URL}images/mvn-mall/amenities/flavour_street.webp`
const dineDistrict = `${API_URL}images/mvn-mall/amenities/dine_district.webp`
const artisanNook = `${API_URL}images/mvn-mall/amenities/artisan_nook.webp`
const homeDecor = `${API_URL}images/mvn-mall/amenities/home_decor.webp`
const innovationStation = `${API_URL}images/mvn-mall/amenities/inovasion_station.webp`
const zenZone = `${API_URL}images/mvn-mall/amenities/zen_zone.webp`
// amenities images end

// location images start
const locationMapDesktop = `${API_URL}images/mvn-mall/location-map/location-map.webp`
// location images end

export const mvnMallData = {
  header:{
    sidebarAsset:{
      desktop:headerDesktopImg,
      mobile:headerDesktopImg,
    },
    athens_header:'Athens_nav',
    title:'MVN Mall, Gurugram',
    sidebar_section:[
      {
        section_title:'Overview',
        link:'microOverview'
      },
      {
        section_title:'MVN Mall ID Brochure',
        link:'downloadBrochure'
      },
      {
        section_title:'Landscape',
        link:'landscape'
      },
      {
        section_title:'Gallery',
        link:'gallery'
      },
      {
        section_title:'Amenities',
        link:'MicroAmenities'
      },
      {
        section_title:'Location Map',
        link:'MicroLocationMap'
      },
    ],
  },
  banner:{
    desktop:bannerImg,
    mobile:bannerImgSm,
  },
  overview: {
    title: "MVN Mall",
    extra: "The Pinnacle of Luxury Shopping",
    desc: "Experience unparalleled elegance at MVN Mall , where world-class brands converge in an architecturally stunning setting. Indulge in a curated selection of premium boutiques, gourmet dining, and exclusive entertainment options, redefining luxury retail.",
    rera:"RERA NO. RC/REP/HARERA/GGM/889/621/2024/116",
    discountUrl:`${API_URL}patch/discount.webp`,
    isDiscountAvailable:true,
  },
  mvnMallVideo:"https://www.youtube.com/embed/CbmkQBZuvTw?loop=1&mute=1&playlist=CbmkQBZuvTw",
  landscape:{
    title:'Landscapes',
    desc:'A mesmerizing fusion of art and nature, MVN Mall landscape unfolds like a masterpiece, cascading water features, sculpted green terraces, and ambient lighting create an atmosphere of serene grandeur.',
    images:[
      {
        desktop: landscapeImg1,
        mobile: landscapeImgSm1,
      },
      {
        desktop: landscapeImg2,
        mobile: landscapeImgSm2,
      },
      {
        desktop: landscapeImg3,
        mobile: landscapeImgSm3,
      },
    ],
  },
  gallery:{
    title:'Gallery',
    desc:'Step into a visual journey where every snapshot captures the seamless blend of elegance and innovation.',
    images:[
      {
        desktop: galleryImg3,
        mobile: galleryImgSm3,
      },
      {
        desktop: galleryImg1,
        mobile: galleryImgSm1,
      },
      {
        desktop: galleryImg2,
        mobile: galleryImgSm2,
      },
    ],
  },
  amenities : {
    project_id: 5,
    section_type: "amenities",
    heading: "Amenities",
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
    description:"Elevate your experience with world-class amenities, all designed for an effortless blend of luxury and convenience.",
    data:[
      {
        id: 4,
        project_id: 5,
        is_type: "amenities",
        heading: "Fantasy Garden",
        short_description: "To Bring The Grandest Dreams Alive.\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/fantasy-garden.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/fantasy-garden.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/fantasy-garden-sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/fantasy-garden-sm.webp`,
        alt: "Fantasy Garden",
        status: 1,
        created_at: "2025-05-30T12:57:39.000Z",
        updated_at: "2025-07-17T09:45:30.000Z",
      },
      {
        id: 5,
        project_id: 5,
        is_type: "amenities",
        heading: "Leisure Lane",
        short_description: "Entertainment Zone\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/leisure_lane.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/leisure_lane.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/leisure_lane_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/leisure_lane_sm.webp`,
        alt: "Leisure Lane",
        status: 1,
        created_at: "2025-05-30T12:57:58.000Z",
        updated_at: "2025-07-17T10:00:34.000Z",
      },
      {
        id: 50,
        project_id: 5,
        is_type: "amenities",
        heading: "Character Corner",
        short_description: "Spaces For The Best Memories\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/character_corner.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/character_corner.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/character_corner_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/character_corner_sm.webp`,
        alt: "Character Corner",
        status: 1,
        created_at: "2025-06-19T10:01:23.000Z",
        updated_at: "2025-07-17T10:01:00.000Z",
      },
      {
        id: 51,
        project_id: 5,
        is_type: "amenities",
        heading: "Virtual Vortex",
        short_description: "The Biggest VR Park\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/vertual-vortex.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/vertual-vortex.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/vertual-vortex-sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/vertual-vortex-sm.webp`,
        alt: "Virtual Vortex",
        status: 1,
        created_at: "2025-06-19T10:01:58.000Z",
        updated_at: "2025-07-17T10:01:49.000Z",
      },
      {
        id: 52,
        project_id: 5,
        is_type: "amenities",
        heading: "Performance Plaza",
        short_description: "Live Stages For Trilling Performances\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/performance_plaza.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/performance_plaza.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/performance_plaza_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/performance_plaza_sm.webp`,
        alt: "Performance Plaza",
        status: 1,
        created_at: "2025-06-19T10:02:19.000Z",
        updated_at: "2025-07-17T10:02:18.000Z",
      },
      {
        id: 53,
        project_id: 5,
        is_type: "amenities",
        heading: "Visionary Vault",
        short_description: "Artifacts From Different Cultures\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/visionary_vault.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/visionary_vault.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/visionary_vault_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/visionary_vault_sm.webp`,
        alt: "Visionary Vault",
        status: 1,
        created_at: "2025-06-19T10:02:38.000Z",
        updated_at: "2025-07-17T10:03:07.000Z",
      },
      {
        id: 54,
        project_id: 5,
        is_type: "amenities",
        heading: "Movie Hub",
        short_description: "The New Address For Movie Screenings\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/movie_hub.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/movie_hub.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/movie_hub_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/movie_hub_sm.webp`,
        alt: "Movie Hub",
        status: 1,
        created_at: "2025-06-19T10:02:55.000Z",
        updated_at: "2025-07-17T10:03:27.000Z",
      },
      {
        id: 55,
        project_id: 5,
        is_type: "amenities",
        heading: "Gamer's Galaxy",
        short_description: "Where ESPORT Champions Arrive\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/gamer_galaxy.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/gamer_galaxy.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/gamer_galaxy_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/gamer_galaxy_sm.webp`,
        alt: "Gamer's Galaxy",
        status: 1,
        created_at: "2025-06-19T10:03:11.000Z",
        updated_at: "2025-07-17T10:03:45.000Z",
      },
      {
        id: 56,
        project_id: 5,
        is_type: "amenities",
        heading: "Flavour Street",
        short_description: "Grandest Food Court Every Foodie's Paradise\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/flavour_street.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/flavour_street.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/flavour_street_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/flavour_street_sm.webp`,
        alt: "Flavour Street",
        status: 1,
        created_at: "2025-06-19T10:03:29.000Z",
        updated_at: "2025-07-17T10:04:15.000Z",
      },
      {
        id: 57,
        project_id: 5,
        is_type: "amenities",
        heading: "Dine District",
        short_description: "The Best Fine Dining Chains.\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/dine_district.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/dine_district.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/dine_district_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/dine_district_sm.webp`,
        alt: "Dine District",
        status: 1,
        created_at: "2025-06-19T10:03:46.000Z",
        updated_at: "2025-07-17T10:04:36.000Z",
      },
      {
        id: 58,
        project_id: 5,
        is_type: "amenities",
        heading: "Artisan's Nook",
        short_description: "Artisan Market Selling Crafts From Every Country\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/artisan_nook.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/artisan_nook.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/artisan_nook_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/artisan_nook_sm.webp`,
        alt: "Artisan's Nook",
        status: 1,
        created_at: "2025-06-19T10:04:03.000Z",
        updated_at: "2025-07-17T10:05:15.000Z",
      },
      {
        id: 59,
        project_id: 5,
        is_type: "amenities",
        heading: "Lift",
        short_description: "Effortless elevation, because every step matters.\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/home_decor.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/home_decor.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/home_decor_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/home_decor_sm.webp`,
        alt: "Lift",
        status: 1,
        created_at: "2025-06-19T10:04:21.000Z",
        updated_at: "2025-07-17T09:48:40.000Z",
      },
      {
        id: 60,
        project_id: 5,
        is_type: "amenities",
        heading: "Innovation Station",
        short_description: "Spaces For Exploring World Class Technologies\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/inovasion_station.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/inovasion_station.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/inovasion_station_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/inovasion_station_sm.webp`,
        alt: "Innovation Station",
        status: 1,
        created_at: "2025-06-19T10:04:37.000Z",
        updated_at: "2025-07-17T10:05:33.000Z",
      },
      {
        id: 61,
        project_id: 5,
        is_type: "amenities",
        heading: "Zen Zone",
        short_description: "Premium Wellness And Fitness Centre\r\n\r\n",
        image: `${API_URL}images/mvn-mall/amenities/zen_zone.webp`,
        alternative_image: `${API_URL}images/mvn-mall/amenities/zen_zone.webp`,
        mb_image: `${API_URL}images/mvn-mall/amenities/zen_zone_sm.webp`,
        mb_alternative_image: `${API_URL}images/mvn-mall/amenities/zen_zone_sm.webp`,
        alt: "Zen Zone",
        status: 1,
        created_at: "2025-06-19T10:04:53.000Z",
        updated_at: "2025-07-17T10:05:50.000Z",
      },
    ]
  },
  // typologies: {
  //   title:'Typologies',
  //   desc:"Explore meticulously designed living spaces that redefine modern architecture, offering a perfect balance of style and functionality.",
  //   tabs_name:['TOWER C','TOWER D'],
  //   tabs:{     
  //     tower_c: [
  //     {
  //       title: "Lower Level Plan",
  //       area: "3419 sq.ft.",
  //       link: "#",
  //       src: `${CONFIG.IMAGE_URL_MVL_MALL}floor-plan/towerc/1.png`
  //     },
  //     {
  //       title: "Upper Level Plan",
  //       area: "3419 sq.ft.",
  //       link: "#",
  //       src: `${CONFIG.IMAGE_URL_MVL_MALL}floor-plan/towerc/2.png`
  //     },
  //     {
  //       title: "Upper Level Plan",
  //       area: "3375 sq.ft.",
  //       link: "#",
  //       src: `${CONFIG.IMAGE_URL_MVL_MALL}floor-plan/towerc/3.png`
  //     },
  //   ], 
  //   tower_d: [
  //   {
  //     title: "Lower Level Plan",
  //     area: "3419 sq.ft.",
  //     link: "#",
  //     src: `${CONFIG.IMAGE_URL_MVL_MALL}floor-plan/towerd/1.png`
  //   },
  //   {
  //     title: "Upper Level Plan",
  //     area: "3419 sq.ft.",
  //     link: "#",
  //     src: `${CONFIG.IMAGE_URL_MVL_MALL}floor-plan/towerd/2.png`
  //   },
  //   {
  //     title: "Upper Level Plan",
  //     area: "3375 sq.ft.",
  //     link: "#",
  //     src: `${CONFIG.IMAGE_URL_MVL_MALL}floor-plan/towerd/3.png`
  //   },
  // ],
  // }
  // },
  locationAdvantage: {
    isshow: true,
    title: "Location Advantages",
    desc:" MVN Mall ensures connectivity while surrounding you with urban conveniences and serene charm.",
    mapIMG: {
      desktop:  locationMapDesktop,
      mobile:  locationMapDesktop,
    },
    locationData: [
      {
        distance: '5.4 kms',
        title: 'National Highway 48',
      },
      {
        distance: '29.7 kms',
        title: 'IGI Airport',
      },
      {
        distance: '20 kms',
        title: 'DLF Cyber City',
      },
      {
        distance: '10.5 kms',
        title: 'Gurgaon Railway station',
      },
      {
        distance: '17.4 kms',
        title: 'DLF City Centre',
      },
    ]
  },
};



const MvnMall = () => {
  window.scrollTo(0,0)
  return (
    <MvnMall1 data={mvnMallData}  projectName={'mvn-mall'}/>
  )
};

export default MvnMall;
