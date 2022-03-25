import React from 'react'

const Item = ({ menuItem, onClickAdd, onClickMinus }) => {

  
  return (
    <div>
      <div className="itemName" >
        <h3>{menuItem.name}</h3>
        {/* <h5>{menuItem.description}</h5>
        <h5>{menuItem.image}</h5> */}
        <h5>{menuItem.price}</h5>
        <button onClick={(e) => onClickAdd(e, menuItem._id)}>+</button>
        <button onClick={(e) => onClickMinus(e, menuItem._id)}>-</button>
      </div>
    </div>
  )
}

export default Item

