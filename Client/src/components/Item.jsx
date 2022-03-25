import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Item = ({ BASE_URL, itemId, onClickAdd, onClickMinus }) => {

    const [item, setItem] = useState({})

    useEffect( async ()=>{
      const response = await axios.get(`${BASE_URL}/item/${itemId}`)
      setItem(response)
    }, [])
    
  return (
    <div className='Item'>
      <div className="itemName" >
        <img src={item.image} alt='food-image-picture'/>
        <h3>{item.name}</h3>
        <h5>{item.description}</h5>
        <h5>{item.price}</h5>
        <button onClick={(e) => onClickAdd(e, item._id)}>+</button>
        <button onClick={(e) => onClickMinus(e, item._id)}>-</button>
      </div>
    </div>
  )
}

export default Item

