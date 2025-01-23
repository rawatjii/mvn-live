import React from 'react'
import { Container } from 'react-bootstrap'

function WebHero() {
  return (
    <>
        <section className="section micro_hero_section p-0">
        <div className="hero-img">
            <img src={''} alt="mvn-hero-image" className="img-fluid" fetchPriority="high" />
        </div>

        <div className="hero_content">
          <Container>
            <div className="content">
              <h5 className="starting_price">   
                <small>Starting At</small>
                ₹ 4.51 Cr*
              </h5>
              <p className="typo">2 & 3 BHK Luxury Apartments</p>
            </div>
          </Container>
        </div>
        
      </section>
    </>
  )
}

export default WebHero