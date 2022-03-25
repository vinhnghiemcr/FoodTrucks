import React from 'react'
import Item from "./Item"
import Review from './Review'

const Receipt = ({ cart, truckId }) => {
  return (
    <div className="receipt">
      <h1>Receipt Summary</h1>
      <h3>Total: {cart} items bought!</h3>
      <Review truckId={truckId}/>
    </div>
  )
}


export default Receipt

