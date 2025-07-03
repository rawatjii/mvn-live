import React from 'react'
import OfflineMedia from './components/media-centre/OfflineMedia'
import Gallery from './components/media-centre/Gallery'
import OnlineMedia from './components/media-centre/OnlineMedia'
import PressRelease from './components/media-centre/PressRelease'
import Events from './components/media-centre/Events'
import Compliance from './components/media-centre/Compliance'

const AdminMediaCentre = () => {
  return (
    <>
      <OfflineMedia/>
      <OnlineMedia/>
      <PressRelease />
      <Compliance />
      <Gallery />
      <Events />
    </>
  )
}

export default AdminMediaCentre