import React from "react"
import { Container } from "react-bootstrap"
import './journeySkeleton.css'


const OurJourneySkeleton = ()=>{
    return(
        <section className="section journey_section journey_loading pb-0">
            <Container>
                <h4 className="title skeleton_box d-block">
                    
                </h4>

                <ul className="journey_content">
                    <li className="single skeleton_box d-block"></li>
                    <li className="single right skeleton_box d-block"></li>
                    <li className="single skeleton_box d-block"></li>
                    <li className="single right skeleton_box d-block"></li>
                    <li className="single skeleton_box d-block"></li>
                    <li className="single right skeleton_box d-block"></li>
                </ul>
            </Container>
        </section>
    )
}

export default OurJourneySkeleton