import React from "react";
import { Container } from "react-bootstrap";

const Gallery = ()=>{
    window.scrollTo(0, 0);
    return(
        <section className="upcoming_page">
            <Container>
                <h2>Coming Soon</h2>
                <p>Gallery</p>
            </Container>
        </section>
    )
}

export default Gallery;