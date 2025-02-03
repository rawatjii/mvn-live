import React from "react";
import { Container } from "react-bootstrap";
import MicroPage from "./Micro";
import * as CONFIG from '../../config/config';
import AmenitiesAthens from "../components/MicroPage/AmenitiesAthens";


const MvnAthensPh2Sohna = ()=>{
  window.scrollTo(0, 0);

    const data = {
        micro_hero_section: 
        {
          isVdo: false,
          images:[
            {
                imgMb: CONFIG.IMAGE_URL + 'athens-gurgaonPh2/bannerimage.jpg',
                imgDesk: CONFIG.IMAGE_URL + 'athens-gurgaonPh2/bannerimage.jpg', 
            }
        ],
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
          title: "MVN ATHENS",
          location: "Gurugram Phase-2",
          extra: "",
          desc:[
            `This is a Residential project of MVN Infrastructure in the prime Sector- 05, of the Sohna, under the AFFORDABLE HOUSING POLICY 2013. Govt. of Haryana has rolled out a Policy to cater the needs of Home for Middle Class and Lower Middle Class at Affordable Cost in the Urban Areas.`,
            `MVN INFRASTRUCTURE PVT LTD. has been awarded a License by Govt. of Haryana to develop an Affordable Group Housing Colony in the Prime Sector-05, of Sohna, which is very close to Industrial area of Sohna, and Sohna Town. It is surrounded by the beauty of nature along with renowned institutes like GD Goenka University, K R Mangalam International University & many more`
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
          desc: "Experience the elegance of a sliding door that seamlessly connects your living space to the outdoors, transforming the ambience with every glide.",
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
          isshow: false,
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
          mapIMG: CONFIG.IMAGE_URL + 'athens-gurgaonPh2/locationmap.jpg',
          locationData : [
            {
              distance:'10 Min',
              title:'Hospitals',
            },
            {
              distance:'10 Min',
              title:'Malls',
            },
            {
              distance:'15 Min',
              title:'Rajiv Chowk',
            },
            {
              distance:'20 Min',
              title:'Huda City Center',
            },
            {
              distance:'20 Min',
              title:'Golf Course Road',
            },
          ]
        },
        masterImage : CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf11.jpg',
        floorPlan:{
          isshow: true,
          title: "Floor Plan",
      
          floorPlanData : [
            {
              title:'TOWER A1-FLOOR PLAN',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf1.jpg',
            },
            {
              title:'TOWER A2-FLOOR PLAN',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf2.jpg',
            },
            {
              title:'TOWER B2-FLOOR PLAN',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf3.jpg',
            },
            {
              title:'TOWER B 3,B 5,B 7 FLOOR PLAN',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf4.jpg',
            },
            {
              title:'TOWER B1 FLOOR PLAN',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf5.jpg',
            },
            {
              title:'TOWER B 4,B 6,B 8 FLOOR PLAN',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf6.jpg',
            },
            {
              title:'TYPE-1 2 BHK Floor Plan',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf7.jpg',
            },
            {
              title:'TYPE-2 2 BHK Floor Plan',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf8.jpg',
            },
            {
              title:'TYPE-3 2 BHK Floor Plan',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf9.jpg',
            },
            {
              title:'TYPE-4 1 BHK Floor Plan',
              thumbnail:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/floorplan/plansf10.jpg',
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
        },
        gallery:{
          isshow:true,
          galleryData : [
            {
              alt:'Tower A1 Floor Plan',
              src:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/gallery/gallery1.webp',
            },
            {
              alt:'Tower A2 Floor Plan',
              src:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/gallery/gallery2.webp',
            },
            {
              alt:'Tower B1 Floor Plan',
              src:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/gallery/gallery3.webp',
            },
            {
              alt:'Tower B2 Floor Plan',
              src:CONFIG.IMAGE_URL + 'athens-gurgaonPh2/gallery/gallery6.webp',
            }
          ]
        }
        
      };
      







    return(

        <>
        {/* <section className="upcoming_page">
            <Container>
                <h2>Coming Soon</h2>
                <p>MVN Athens Ph-2 Sohna</p>
            </Container>
        </section> */}

        <MicroPage data={data} projectName={'MVN-athens-ph2-Sohna'}/>
        <AmenitiesAthens />

    
        
        </>
    ) 
}

export default MvnAthensPh2Sohna;