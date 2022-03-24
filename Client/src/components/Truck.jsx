import { Link } from 'react-router-dom'
import Menu from "./Menu"
import Review from './Review'
import CheckOut from './CheckOut'
import {}

const Truck = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    let isSelected = false
    const getItems = async () => {
      const response = await axios.get(
        '/food-trucks/:id'
      )
      if (!isSelected) {
        setItems(response.food-trucks)
      }
    }
    getItems()
    return () => {
      isSelected = true
    }
  })

  return (

  )
}

export default Truck