import Truck from '../components/Truck'
import React from 'react'
import axios from 'axios'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TruckPage = () => {
  const BASE_URL = 'http://localhost:3001/api'
  let { ftid } = useParams()
  console.log(ftid)

  const [truckId, setTruckId] = useState("")

  // useEffect( async () => {
  //   const response = await axios.get(`http://localhost:3001/api/food-trucks/623ca6e1cf038b9d83833ed7`)
  //       console.log(`${BASE_URL}/food-trucks/${ftid}` , "URL")
        
  //       console.log(response, "Truck details")
  //       setTruckId(ftid)
  // }, [ftid])

  return (
    <div>
      <Truck ftid={truckId}/>
    </div>
  )
}

export default TruckPage
