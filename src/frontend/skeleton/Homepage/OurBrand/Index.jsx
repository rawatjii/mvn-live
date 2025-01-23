import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import './ourBrandSkeleton.css';

const OurBrandSkeleton = ()=>{
    return(
        <section className="section our_brand_section brand_loading">
            <div className="img brand_bg"></div>

            <Container>
                <h4 className="title skeleton_box d-block"></h4>

                <div className="brand_content mt-4">
                <Row>
                    <Col  xs={12} className="single_col">
                        <div className="single skeleton_box d-block"></div>
                        <div className="single skeleton_box d-block mt-3"></div>
                        <div className="single skeleton_box d-block mt-3"></div>
                    </Col>
                </Row>
                </div>
            </Container>
        </section>
    )
}

export default OurBrandSkeleton;