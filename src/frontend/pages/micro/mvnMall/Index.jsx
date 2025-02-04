import React from "react";
import * as CONFIG from '../../../../config/config';
import MvnMall1 from "../../mvnMall";
import headerDesktopImg from '../../../assets/images/mvn-mall/header/sidebar.webp';
import bannerImg from '../../../assets/images/mvn-mall/banner/banner.webp';
import bannerImgSm from '../../../assets/images/mvn-mall/banner/banner_sm.webp';
import landscapeImg1 from '../../../assets/images/mvn-mall/landscape/1.webp';
import landscapeImgSm1 from '../../../assets/images/mvn-mall/landscape/1_sm.webp';
import landscapeImg2 from '../../../assets/images/mvn-mall/landscape/2.webp';
import landscapeImgSm2 from '../../../assets/images/mvn-mall/landscape/2_sm.webp';
import landscapeImg3 from '../../../assets/images/mvn-mall/landscape/3.webp';
import landscapeImgSm3 from '../../../assets/images/mvn-mall/landscape/3_sm.webp';

// gallery images
import galleryImg1 from '../../../assets/images/mvn-mall/gallery/gallery1.webp'
import galleryImgSm1 from '../../../assets/images/mvn-mall/gallery/gallery1_sm.webp'
import galleryImg2 from '../../../assets/images/mvn-mall/gallery/gallery2.webp'
import galleryImgSm2 from '../../../assets/images/mvn-mall/gallery/gallery2_sm.webp'
import galleryImg3 from '../../../assets/images/mvn-mall/gallery/gallery3.webp'
import galleryImgSm3 from '../../../assets/images/mvn-mall/gallery/gallery3_sm.webp'

// amenities images start
import fantasyGarden from "../../../assets/images/mvn-mall/amenities/fantasy-garden.webp"
import leisureLane from "../../../assets/images/mvn-mall/amenities/leisure_lane.webp"
import characterCorner from "../../../assets/images/mvn-mall/amenities/character_corner.webp"
import virtualVortex from "../../../assets/images/mvn-mall/amenities/vertual-vortex.webp"
import performancePlaza from "../../../assets/images/mvn-mall/amenities/performance_plaza.webp"
import visionaryVault from "../../../assets/images/mvn-mall/amenities/visionary_vault.webp"
import movieHub from "../../../assets/images/mvn-mall/amenities/movie_hub.webp"
import gamerGalaxy from "../../../assets/images/mvn-mall/amenities/gamer_galaxy.webp"
import flavourStreet from "../../../assets/images/mvn-mall/amenities/flavour_street.webp"
import dineDistrict from "../../../assets/images/mvn-mall/amenities/dine_district.webp"
import artisanNook from "../../../assets/images/mvn-mall/amenities/artisan_nook.webp"
import homeDecor from "../../../assets/images/mvn-mall/amenities/home_decor.webp"
import innovationStation from "../../../assets/images/mvn-mall/amenities/inovasion_station.webp"
import zenZone from "../../../assets/images/mvn-mall/amenities/zen_zone.webp"
// amenities images end

// location images start
import locationMapDesktop from "../../../assets/images/mvn-mall/location-map/location-map.webp"
// location images end

export const mvnMallData = {
  header:{
    sidebarAsset:{
      desktop:headerDesktopImg,
      mobile:headerDesktopImg,
    },
    athens_header:'Athens_nav',
    title:'MVN Mall, Dwarka Expressway',
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
  },
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
    title:'Amenities',
    desc: "Elevate your experience with world-class amenities, all designed for an effortless blend of luxury and convenience.",
    data:[
      {
        name: `Fantasy Garden`,
        path: {
          desktop: fantasyGarden,
          mobile: fantasyGarden,
        },
        desc:' To Bring The Grandest Dreams Alive.'
      },
      {
        name: 'Leisure Lane',
        path: {
          desktop: leisureLane,
          mobile: leisureLane,
        },
        desc:' Entertainment Zone'
      },
      {
        name: 'Character Corner',
        path: {
          desktop: characterCorner,
          mobile: characterCorner,
        },
        desc:'Spaces For The Best Memories'
      },
      {
        name: 'Virtual Vortex',
        path: {
          desktop: virtualVortex,
          mobile: virtualVortex,
        },
        desc:'The Biggest VR Park'
      },
      {
        name: 'Performance Plaza',
        path: {
          desktop: performancePlaza,
          mobile: performancePlaza,
        },
        desc:'Live Stages For Trilling Performances'
      },
      {
        name: 'Visionary Vault',
        path: {
          desktop:visionaryVault,
          mobile:visionaryVault,
        },
        desc:'Artifacts From Different Cultures'
      },
      {
        name: 'Movie Hub',
        path: {
          desktop: movieHub,
          mobile: movieHub,
        },
        desc:'The New Address For Movie Screenings'
      },
      {
        name: "Gamer's Galaxy",
        path: {
          desktop: gamerGalaxy,
          mobile: gamerGalaxy,
        },
        desc:'Where ESPORT Champions Arrive'
      },
      {
        name: 'Flavour Street',
        path: {
          desktop:flavourStreet,
          mobile:flavourStreet,
        },
        desc:"Grandest Food Court Every Foodie's Paradise"
      },
      {
        name: 'Dine District',
        path: {
          desktop: dineDistrict,
          mobile: dineDistrict,
        },
        desc:'The Best Fine Dining Chains. '
      },
      { 
        name: "Artisan's Nook",
        path:{
          desktop:artisanNook,
          mobile:artisanNook,
        },
        desc:'Artisan Market Selling Crafts From Every Country' 
      },  
      {
        name: 'Lift',
        path: {
          desktop:homeDecor,
          mobile:homeDecor,
        },
        desc:'Effortless elevation, because every step matters.'
      },
      {
        name: 'Innovation Station',
        path: {
          desktop: innovationStation,
          mobile: innovationStation,
        },
        desc:'Spaces For Exploring World Class Technologies'
      },
      {
        name: 'Zen Zone',
        path: {
          desktop:zenZone,
          mobile:zenZone,
        },
        desc:'Premium Wellness And Fitness Centre'
      },
    ],
     
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
    <MvnMall1 data={mvnMallData}  projectName={'mvn-mall-1'}/>
  )
};

export default MvnMall;
