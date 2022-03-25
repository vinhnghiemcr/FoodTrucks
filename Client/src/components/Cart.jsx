import React from 'react'

const Cart = ({ cart, onClick }) => {

  return (
    <div>
      <h1>Cart</h1>
      <h3>{cart.length} Items</h3>
      <button onClick={onClick}>Checkout</button>
    </div>
  )
}

export default Cart