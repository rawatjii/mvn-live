import React from "react";
import './teamskeleton.css'
import { Container } from "react-bootstrap";

const OurTeamSkeleton = ()=>{
    return(
        <section className="section our_team_section team_loading" aria-label="OurTeamSkeleton Section">
            <Container>
                <h4 className="title skeleton_box d-block"></h4>
            </Container>

            <div className="img team_img skeleton_box mt-3"></div>

            <p className="skeleton_box d-block"></p>

        </section>
    )
}

export default OurTeamSkeleton