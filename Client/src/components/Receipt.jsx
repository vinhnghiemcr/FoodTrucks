import React from 'react'
import Review from './Review'
import axios from 'axios'
import moment from "moment"

const Receipt = ({ menuItems, cart, truckId }) => {
  let items = cart.sort()
  let total = 0
  
  let data = []
 
  const getItemData = ( id ) => {
    let result = {}
    menuItems.forEach(element => {
      if (element._id === id) {
        console.log(element, "Item matching")
         result = element
         return
      }
    })
    return result
  }
  console.log(getItemData('624155f8fbcbde843aa8d7af'), "Item Return")


  const getNameAndPrice = () => {
    for (let i = 0; i< items.length; i++) {
      if (i == 0) {
        data.push({...getItemData(items[i]), count: 1})
      } else if (items[i] === items[i-1]) {
        data[data.length - 1].count++
      } else {
        data.push({...getItemData(items[i]), count: 1})
      }
    }
  }
  getNameAndPrice()
  console.log(data, "DATAAAAAAAA")


  const generateMenu = () => {
    return (
    <div>
      <h4>Items............Price.............Quantity </h4>
      {data.map((item) => {
        total += item.price * item.count
        return <h5>{item.name}...${item.price}...{item.count}</h5>
      })}
      <h3>Total:        ${total}</h3>
    </div>)
  }
  
  const receipt = {
    items: [...cart],
    totalCost: data.reduce((total, item) => total += item.price * item.count, 0),
    date: moment().format("DD-MM-YYYY hh:mm:ss").toString(),
    paid: true,
    truck: truckId
  }
  const saveReceipt = async () => {
    console.log(receipt, 'Reciept for axios')
    await axios.post(`http://localhost:3001/api//receipt`, receipt)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  saveReceipt()

  
    


  return (
    <div className="receipt">
      <h1>Receipt Summary</h1>
      { generateMenu()}
      {/* <h3>Total: {total} items bought!</h3> */}
      <Review truckId={truckId}/>
    </div>
  )
}


export default Receipt

