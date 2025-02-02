import React from "react";
import * as CONFIG from '../../../../config/config';
import MvnMall1 from "../../mvnMall";
import headerDesktopImg from '../../../assets/images/mvn-mall/header/sidebar.webp';
import bannerImg from '../../../assets/images/mvn-mall/banner/banner.webp';
import landscapeImg1 from '../../../assets/images/mvn-mall/landscape/1.webp';
import landscapeImg2 from '../../../assets/images/mvn-mall/landscape/2.webp';
import landscapeImg3 from '../../../assets/images/mvn-mall/landscape/3.webp';

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
        section_title:'MVN ID Brochure',
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
    mobile:bannerImg,
  },
  overview: {
    title: "MVN Mall",
    extra: "Where Imagination Shapes Timeless Harmony",
    desc: "Discover a world where modern architecture interwines with the essence of affordable living. At MVN Mall, we don't just build homes; we craft masterpieces that resonate with creativity and sophistication.",
  },
  landscape:{
    title:'Landscapes',
    desc:'Step into a visual journey where every snapshot captures the seamless blend of elegance and innovation.',
    images:[
      {
        desktop: landscapeImg1,
        mobile: landscapeImg1,
      },
      {
        desktop: landscapeImg2,
        mobile: landscapeImg2,
      },
      {
        desktop: landscapeImg3,
        mobile: landscapeImg3,
      },
    ],
  },
  gallery:{
    title:'Gallery',
    desc:'Step into a visual journey where every snapshot captures the seamless blend of elegance and innovation.',
    images:[
      {
        desktop: `${CONFIG.IMAGE_URL_MVL_MALL}gallery/1.webp`,
        mobile: `${CONFIG.IMAGE_URL_MVL_MALL}gallery/1.webp`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_MVL_MALL}gallery/2.webp`,
        mobile: `${CONFIG.IMAGE_URL_MVL_MALL}gallery/2.webp`,
      },
      {
        desktop: `${CONFIG.IMAGE_URL_MVL_MALL}gallery/3.webp`,
        mobile: `${CONFIG.IMAGE_URL_MVL_MALL}gallery/3.webp`,
      },
    ],
  },
  amenities : {
    title:'Amenities',
    desc: "Immerse yourself in a world of thoughtfully created amenities designed to elevate your lifestyle with comfort, convenience, and indulgence.",
    data:[
      {
        name: `Fantasy Garden`,
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/fantasy-garden.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/fantasy-garden.webp`,
        },
        desc:' To Bring The Grandest Dreams Alive.'
      },
      {
        name: 'Leisure Lane',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/leisure_lane.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/leisure_lane.webp`,
        },
        desc:' Entertainment Zone'
      },
      {
        name: 'Character Corner',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/character_corner.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/character_corner.webp`,
        },
        desc:'Spaces For The Best Memories'
      },
      {
        name: 'Virtual Vortex',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/vertual-vortex.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/vertual-vortex.webp`,
        },
        desc:'The Biggest VR Park'
      },
      {
        name: 'Performance Plaza',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/performance_plaza.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/performance_plaza.webp`,
        },
        desc:'Live Stages For Trilling Performances'
      },
      {
        name: 'Visionary Vault',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/visionary_vault.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/visionary_vault.webp`,
        },
        desc:'Artifacts From Different Cultures'
      },
      {
        name: 'Movie Hub',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/movie_hub.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/movie_hub.webp`,
        },
        desc:'The New Address For Movie Screenings'
      },
      {
        name: "Gamer's Galaxy",
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/gamer_galaxy.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/gamer_galaxy.webp`,
        },
        desc:'Where ESPORT Champions Arrive'
      },
      {
        name: 'Flavour Street',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/flavour_street.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/flavour_street.webp`,
        },
        desc:"Grandest Food Court Every Foodie's Paradise"
      },
      {
        name: 'Dine District',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/dine_district.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/dine_district.webp`,
        },
        desc:'The Best Fine Dining Chains. '
      },
      { 
        name: "Artisan's Nook",
        path:{
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/artisan_nook.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/artisan_nook.webp`,
        },
        desc:'Artisan Market Selling Crafts From Every Country' 
      },  
      {
        name: 'Lift',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/home_decor.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/home_decor.webp`,
        },
        desc:'Effortless elevation, because every step matters.'
      },
      {
        name: 'Innovation Station',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/inovasion_station.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/inovasion_station.webp`,
        },
        desc:'Spaces For Exploring World Class Technologies'
      },
      {
        name: 'Zen Zone',
        path: {
          desktop:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/zen_zone.webp`,
          mobile:`${CONFIG.IMAGE_URL_MVL_MALL}amenities/zen_zone.webp`,
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
      desktop: `${CONFIG.IMAGE_URL_MVL_MALL}location-map.webp`,
      mobile: `${CONFIG.IMAGE_URL_MVL_MALL}location-map.webp`,
    },
  },
};



const MvnMall = () => {
  window.scrollTo(0,0)
  return (
    <MvnMall1 data={mvnMallData}  projectName={'mvn-mall-1'}/>
  )
};

export default MvnMall;
