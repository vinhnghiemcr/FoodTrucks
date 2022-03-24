import React from 'react'
import Truck from '../assets/foodtruckIcon.png'

const TruckLocation = (props) => {
  return (
    <button className='truckButton'> 
      <img src={Truck} className="foodTruckIcon"/>
    </button>
  )
}
export default TruckLocation