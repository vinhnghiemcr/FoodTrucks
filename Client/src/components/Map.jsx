import { ReactDOM } from 'react-router-dom'
import TruckLocation from './TruckLocation'
import ThemePark from '../assets/ThemePark.jpeg'

const Map = () => {

  return (
    <div className="map">
      <img src={ThemePark} className="mapContainer" alt="mainHomepage" />
      <TruckLocation />
    </div>

  )
}

export default Map