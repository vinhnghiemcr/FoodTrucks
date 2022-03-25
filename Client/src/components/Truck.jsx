import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Menu from "./Menu"
import Cart from './Cart'
import Receipt from './Receipt'

const Truck = () => {
  // const [ftid, setFTID] = useState('')
  const [truckDetail, setTruck] = useState({})
  const [menuDetail, setMenu] = useState({})
  const [receipt, setReceipt] = useState({})
  const [isSelected, setIsSelected] = useState(false)

  let { ftid } = useParams()
  console.log(ftid)

  // let isSelected = false

  const BASE_URL = 'http://localhost:3001/api'

  useEffect(() => {
    if (!isSelected) {
      const getTruck = async () => {
        const response = await axios.get(`${BASE_URL}/food-trucks/${ftid}`)
        // const response = await axios.get(`http://localhost:3001/api/food-trucks/623ca6e1cf038b9d83833ed7`)
        console.log(`${BASE_URL}/food-trucks/${ftid}` , "URL")
        setTruck(response)
        console.log(response, "Truck details")
      }
      getTruck()
      const getMenu = async () => {
        const response = await axios.get(
          '/food-trucks/:id/menu/item'
        )
          setMenu(response)
      }
      getMenu()
      const getCart = () => {

      }
      getCart()
    } else if (isSelected) {
      const getReceipt = async () => {
        const response = await axios.get(`${BASE_URL}/receipts/:rID`)
        setReceipt(response)
      }
      getReceipt()
    }
  }, [isSelected, ftid])

  const checkout = async () => {
    const response = await axios.post(`${BASE_URL}/receipt/:ftid`)
    isSelected = true
  }

  let page = isSelected ? (
    <Receipt details={receipt}/>
  ) : (
    <div className ="truckComponent">
      <div className="truckDetails">
        <h1>{truckDetail.name}</h1>
        <img src={truckDetail.img} alt='foodtruck' />
      </div>
      <section className="menuDetals">
        <Menu menu={menuDetail}/>
      </section>
      <section className='cart'>
        <Cart onClick={checkout}/>
      </section>
    </div>
  )

return (
  {page}
)
}

export default Truck
