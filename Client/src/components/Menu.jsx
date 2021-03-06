import React from 'react'
import Item from './Item'

const Menu = ({ menuItem }) => {
  
  return (
    <div className='ClassGrid'>
      <h3>{menuItem.name}</h3>
      {props.items.map((item) => {
        return <Item name={item.name} description={item.description}/>
      })}
    </div>
    )
}

export default Menu