import Item from 'item'

const Menu = (props) => {

  return (
    <div className='ClassGrid'>
      {props.items.map((item) => {
      <Item name={item.name} description={item.description} img=/>
      }
    </div>
    )
}

export default Menu