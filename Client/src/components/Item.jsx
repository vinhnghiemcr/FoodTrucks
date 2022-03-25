import React from 'react'

const Item = ({ menuItem, onClickAdd, onClickMinus }) => {

  
  return (
    <div className='Item'>
      <div className="itemName" >
        <h3>{menuItem.name}</h3>
        <img src={menuItem.image} alt='food-image-picture'/>
        <h5>{menuItem.description}</h5>
        <h6>{menuItem.price}</h6>
        <button onClick={(e) => onClickAdd(e, menuItem._id)}>+</button>
        <button onClick={(e) => onClickMinus(e, menuItem._id)}>-</button>
      </div>
    </div>
  )
}

export default Item

