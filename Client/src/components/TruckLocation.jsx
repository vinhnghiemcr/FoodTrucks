import React from 'react'
import Truck from '../assets/foodtruckIcon.png'
import { Link } from 'react-router-dom'
// import TruckPage from '../pages/TruckPage'

const TruckLocation = ({trucks}) => {
  

  
  return (
    <div className='truckButton'> 
    {trucks.map((truck) => (
      <Link to={`/food-trucks/${truck._id}`} key={truck._id}>
        
        <img src={Truck} className="foodTruckIcon"/>
      </Link>
    ))}
    </div>

  //   <div className="container-grid">
  //   {trucks.map((truck) => (
  //     <Link to={`/food-trucks/${truck._id}`} key={truck._id}>
  //       <TruckPage

  //         {...truck}
  //       />
  //     </Link>
  //   ))}
  // </div>
  )
}
export default TruckLocation