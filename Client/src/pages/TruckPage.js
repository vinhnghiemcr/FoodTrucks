import Truck from '../components/Truck'
import React from 'react'

const data = {
  name: 'Express Food Truck',
  menu: {
    name: 'Drinks menu',
    items: [
      {
        name: 'Coke'
      },
      {
        name: 'Apple'
      },
      {
        name: 'water'
      }
    ]
  },
  location: 'North West',
  image: '',
  reviews: ['hkdsjfgak', 'dskgfka']
}

const TruckPage = () => {
  return (
    <div>
      <Truck />
    </div>
  )
}

export default TruckPage
