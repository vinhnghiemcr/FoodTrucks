import React from 'react'
import Review from './Review'

const Receipt = ({ menuItems, cart, truckId }) => {


  return (
    <div className="receipt">
      <h1>Receipt Summary</h1>
      {/* {cart.} */}
      <h3>Total: {cart.length} items bought!</h3>
      <Review truckId={truckId}/>
    </div>
  )
}


export default Receipt

