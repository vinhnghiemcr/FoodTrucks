import { ReactDOM } from 'react-router-dom'
import TruckLocation from './TruckLocation'
import ThemePark from '../assets/ThemePark.jpeg'
import React from 'react'

const Map = () => {

  return (
    <div className="map">
      <img src={ThemePark} className="mapContainer" alt="mainHomepage" />
      <TruckLocation />
    </div>

  )
}

export default Map