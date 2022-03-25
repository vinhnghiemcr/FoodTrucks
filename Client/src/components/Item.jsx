import React from 'react'

const Item = ({ menuItem, onClickAdd, onClickMinus }) => {

  
  return (
    <div className='Item'>
      <div className="itemName" >
        <img src={menuItem.image} alt='food-image-picture'/>
        <h3>{menuItem.name}</h3>
        <h5>{menuItem.description}</h5>
        <h5>{menuItem.price}</h5>
        <button onClick={(e) => onClickAdd(e, menuItem._id)}>+</button>
        <button onClick={(e) => onClickMinus(e, menuItem._id)}>-</button>
      </div>
    </div>
  )
}

export default Item

