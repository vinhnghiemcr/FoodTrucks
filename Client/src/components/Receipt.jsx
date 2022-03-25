import React from 'react'
import Review from './Review'

const Receipt = ({ menuItems, cart, truckId }) => {
  let items = cart.sort()
  let total = 0
  let result = []
  // const getNameAndPrice = () => {

  //   for (let i = 0; i< items.length; i++) {
  //     if (i == 0) {
  //       result = [getItemData(items[i])] 
  //     }
  //   }
    

  // const getItemData = ( id ) => {
  //   menuItems.forEach(element => {
  //     if (element._id === id) {
  //       return element
  //     }
  //   })
  // }

  //     items.forEach((item) => {
        

  //     }

  //     }
  //   })
  // }
  // const total = () => {
  //  items.forEach((item) => {
    
  //  })
    
  
// }

  return (
    <div className="receipt">
      <h1>Receipt Summary</h1>
      {/* { generateMenu()} */}
      <h3>Total: {total} items bought!</h3>
      <Review truckId={truckId}/>
    </div>
  )
}


export default Receipt

