import Truck from '../components/Truck'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'



const TruckPage = () => {
  const BASE_URL = 'http://localhost:3001/api'
  const [receipt, setReceipt] = useState({})
  const [isSelected, setIsSelected] = useState(false)
  const [cart, setCart] = useState([])
  const [truck, setTruck] = useState({})
  const [menuItems, setMenuItems] = useState([])
  
  let { ftid } = useParams()

  useEffect(() => {
    if (!isSelected) {
      const getTruck = async () => {
        const response = await axios.get(`${BASE_URL}/food-trucks/${ftid}`)
        const result = await axios.get(`${BASE_URL}/menu/${response.data.menu}/items`)
        
        setTruck(response.data)
        setMenuItems(result.data)
        
      }
      getTruck()

    } else if (isSelected) {
      const getReceipt = async () => {
        const response = await axios.get(`${BASE_URL}/receipts/:rID`)
        setReceipt(response)
      }
      getReceipt()
    }
  }, [isSelected, ftid])

  return (
    <div>
      <Truck 
      BASE_URL={BASE_URL}
        truck={truck} setTruck={setTruck}
        cart={cart} setCart={setCart}
        isSelected={isSelected} setIsSelected={setIsSelected}
        menuItems={menuItems} setMenuItems={setMenuItems}
        receipt={receipt} setReceipt={setReceipt}
        />
    </div>
  )
}

export default TruckPage
