
import React from 'react'

const Item = ({ item, onClickAdd, onClickMinus }) => {

  
    
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

