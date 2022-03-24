import Item from 'item'

const Menu = (props) => {
<<<<<<< HEAD
  

  return (
    <div className='ClassGrid'>
      <h3>{props.name}</h3>
      {props.items.map((item) => {
      <Item name={item.name} description={item.description}/>
      })}
=======

  return (
    <div className='ClassGrid'>
      {/* {props.items.map((item) => {
      <Item name={item.name} description={item.description}/>
      } */}
>>>>>>> a290984e516ecfbd254aa58203339a3172b2e8d1
    </div>
    )
}

<<<<<<< HEAD

=======
>>>>>>> a290984e516ecfbd254aa58203339a3172b2e8d1
export default Menu