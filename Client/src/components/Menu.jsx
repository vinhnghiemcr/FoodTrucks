// import Item from 'Item'
import React from "react"

const Menu = (props) => {

  return (
    <div className='ClassGrid'>
      <h3>{props.name}</h3>
      {/* {props.items.map((item) => {
      <Item name={item.name} description={item.description}/>
      })} */}
    </div>
    )
}

export default Menu