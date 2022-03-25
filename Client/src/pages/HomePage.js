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
      setTruck(response.data)
      console.log(response.data)
    }
    getTrucks()
  }, [])

  return (
    <div>
<<<<<<< HEAD
      <MapTruck trucks={trucks} />
=======
      <Map trucks={trucks} />
>>>>>>> b5bc1dda60bb462f72274ebe412881cd830a2b7c
    </div>
  )
}

export default HomePage
