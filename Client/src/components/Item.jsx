import React from 'react'

const Item = ({ menuItem, onClick }) => {

  // const handleClick = (item, price) => {
  //   onclick(item, price)
  // }
  return (
    <div>
      <div className="itemName" onClick={(e) => onClick(e, menuItem._id)}>
        <h3>{menuItem.name}</h3>
        {/* <h5>{menuItem.description}</h5>
        <h5>{menuItem.image}</h5> */}
        <h5>{menuItem.price}</h5>
        <button >+</button>
        <button >-</button>
      </div>
    </div>
  )
}

export default Item

