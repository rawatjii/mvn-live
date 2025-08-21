import React from 'react'

const ContactInfo = ({white}) => {
  return (
    <section className='Contact-info contact-us-section '>
        <div className="container">
            <div className='contact-info-title'>
            <h2>Begin your Project Exploration with us, your journey begins here. </h2>
            {white 
            ? <p className={`title mt-4`}>Call our Ultra Luxury Sales Specialist</p>
            : <p className={`detail_title mt-4`}>Call our Ultra Luxury Sales Specialist</p>
            }
            
            </div>

    <div className='row gy-3 d-flex justify-content-center'>
        <div className="col-12 col-md-6 col-xl-3">
            <div className="card">
                <div><span className='name'>Vidhi Negi</span></div>
                <div><img src="/icons/employee.png" alt="designation" /><span> DGM Sales</span></div>
                <div><img src="/icons/call.png" alt="call icon" /> <a href="tel:+919311051426">(+91) 9311051426</a></div>
                <div><img src="/icons/email.png" alt="main icon" /> <a href="mailto:smtm@mvninfrastructure.com">smtm@mvninfrastructure.com</a></div>
                
            </div>
        </div>
        <div className="col-12 col-md-6 col-xl-6">
            <div className='contact-info-title'>
            <h2>Begin your Project Exploration with us, your journey begins here. </h2>
            <p className='detail_title mt-4'>Call our Ultra Luxury Sales Specialist</p>
            </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
            <div className="card">
                <div> <span className='name'>Archi Rajpal</span></div>
                <div><img src="/icons/employee.png" alt="designation" /><span> DGM Sales</span></div>
                <div><img src="/icons/call.png" alt="call icon" /> <a href="tel:+919870101385">(+91) 9870101385</a></div>
                <div><img src="/icons/email.png" alt="main icon" /> <a href="mailto:smto@mvninfrastructure.com">smto@mvninfrastructure.com</a></div>
                
            </div>
        </div>
      
    </div>
    </div>
    </section>
  )
}

export default ContactInfo
