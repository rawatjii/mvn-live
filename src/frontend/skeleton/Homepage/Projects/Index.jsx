import React from "react";

import './projectsSkeleton.css';
import { Col, Container, Row } from "react-bootstrap";

const ProjectsSkeleton = ()=>{
    return(
        <div className="section projects_section projects_loading">
            <Container>
                <Row className="mx_-8">
                    <Col  xs={6} className="px_8 left_col">
                        <h3 className="sec_title skeleton_box d-block"></h3>

                        <div className="single">
                            <div className="img skeleton_box d-block"></div>

                            <div className="mt-3">
                                <h4 className="project_name skeleton_box d-block"></h4>
                                <p className="location mt-2 skeleton_box d-block"></p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={6} className="px_8 right_col">
                        <div className="single">
                            <div className="img skeleton_box d-block"></div>

                            <div className="mt-3">
                                <h4 className="project_name skeleton_box d-block"></h4>
                                <p className="location mt-2 skeleton_box d-block"></p>
                            </div>
                        </div>

                        <div className="single">
                            <div className="img skeleton_box d-block"></div>

                            <div className="mt-3">
                                <h4 className="project_name skeleton_box d-block"></h4>
                                <p className="location mt-2 skeleton_box d-block"></p>
                            </div>
                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsSkeleton