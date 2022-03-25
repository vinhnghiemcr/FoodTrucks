import '../style/App.css'
import MapTruck from '../components/MapTruck'
import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'

const HomePage = () => {
  const [trucks, setTruck] = useState([])
  
  const BASE_URL = 'http://localhost:3001/api'

  useEffect(() => {
    const getTrucks = async () => {
      const response = await axios.get(`${BASE_URL}/food-trucks`)
      console.log(response.data, " MANY TRUCKS")
      setTruck(response.data)
    }
    getTrucks()
  }, [])

  return (
    <div className="truckLocation">
      <MapTruck trucks={trucks} />
    </div>
  )
}

export default HomePage
