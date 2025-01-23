import React from "react";
import './otherProjects.css'
import { Col, Container, Row } from "react-bootstrap";

const OtherProjectsSkeleton = ()=>{
    return(
        <section className="section other_projects_section other_projects_loading pb-0">
            <Container>
                <h4 className="title skeleton_box d-block"></h4>

                <Row>
                    <Col xs={12} className="single_col">
                        <div className="single mt-3 skeleton_box d-block">
                           
                        </div>

                        <div className="single mt-3 skeleton_box d-block">
                           
                        </div>

                        <div className="single mt-3 skeleton_box d-block">
                           
                        </div>
                    </Col>

                
                </Row>
            </Container>
        </section>
    )
}

export default OtherProjectsSkeleton