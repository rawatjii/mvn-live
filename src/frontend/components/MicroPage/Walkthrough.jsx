import React from "react";
import CustomCard from "../Card";
import {Container } from "react-bootstrap";

const Walkthrough = ()=>{

  return(
    <section className="section walkthrough_section pb-0">
 
   
      <Container>
        <div className='about'>
          <CustomCard
          className="px-0"
            title="A GLIMPSE INTO A LIFE EXTRAORDINARY" 
            desc="Take a guided virtual tour through our stunning spaces with a walkthrough video that brings your future home to life. Every detail is showcased, allowing you to experience the design, luxury, and lifestyle that await you." 
          />
        </div>

        
      </Container>
    </section>
    
  )
}

export default Walkthrough