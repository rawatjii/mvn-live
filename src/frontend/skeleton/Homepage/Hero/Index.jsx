import React from "react";
import { Container } from "react-bootstrap";

import './index.css'

const HeroSkeleton = ()=>{
    return(
        <div className="hero_section hero_loading">
            <div className="hero_img skeleton_box d-block"></div>

            <Container>
                <div className="hero_content">
                    <h1 className="hero_title skeleton_box d-block"></h1>
                    <h5 className="hero_desc skeleton_box d-block"></h5>
                </div>
            </Container>
        </div>
    )
}

export default HeroSkeleton;