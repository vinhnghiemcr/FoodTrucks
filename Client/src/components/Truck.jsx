import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Menu from "./Menu"

const Truck = () => {

  const [truckDetail, setTruck] = useState()
  const [menuDetail, setMenu] = useState()

  useEffect(() => {
    let isSelected = false
    const getTruck = async () => {
      const response = await axios.get(
        '/food-trucks/:id'
      )
    }

    const getMenu = async () => {
      const response = await axios.get(
        '/food-trucks/:id/menu/item'
      )
    }

    if (!isSelected) {
      setMenu(response.food-trucks)
      setTruck(response.food-trucks)
    }

    getTruck()
    getMenu()
    return () => {
      isSelected = true
    }
  })


return (

  <div className ="truckComponent">
    <div className="truckDetails">
      <h1>{truckDetails.name}</h1>
    </div>
    <section className="menuDetals">
      <h2>MENU</h2>
      <h3>{menuDetails.item}</h3>
      <h4>{menuDetails.item.description}</h4>
      <h4>{menuDetails.item.image}</h4>
      <h4>{menuDetails.item.price}</h4>
    </section>

  </div>
)
}

export default Truck
