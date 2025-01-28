import React from 'react'
import * as CONFIG from '../../../../config/config';
import './banner.css'

const AthensBanner = ({data}) => {
  return (
    <div className="AthensBanner">
    <img src={data.desktop} alt="Desktop Banner" className="d-none d-md-block"/>
    <img src={data.mobile} alt="Mobile  Banner" className="d-md-none"/>
  </div>
  )
}

export default AthensBanner