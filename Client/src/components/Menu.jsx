
// import React from 'react'
// import Item from './Item'
// import { useEffect, useState  } from 'react'

// const Menu = (props) => {

//   const [menuId, setMenuId] = useState(props.menuID)
//   useEffect(()=>{
//     const getMenuItems = async () => {
//         const response = await axios.get(
//           `${BASE_URL}/items`
//         )
//         console.log(response.data)
//         setMenu(response.data)
//       }
//       getMenuItems()
//   },[])
  
//   return (
//     <div className='ClassGrid'>
//       <h3>{props.name}</h3>
//       {props.items.map((item) => {
//         return <Item name={item.name} description={item.description}/>
//       })}

//     </div>
//     )
// }

// export default Menu