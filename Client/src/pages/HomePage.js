import '../style/App.css'
import Map from '../components/Map'
import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react'

const HomePage = () => {
  const [trucks, setTruck] = useState()

  const BASE_URL = 'http://localhost:3001/api'

  useEffect(() => {
    const getTrucks = async () => {
      const response = await axios.get(`${BASE_URL}/food-trucks`)
      setTruck(response.data)
      console.log(response.data)
    }
    getTrucks()
  }, [])

  return (
    <div>
      <Map />
    </div>
  )
}

export default HomePage
