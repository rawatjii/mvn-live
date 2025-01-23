import React from "react";
import { Container } from "react-bootstrap";

const Csr = ()=>{
    window.scrollTo(0, 0);
    return(
        <section className="upcoming_page">
            <Container>
                <h2>Coming Soon</h2>
                <p>CSR</p>
            </Container>
        </section>
    )
}

export default Csr;