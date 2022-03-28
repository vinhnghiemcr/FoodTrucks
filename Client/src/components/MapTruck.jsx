import TruckLocation from './TruckLocation'
import React from 'react'


const MapTruck = ({trucks}) => {

  return (
    <div className="truckContainer foodBalloon" >
        {trucks.map((truck, index) => 
        <TruckLocation truck={truck} index={index}/>
        )}
        {/* <TruckLocation truck={trucks}/> */}

    </div>
  )
}

export default MapTruck