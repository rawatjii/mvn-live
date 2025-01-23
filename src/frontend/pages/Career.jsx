import React, { Suspense, useEffect, useRef, useState } from 'react'
import MicroBanner from '../components/MicroBanner/Index'

import careerbg from '../assets/images/career/tables-chairs-office.png'
import ContactPage from '../components/contact/Index'
import Enquire from '../components/homepage/Enquire'
import EnquireForm from '../components/homepage/EnquireForm'
import { Container } from 'react-bootstrap'
import SecTitle from '../../common/SecTitle/Index'

import supportIcon from '../assets/images/icons/contact/career.png'
import careerIMG from '../assets/images/career/career.png'

import leftArrow from '../assets/images/career/left-arrow.png'
import CultureImg from '../assets/images/career/image.jpg'
import peopleDevelopmentImg from '../assets/images/career/peaple-d.png'
import RewardsImg from '../assets/images/career/rewards.png'
import ligemvnImg from '../assets/images/career/lifeatmvn.webp'
import BlankIMG from '../assets/images/career/bg.png'
import LazyLoad from 'react-lazyload'
import '../../dinesh.css'
import headingIconImg from "../assets/images/icons/heading-icon-img.webp";
import CareerImg from "../assets/images/career/career-img.jpg";
import InitialLoading from '../skeleton/Initial/Index'
import Layout from '../components/Layout'




function Career() {
    window.scrollTo(0, 0);
    const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));
    
    const titleRef = useRef();
    const desRefs = useRef([]);

    const breadcrumbs = {
        title: 'Career',
        content: "Be a Part of Our Legacy of Luxury",
        links: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Career'
            }
        ]
    }

    useEffect(() => {
        setNewLoadingCount(Number(localStorage.getItem('count')));
    }, [localStorage.getItem('count')]);
    return (
        <Layout>
            <div className='career_page inner_section'>

            <MicroBanner bg={CareerImg} data={breadcrumbs} />

            <div className="micro_content">
                <div className="micro_data">
                    <Suspense fallback="loading">
                        <div className="content_col position-relative page-header-main-heading">


                            <Container>
                                <div className="heading_div mb_60 mb_sm_30">
                                    <img src={headingIconImg} alt="mvn vertical icon" className="img-fluid title_plane1" />
                                    <h4 ref={titleRef} className="title title_style1 text-center">
                                    Talent Management
                                    </h4>
                                </div>
                                <p className='des_style1 text-center' ref={(el) => (desRefs.current[0] = el)}>
                                Our Human Resources team is dedicated to attracting, nurturing, and retaining top talent, ensuring the right individuals are in the right roles to drive the company forward. We prioritize skills, passion, and commitment to achieving our shared goals.
                                </p>

                            </Container>
                        </div>
        </Suspense>
            </div>

            <section className="front-page-all">



                <div className="container">
                    <div className="grid-left">
                        <div className="img-left">
                            <div className="inner-sec">
                                <div className="half">
                                    <div className="img-in-left">
                                        <img src={CultureImg} width="100%;" alt='Culture image'/>
                                    </div>
                                </div>
                                <div className="half">
                                    <div className="content-half h-100">
                                        <div>
                                            <h2>Work Environment</h2>
                                            <p className='des_style1'>At MVN, we cultivate a culture of collaboration, innovation, and inclusivity, where every individual’s voice is valued and every contribution matters. We believe in fostering a positive, dynamic work environment that encourages personal and professional growth.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid-left-right">
                            <div className="img-left-right">
                                <div className="item ">
                                    <img className="blank-img" src={BlankIMG} alt='Blank image' width="100%" />
                                    <div className="content-right-img">
                                        <div className="gd-inner h-100 d-grid align-items-center">
                                            <div>
                                                <h2>Employee Growth</h2>
                                                <p className='des_style1'>We are committed to the continuous development of our people, providing opportunities for learning, mentorship, and skill enhancement. Our focus is on empowering employees to reach their fullest potential, both personally and professionally.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay right-overlay">
                                        <div className="img-hov">
                                            <img src={peopleDevelopmentImg} alt='Development image' width="100%" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="grid-right">
                        <div className="grid-left-right">
                            <div className="img-left-right">
                                <div className="item ">
                                    <img className="blank-img" src={BlankIMG} alt='Blank image' width="100%" />
                                    <div className="content-right-img">
                                        <div className="gd-inner h-100 d-grid align-items-center">
                                            <div>
                                                <h2>Rewards & Recognition</h2>
                                                <p className='des_style1'>We celebrate achievements and milestones, ensuring our employees’ hard work and dedication are recognized and rewarded. Through tailored incentives and acknowledgment, we motivate our team to strive for excellence.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="overlay right-overlay">
                                        <div className="img-hov">
                                            <img src={RewardsImg} alt='Rewards image' width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="img-left">
                            <div className="inner-sec">
                                <div className="half">
                                    <div className="img-in-left">
                                        <img src={ligemvnImg} alt='life at mvn image' width="100%;" />
                                    </div>
                                </div>
                                <div className="half">
                                    <div className="content-half h-100">
                                        <div>
                                            <h2>Life At MVN</h2>
                                            <p className='des_style1'>Life at MVN is all about balance, collaboration, and growth. We offer a supportive and vibrant workplace where employees thrive, enjoy meaningful work, and are encouraged to achieve both professional success and personal well-being.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <section className="oppotunities padding">
                <div className="container">
                    <div className="inn_oppor">
                        <div className="left text-center mx-auto">
                            <h2 className='title'>Shape Your Future with MVN</h2>
                            <div className='content'>
                                    <p className='des_style1'>At MVN, your career isn’t just a job—it’s a journey of growth, learning, and limitless opportunities. We empower individuals to explore their potential, embrace challenges, and achieve excellence in a dynamic and supportive environment. Join us to build a rewarding future where your ideas and ambitions find their true place.</p>
                                <div className="job_mail">
                                <div>
                                <p className='mb-0'>Send your Resume to  </p>
                                <a href="mailto:careers@mvninfrastructure.com" className='jobmail'> careers@mvninfrastructure.com</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
        </Layout>
        
    )
}

export default Career