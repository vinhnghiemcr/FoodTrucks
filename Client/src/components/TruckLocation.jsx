import React from 'react'
import Truck from '../assets/foodtruckIcon.png'
import { Link } from 'react-router-dom'

const TruckLocation = ({ truck, index}) => {

  
  // trucks.forEach(truck => console.log(truck, "TRuck fron location"))
  
  return (
    <div>      
        <Link to={`/food-trucks/${truck._id}`} key={truck._id}>
          <img src={Truck} alt="truck icon" className={`foodTruckIcon${index}`}/>
        </Link>     
    </div>
  )
}
export default TruckLocation

