import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ReactStars from 'react-stars'
import axios from 'axios'
import Item from "./Item"
import Cart from './Cart'
import Receipt from './Receipt'

const Truck = () => {

  const [truck, setTruck] = useState({})
  const [menuItems, setMenuItems] = useState([])
  const [receipt, setReceipt] = useState({})
  const [isSelected, setIsSelected] = useState(false)
  const [cart, setCart] = useState([])

  let { ftid } = useParams()
  console.log(ftid)

  const BASE_URL = 'http://localhost:3001/api'

  useEffect(() => {
    if (!isSelected) {
      const getTruck = async () => {
        const response = await axios.get(
          `${BASE_URL}/food-trucks/${ftid}`
        )
        setTruck(response.data)
      }
      getTruck()
      const getMenuItems = async () => {
        const response = await axios.get(
          `${BASE_URL}/items`
        )
        setMenuItems(response.data)
      }
      getMenuItems()
    } else if (isSelected) {
      const getReceipt = async () => {
        const response = await axios.get(`${BASE_URL}/receipts/:rID`)
        setReceipt(response)
      }
      getReceipt()
    }
  }, [isSelected, ftid])

  const getCart = (e, id) => {  
        setCart((currentCart) =>{ return [...currentCart, id]})
  }

  const checkout = async () => {
    // const response = await axios.post(`${BASE_URL}/receipt/:ftid`)
    setIsSelected(true)
  }

  let page = isSelected ? (
    <Receipt truckId={truck._id} details={receipt} cart={cart}/>
  ) : (
    <div className ="truckComponent">
      <div className="truckDetails">
        <h1>{truck.name}</h1>
        <ReactStars  count={truck.rating}   size={24} edit={false} color2={'yellow'} />
        
        <img src={truck.image} alt='foodtruck' />
      </div>
      <section className="menuDetals">
        <h3>Menu</h3>
        {menuItems.map((menuItem) => (<Item menuItem={menuItem} key={menuItem._id}  onClick={getCart}/>))}
      </section>
      <section className='cart'>
        <Cart onClick={checkout} cart={cart}/>
      </section>
    </div>
  )

return page
}

export default Truck
