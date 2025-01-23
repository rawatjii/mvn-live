import React from 'react'
import { Container } from 'react-bootstrap'
import SecTitle from '../../../common/SecTitle/Index'

function Slides() {
  return (
    <div className='py-5 my-5'>

        <Container>
            <SecTitle className="text-center color style1">
            <h4 className="title">Brochure</h4>
            </SecTitle>
        </Container>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS3JcNTzsbHj9wl3NpYbgKh-fiaJz5kLB0QWBBc7h2cX4VVb4y4om0ITjHTDolohI2sn76ktLrzOmdJ/embed?start=true&loop=true&delayms=3000" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" className='slide_iframe'></iframe>
    </div>

  )
}

export default Slides