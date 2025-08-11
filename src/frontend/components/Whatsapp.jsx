import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

const WhatsappBtn = ()=>{

  return (
    <div className="floating_whatsapp_btn">
      <Link target="_blank" to="https://wa.me/message/6RWQT5CDTMA7C1" rel="noopener noreferrer">
        <div className="contact_icon">
          <img src="/assets/icons/whatsapp.png" alt='whatsapp' />
        </div>
      </Link>
      <p className="text_icon">Talk to us?</p>
    </div>
  )
}

export default WhatsappBtn;