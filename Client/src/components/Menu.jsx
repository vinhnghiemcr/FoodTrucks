
import React from 'react'
import Item from './Item'

const Menu = (props) => {
  
  return (
    <div className='ClassGrid'>
      <h3>{props.name}</h3>
      {props.items.map((item) => {
        return <Item name={item.name} description={item.description}/>
      })}

    </div>
    )
}

export default Menu