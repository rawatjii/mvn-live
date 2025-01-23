import React from 'react'
import { Container } from 'react-bootstrap'

function Rera({data}) {
    console.log(data);
    
  return (
    <div className='rera_container'>
        <Container className='py-5 my-5'>

            <div className='rera_content text-center'>
                {
                    data.raraDetails && data.raraDetails.map((el, i)=>(
                        <div className='single_rera_content' key={`rera-${i}`}>
                            <p>{el}</p>
                        </div>
                    ))
                }
            </div>

        </Container>
        
    </div>
  )
}

export default Rera