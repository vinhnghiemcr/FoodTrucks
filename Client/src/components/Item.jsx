import React from 'react'

const Item = ({ menuItem, onClick }) => {
  return (
    <div>
      <div className="itemName" onClick={onClick}>
        <h3>{menuItem.name}</h3>
        {/* <h5>{menuItem.description}</h5>
        <h5>{menuItem.image}</h5> */}
        <h5>{menuItem.price}</h5>
      </div>
    </div>
  )
}

export default Item

