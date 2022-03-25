import React from 'react'
import Truck from '../assets/foodtruckIcon.png'
import { Link } from 'react-router-dom'

const TruckLocation = ({ trucks }) => {

  
  return (
    <div>
      {trucks.map((truck) => (
        <Link to={`/food-trucks/${truck._id}`} key={truck._id}>
          <img src={Truck} className="foodTruckIcon"/>
        </Link>
      ))}
    </div>
  )
}
export default TruckLocation

