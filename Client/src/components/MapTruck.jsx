import TruckLocation from './TruckLocation'
import React from 'react'


const MapTruck = ({trucks}) => {

  return (
    <div className="truckContainer foodBalloon" >
        <TruckLocation trucks={trucks}/>
    </div>
  )
}

export default MapTruck