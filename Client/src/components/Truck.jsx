import React from 'react'

import ReactStars from 'react-stars'
import Item from "./Item"
import Cart from './Cart'
import Receipt from './Receipt'

const Truck = ({truck, cart, setCart, isSelected, setIsSelected, receipt,  menuItems }) => {

 
  const addToCart = (e, id) => {  
    console.log( truck.rating, "RATIIIINNGGGGGGGGGGGGG")
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
  console.log(truck.rating, "Ratingggggggggggg")
  let page = isSelected ? (
    <Receipt truckId={truck._id} menuItems={menuItems} details={receipt} cart={cart}/>
  ) : (
    <div className ="truckComponent">
      <div className="truckDetails">
        <h1>{truck.name}</h1>
        <ReactStars  value={truck.rating} className="stars" size={24} edit={false} color2={'yellow'} />
        
        <img src={truck.image} alt='foodtruck' />
      </div>
      <div className='menu'>
        <h2>Menu</h2>
        <section className="menuDetails">
          {menuItems.map((menuItem) => 
          (<Item menuItem={menuItem} className='item' key={menuItem._id} onClickAdd={addToCart} onClickMinus={removeFromCart}/>))}
        </section>
      </div>
      <section className='cart'>
        <Cart onClick={checkout} cart={cart}/>
      </section>
    </div>
  )

return page
}

export default Truck
