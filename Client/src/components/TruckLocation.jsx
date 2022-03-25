import React from 'react'
import Truck from '../assets/foodtruckIcon.png'
import { Link } from 'react-router-dom'

const TruckLocation = ({ trucks }) => {

  
  return (
    <div className='truckLocation'>
      {trucks.map((truck) => ( 
        <Link to={`/food-truck/${truck._id}`} key={truck._id}>
          <img src={Truck} className="foodTruckIcon"></img>
        </Link>
      ))}
    </div>
  )
}
export default TruckLocation

