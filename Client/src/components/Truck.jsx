import React, { useState } from 'react'
import { useEffect } from 'react'
import ReactStars from 'react-stars'
import Item from "./Item"
import Cart from './Cart'
import Receipt from './Receipt'
import axios from 'axios'

const Truck = ({BASE_URL,truck, cart, setCart, isSelected, setIsSelected, receipt,  menuItems }) => {
  const [menu, setMenu] = useState({})
  useEffect (async () => {
    const response = await axios.get(`${BASE_URL}/menu/${truck.menu}`)
    console.log(response, 'ITEMMMMMMMMMMMMMMMMMMMMMMMMMMMM')
    setMenu(response)
  }, [] )
  
  const addToCart = (e, id) => {
        setCart((currentCart) =>{ return [...currentCart, id]})
  }

  const removeFromCart = (e, id) => {  
    setCart((currentCart) =>{      
      let items = currentCart
        for (let i = 0; i < items.length; i++) {
          if (items[i] === id) {
            items.splice(i,1)
            break
          }       
        }
        return [...items]
      })
}

  const checkout = async () => {
    // const response = await axios.post(`${BASE_URL}/receipt/:ftid`)
    setIsSelected(true)
  }

  let page = isSelected ? (
    <Receipt truckId={truck._id} menuItems={menuItems} cart={cart}/>
  ) : (
    <div className ="truckComponent">
      <div className="truckDetails">
        <h1>{truck.name}</h1>
        <ReactStars  value={truck.rating} className="stars" size={24} edit={false} color2={'yellow'} />
        
        <img src={truck.image} alt='foodtruck' />
      </div>
      <div className='menu'>
      
        <h2>Menu</h2>
        {menu.items.map((itemId) => 
        (<Item BASE_URL={BASE_URL} itemId={itemId} className='item' key={menu._id} onClickAdd={addToCart} onClickMinus={removeFromCart}/>))}
          
      </div>
      <section className='cart'>
        <Cart onClick={checkout} cart={cart}/>
      </section>
    </div>
  )

return page
}

export default Truck
