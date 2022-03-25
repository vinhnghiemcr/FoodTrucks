import { ReactDOM } from 'react-router-dom'
import TruckLocation from './TruckLocation'

import ThemePark from '../assets/ThemePark.jpeg'
import React from 'react'


const Map = ({ trucks }) => {

  return (
    <div className="truckContainer">
        <TruckLocation trucks={trucks}/>
    </div>

  )
}

export default Map