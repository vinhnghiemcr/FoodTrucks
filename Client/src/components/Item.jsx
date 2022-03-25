
import React from 'react'
import { useEffect, useState  } from 'react'
import axios from 'axios'

const Item = (props) => {
  const BASE_URL = 'http://localhost:3001/api'
  // const [itemId, setItemId] = useState(props.itemId)
  const [itemData, setItemData] = useState({})
  useEffect(()=>{
    const getItem = async () => {
        const response = await axios.get(`${BASE_URL}/items/${props.itemId}`)
        console.log(response, "Item data")
        setItemData(response)
      }
      getItem()
  },[])


  return (
    <div>
      <div className="itemName" onClick={''}>
        <h3>{itemData.name}</h3>
        <h5>{itemData.description}</h5>
        <h5>{itemData.image}</h5>
        <h5>{itemData.price}</h5>
      </div>
    </div>
  )
}

export default Item

