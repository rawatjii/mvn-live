import React from 'react'
import { API_URL } from '../../config/config'

const ContactInfo = () => {
  return (
    <section className='Contact-info'>
        <div className="container">
    <div className='row gy-3'>
        <div className="col-12 col-md-6">
            <div className="card">
                <div><img src="/icons/user.png" alt="user" /> <span className='name'>Vidhi Negi</span></div>
                <div><img src="/icons/employee.png" alt="designation" /><span> DGM Sales</span></div>
                <div><img src="/icons/call.png" alt="call icon" /> <a href="tel:+919311051426">(+91) 9311051426</a></div>
                <div><img src="/icons/email.png" alt="main icon" /> <a href="mailto:smtm@mvninfrastructure.com">smtm@mvninfrastructure.com</a></div>
                
            </div>
        </div>
        <div className="col-12 col-md-6">
            <div className="card">
                <div> <img src="/icons/user.png" alt="user" /> <span className='name'>Archi Rajpal</span></div>
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
